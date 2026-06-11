import React from "react";

const ITEMS = [
  "React", "Node.js", "Python", "MongoDB", "FastAPI", "Streamlit",
  "PHP", "Firebase", "Tailwind", "Git", "Machine Learning", "AI",
];

export default function Marquee() {
  return (
    <div data-testid="marquee" className="relative overflow-hidden border-y border-white/5 py-8 bg-[#080808]">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-tight text-zinc-700 hover:text-[#E5FE40] transition-colors duration-300"
          >
            {item}<span className="text-[#E5FE40] mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
