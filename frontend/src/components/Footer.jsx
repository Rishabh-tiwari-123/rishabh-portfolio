import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PERSON } from "../data/portfolio";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-2xl tracking-tight text-white">
            {PERSON.name}<span className="text-[#E5FE40]">.</span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-2">
            © {new Date().getFullYear()} · Designed & built from Gorakhpur, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${PERSON.email}`}
            data-testid="footer-email"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#E5FE40] transition-colors text-sm"
          >
            <Mail className="w-4 h-4" /> {PERSON.email}
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-github"
            className="inline-grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-linkedin"
            className="inline-grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#top"
            data-testid="footer-back-to-top"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#E5FE40] font-mono text-xs uppercase tracking-[0.25em]"
          >
            Back to top <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
