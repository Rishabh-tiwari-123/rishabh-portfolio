from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
import uuid
from datetime import datetime, timezone

import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
OWNER_EMAIL = os.environ.get('OWNER_EMAIL', 'rishabh12345601@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Logging (declared early so routes can log safely)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# App + router
app = FastAPI(title="Rishabh Tiwari Portfolio API")
api_router = APIRouter(prefix="/api")


# ===== Models =====
class ContactMessageIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    email_sent: bool = False
    email_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Rishabh Tiwari Portfolio API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {
        "status": "healthy",
        "resend_configured": bool(RESEND_API_KEY),
        "owner_email": OWNER_EMAIL,
    }


def _build_email_html(payload: ContactMessageIn) -> str:
    safe_msg = payload.message.replace('\n', '<br/>')
    return f"""
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; background:#0a0a0a; padding:32px; color:#fff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#111; border:1px solid #222; border-radius:16px; padding:32px;">
        <tr><td>
          <p style="font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:#E5FE40; margin:0 0 8px;">New portfolio message</p>
          <h1 style="font-size:24px; margin:0 0 24px; color:#fff;">{payload.subject}</h1>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="color:#888; font-size:12px; padding:6px 0;">From</td><td style="color:#fff; font-size:14px;">{payload.name}</td></tr>
            <tr><td style="color:#888; font-size:12px; padding:6px 0;">Email</td><td style="color:#fff; font-size:14px;">{payload.email}</td></tr>
          </table>
          <div style="background:#0a0a0a; border-left:3px solid #E5FE40; padding:16px 20px; border-radius:8px; color:#ddd; font-size:14px; line-height:1.6;">
            {safe_msg}
          </div>
          <p style="margin-top:32px; font-size:12px; color:#666;">Sent from rishabhtiwari.dev portfolio contact form</p>
        </td></tr>
      </table>
    </div>
    """


@api_router.post("/contact")
async def submit_contact(payload: ContactMessageIn):
    record = ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
    )

    # Try to send email if Resend is configured
    if RESEND_API_KEY:
        try:
            params = {
                "from": SENDER_EMAIL,
                "to": [OWNER_EMAIL],
                "reply_to": payload.email,
                "subject": f"[Portfolio] {payload.subject}",
                "html": _build_email_html(payload),
            }
            result = await asyncio.to_thread(resend.Emails.send, params)
            record.email_sent = True
            record.email_id = result.get("id") if isinstance(result, dict) else None
        except Exception as e:
            logger.error(f"Resend send failed: {e}")
            # Still save the message; surface a soft error to client
            doc = record.model_dump()
            doc['created_at'] = doc['created_at'].isoformat()
            await db.contact_messages.insert_one(doc)
            raise HTTPException(status_code=502, detail="Email service failed. Your message was saved.")

    # Persist (always)
    doc = record.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)

    return {
        "ok": True,
        "id": record.id,
        "email_sent": record.email_sent,
        "message": "Message received. Thanks for reaching out!" if record.email_sent
                   else "Message saved. Email delivery is not configured yet — Rishabh will see it.",
    }


# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
