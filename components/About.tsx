"use client";

import { motion } from "framer-motion";

const stack = [
  "Next.js / React",
  "Supabase",
  "Tailwind CSS",
  "Claude API",
  "Lovable",
  "Framer Motion",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-12">
            03 — About
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text)] mb-6">
              I&apos;m Hannes, a developer and product consultant based in
              Sweden.
            </p>
            <p className="text-[var(--color-text-dim)] leading-relaxed mb-6">
              I specialize in building internal tools and AI-powered
              applications that replace generic SaaS with something that
              actually fits how your business works.
            </p>
            <p className="text-[var(--color-text-dim)] leading-relaxed">
              I work with founders and operations teams to ship fast and iterate
              faster.
            </p>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-[var(--color-border)] mb-8" />

            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-6">
              Stack
            </p>
            <ul className="space-y-3">
              {stack.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-[var(--color-text)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-[var(--color-border)]" />
      </div>
    </section>
  );
}
