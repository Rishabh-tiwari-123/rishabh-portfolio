import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> 02 · Stack
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-medium text-white">
              The tools I use to build.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            A focused, modern toolkit — full-stack web, AI / ML, and product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              data-testid={`skill-group-${group.category.toLowerCase().replace(/\s|\//g, '-').replace('&', 'and')}`}
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg text-white">{group.category}</h3>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-600">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-zinc-300 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full hover:border-[#E5FE40]/40 hover:text-[#E5FE40] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
