"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-12">
            02 — Selected work
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              className="group relative border-t border-[var(--color-border)] last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 px-4 md:px-6 rounded-sm transition-colors group-hover:bg-[rgba(232,160,40,0.04)] cursor-pointer">
                {/* Number */}
                <span className="font-mono text-xs text-[var(--color-text-dim)] w-8 shrink-0">
                  {project.number}
                </span>

                {/* Name */}
                <h3 className="font-display text-2xl md:text-3xl md:w-64 shrink-0">
                  {project.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:w-48 shrink-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider border border-[var(--color-border)] rounded-full px-3 py-1 text-[var(--color-text-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-dim)] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Year + arrow */}
                <div className="flex items-center gap-4 md:ml-auto shrink-0">
                  <span className="font-mono text-xs text-[var(--color-text-dim)]">
                    {project.year}
                  </span>
                  <span className="text-[var(--color-accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
