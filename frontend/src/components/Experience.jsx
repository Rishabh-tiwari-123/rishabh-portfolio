import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award } from "lucide-react";
import { EDUCATION, LEADERSHIP, ACHIEVEMENTS, COURSEWORK } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="leadership"
      data-testid="experience-section"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" /> 04 · Education
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tighter font-medium text-white">
              From Varanasi&nbsp;to Gorakhpur.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`edu-item-${i}`}
                className="flex items-start gap-6 p-6 bg-[#0d0d0d] border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
              >
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 w-24 flex-shrink-0 pt-1">
                  {e.period}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-white">{e.institution}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{e.degree}</p>
                  <p className="font-mono text-xs text-[#E5FE40] mt-2">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3 flex items-center gap-2">
              <Users className="w-3.5 h-3.5" /> 05 · Leadership
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tighter font-medium text-white">
              Leading the&nbsp;CE Society.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            {LEADERSHIP.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`leadership-item-${i}`}
                className="p-6 bg-[#0d0d0d] border border-white/10 rounded-2xl"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="font-display text-xl text-white">{l.role}</h3>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
                    {l.period}
                  </span>
                </div>
                <p className="text-[#E5FE40] text-sm font-mono mb-3">{l.org}</p>
                <ul className="space-y-2">
                  {l.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements + Coursework */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 p-8 bg-[#0d0d0d] border border-white/10 rounded-3xl">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> 06 · Achievements
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-6 tracking-tight">
              Moments worth keeping.
            </h3>
            <ul className="space-y-3">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i} data-testid={`achievement-${i}`} className="flex items-start gap-3 text-zinc-300">
                  <span className="font-mono text-xs text-[#E5FE40] mt-1 w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 p-8 bg-[#0d0d0d] border border-white/10 rounded-3xl">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
              Relevant coursework
            </p>
            <h3 className="font-display text-2xl text-white mb-6 tracking-tight">
              What I&rsquo;m studying.
            </h3>
            <div className="flex flex-wrap gap-2">
              {COURSEWORK.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
