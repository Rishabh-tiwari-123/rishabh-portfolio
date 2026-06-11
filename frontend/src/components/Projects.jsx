import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, FolderKanban } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

function ProjectCard({ p, sizeClass }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      data-testid={`project-card-${p.id}`}
      className={`bento-card ${sizeClass} group relative bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden hover:border-white/25 transition-all duration-500 hover:-translate-y-1 flex flex-col min-h-[280px]`}
    >
      {p.image && (
        <>
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-45 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${p.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30" />
        </>
      )}

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
            {p.stack.slice(0, 3).join(" · ")}
          </span>
          {p.badge && (
            <span
              data-testid={`badge-${p.id}`}
              className="inline-flex items-center gap-1.5 bg-[#E5FE40] text-black font-mono text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full"
            >
              <Trophy className="w-3 h-3" /> {p.badge}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl tracking-tight font-medium text-white mt-6">
          {p.name}
        </h3>
        <p className="text-zinc-400 mt-2 leading-relaxed">{p.tagline}</p>
        {p.description && (
          <p className="text-zinc-500 text-sm mt-3 leading-relaxed line-clamp-3">
            {p.description}
          </p>
        )}

        <div className="mt-auto pt-6 flex items-center gap-3 flex-wrap">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-live-${p.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-white hover:text-[#E5FE40] transition-colors font-mono uppercase tracking-widest text-xs"
            >
              Live <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-github-${p.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#E5FE40] transition-colors font-mono uppercase tracking-widest text-xs"
            >
              Code <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {!p.live && !p.github && (
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-600">
              Case study coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const sizeMap = {
  large: "md:col-span-8 md:row-span-2",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8 md:row-span-2",
  square: "md:col-span-4 md:row-span-2",
};

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E5FE40] mb-3 flex items-center gap-2">
              <FolderKanban className="w-3.5 h-3.5" /> 03 · Selected work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-medium text-white">
              Apps I&rsquo;ve shipped.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            Hackathons, client builds, ML deployments — selected projects from the last 18 months.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[170px] gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} sizeClass={sizeMap[p.size] || sizeMap.square} />
          ))}
        </div>
      </div>
    </section>
  );
}
