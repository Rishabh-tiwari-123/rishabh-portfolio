import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { PERSON } from "../data/portfolio";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2 font-display text-lg tracking-tight"
        >
          <span className="inline-block w-7 h-7 rounded-md bg-[#E5FE40] text-black grid place-items-center font-bold text-sm">
            R
          </span>
          <span className="hidden sm:inline">Rishabh Tiwari</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-mono uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </nav>
<a
  href={`${process.env.PUBLIC_URL}/myresume.pdf?v=${new Date().getTime()}`}
  download="Rishabh_Tiwari_Resume.pdf"
  type="application/pdf"
  data-testid="resume-download-nav"
  className="hidden md:inline-flex items-center gap-2 bg-[#E5FE40] text-black font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#d4f020] transition-colors"
>
  <Download className="w-4 h-4" /> Resume
</a>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  className="text-zinc-300 hover:text-[#E5FE40] font-mono uppercase text-sm tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={PERSON.resumeUrl}
                download
                data-testid="resume-download-mobile"
                className="inline-flex items-center gap-2 bg-[#E5FE40] text-black font-semibold px-5 py-3 rounded-full text-sm w-fit"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
