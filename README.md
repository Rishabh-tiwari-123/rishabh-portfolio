# Rishabh Tiwari — Portfolio

Personal portfolio website. Built with React, FastAPI, MongoDB, and a contact form powered by Resend.

## Stack

- **Frontend:** React 18, Tailwind CSS, Framer Motion, lucide-react
- **Backend:** FastAPI, Motor (async MongoDB), Resend
- **Database:** MongoDB

## Prerequisites

- Node.js 18 or newer
- Python 3.10 or newer
- MongoDB (local install or MongoDB Atlas free tier)

## Run locally

### 1. Backend

```bash
cd backend
python -m venv venv

# Activate the virtual env:
# Windows (PowerShell):   venv\Scripts\Activate.ps1
# Windows (CMD):          venv\Scripts\activate.bat
# Mac / Linux:            source venv/bin/activate

pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Verify: open <http://localhost:8001/api/> — should show the API status JSON.

### 2. Frontend

In a **new terminal**:

```bash
cd frontend
npm install
npm start
```

Opens at <http://localhost:3000>

## Configuration

### MongoDB

Default uses local MongoDB at `mongodb://localhost:27017`. To use MongoDB Atlas instead, edit `backend/.env`:

```
MONGO_URL=mongodb+srv://<user>:<password>@cluster.xxx.mongodb.net/
```

### Email (contact form)

The contact form works without email config — it will still save submissions to MongoDB. To enable actual email delivery:

1. Sign up at <https://resend.com> (free, 3000 emails/month)
2. Create an API key
3. Add to `backend/.env`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. Restart the backend

## Replace placeholder resume

Drop your actual PDF at `frontend/public/Rishabh_Tiwari_Resume.pdf` (keep filename).

## Deploy

- **Frontend:** Vercel — import the repo, set env `REACT_APP_BACKEND_URL` to the deployed backend URL.
- **Backend:** Render — `pip install -r requirements.txt`, start command `uvicorn server:app --host 0.0.0.0 --port $PORT`.
- **Database:** MongoDB Atlas (free tier).

## License

MIT © Rishabh Tiwari
