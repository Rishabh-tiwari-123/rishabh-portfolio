import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, Phone, Send, Loader2, CheckCircle2, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import { PERSON } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill out every field.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      setSent(true);
      toast.success(data.message || "Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(detail || "Could not send message. Please try email instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3">
            07 · Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium text-white leading-[1.05]">
            Have an idea?
            <br />
            <span className="text-zinc-500">Let&rsquo;s talk.</span>
          </h2>
          <p className="text-zinc-400 mt-6 leading-relaxed max-w-md">
            I&rsquo;m open to internships, freelance builds, hackathon teams, and collaborations.
            Drop a note — I usually reply within a day.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${PERSON.email}`}
              data-testid="contact-info-email"
              className="flex items-center gap-4 p-4 bg-[#0d0d0d] border border-white/10 rounded-2xl hover:border-[#E5FE40]/50 transition-colors group"
            >
              <span className="w-10 h-10 grid place-items-center rounded-full bg-white/5 group-hover:bg-[#E5FE40] group-hover:text-black transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Email</p>
                <p className="text-white text-sm">{PERSON.email}</p>
              </div>
            </a>
            <a
              href={`tel:${PERSON.phone}`}
              data-testid="contact-info-phone"
              className="flex items-center gap-4 p-4 bg-[#0d0d0d] border border-white/10 rounded-2xl hover:border-[#E5FE40]/50 transition-colors group"
            >
              <span className="w-10 h-10 grid place-items-center rounded-full bg-white/5 group-hover:bg-[#E5FE40] group-hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Phone</p>
                <p className="text-white text-sm">{PERSON.phone}</p>
              </div>
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-social-linkedin"
                className="inline-grid place-items-center w-12 h-12 rounded-full border border-white/15 hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-social-github"
                className="inline-grid place-items-center w-12 h-12 rounded-full border border-white/15 hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-7 bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                data-testid="contact-input-name"
                className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#E5FE40] focus:outline-none transition-colors"
                placeholder="Your full name"
                disabled={loading}
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                data-testid="contact-input-email"
                className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#E5FE40] focus:outline-none transition-colors"
                placeholder="you@company.com"
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={onChange}
              data-testid="contact-input-subject"
              className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#E5FE40] focus:outline-none transition-colors"
              placeholder="What's this about?"
              disabled={loading}
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={6}
              data-testid="contact-input-message"
              className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#E5FE40] focus:outline-none transition-colors resize-none"
              placeholder="Tell me about the role, project, or idea…"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || sent}
            data-testid="contact-submit-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E5FE40] text-black font-semibold px-7 py-3.5 rounded-full hover:bg-[#d4f020] transition-colors disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending…
              </>
            ) : sent ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Sent!
              </>
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
