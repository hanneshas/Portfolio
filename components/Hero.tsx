"use client";

import { motion } from "framer-motion";

const line1Words = ["We", "build", "the", "tools"];
const line2Words = ["your", "business", "actually", "needs."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-dim) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Line 1 */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-2">
            {line1Words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Line 2 — offset */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] ml-4 md:ml-12">
            {line2Words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub-headline */}
          <motion.p
            className="font-mono text-sm md:text-base text-[var(--color-text-dim)] mt-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Custom internal tools & AI-powered applications for ambitious
            companies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 text-sm font-medium rounded-sm hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              See projects
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--color-text-dim)] text-[var(--color-text)] px-6 py-3 text-sm font-medium rounded-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
