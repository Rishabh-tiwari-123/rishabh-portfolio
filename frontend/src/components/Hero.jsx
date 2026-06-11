import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PERSON, STATS } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-[#E5FE40]" />
          Portfolio · v2026
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          data-testid="hero-name"
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[8rem] leading-[0.95] tracking-tighter font-medium text-white"
        >
          Rishabh
          <br />
          <span className="text-zinc-500">Tiwari</span>
          <span className="text-[#E5FE40]">.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-300 max-w-xl leading-relaxed">
              {PERSON.tagline}
            </p>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-[0.25em] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> {PERSON.location} ·{" "}
              <span className="text-[#E5FE40]">Available for opportunities</span>
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 bg-[#E5FE40] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#d4f020] transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PERSON.resumeUrl}
                download
                data-testid="hero-cta-resume"
                className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-testid="hero-social-github"
                className="inline-grid place-items-center w-12 h-12 rounded-full border border-white/20 text-zinc-300 hover:text-[#E5FE40] hover:border-[#E5FE40] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-testid="hero-social-linkedin"
                className="inline-grid place-items-center w-12 h-12 rounded-full border border-white/20 text-zinc-300 hover:text-[#E5FE40] hover:border-[#E5FE40] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSON.email}`}
                aria-label="Email"
                data-testid="hero-social-email"
                className="inline-grid place-items-center w-12 h-12 rounded-full border border-white/20 text-zinc-300 hover:text-[#E5FE40] hover:border-[#E5FE40] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3 + idx}
                data-testid={`stat-${s.label.toLowerCase().replace(/\s/g, '-')}`}
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5"
              >
                <div className="font-display text-3xl sm:text-4xl text-white">
                  {s.value}
                  <span className="text-[#E5FE40]">{s.suffix}</span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={8}
          className="absolute bottom-8 right-6 md:right-12 hidden md:flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase rotate-90 origin-center">
            Scroll
          </span>
          <span className="block w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
