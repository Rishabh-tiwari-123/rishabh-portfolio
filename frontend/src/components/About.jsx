import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const POINTS = [
  "CSE undergrad at MMMUT Gorakhpur (2024 — 2028).",
  "Built across MERN, Python ML and PHP — shipping live products since first year.",
  "Hackathon Runner-Up · Designing Head, Computer Engineering Society.",
  "Healthcare, Agriculture, Education, E-commerce — problems first, tech second.",
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> 01 · About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-medium text-white leading-tight">
            Engineer with a designer&rsquo;s eye, building things that ship.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6">
          <p className="text-lg text-zinc-300 leading-relaxed">
            I&rsquo;m a Computer Science undergraduate with a serious obsession for shipping
            real, user-facing products. I&rsquo;ve built across MERN, Python/ML, and PHP — from a
            hackathon-winning agricultural marketplace to a Streamlit ML diagnostic for heart
            disease.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            My favourite work sits at the intersection of <span className="text-white">clean
            engineering, smart AI, and design that respects the user</span>. I move fast,
            collaborate well, and treat every project — client or hackathon — like a product.
          </p>

          <ul className="space-y-3 pt-4">
            {POINTS.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-zinc-300"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E5FE40] flex-shrink-0" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
