"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row — Name, bio, photo, socials */}
        <motion.div
          className="grid md:grid-cols-[1fr_1fr_auto_auto] gap-8 md:gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <h3 className="font-display text-2xl uppercase tracking-wide">
            Hannes Hård
            <br />
            af Segerstad
          </h3>

          {/* Bio */}
          <p className="text-sm text-[var(--color-text-dim)] leading-relaxed max-w-xs">
            I&apos;m Hannes, your partner in building internal tools and
            AI-powered applications. Let&apos;s turn your workflow chaos into
            streamlined software.
          </p>

          {/* Photo */}
          <div className="w-32 h-40 md:w-36 md:h-44 bg-[var(--color-accent-purple)] rounded-sm overflow-hidden shrink-0">
            <img
              src="/images/portrait.png"
              alt="Hannes Hård af Segerstad"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Socials + handwritten */}
          <div className="flex flex-col gap-4">
            <p className="font-hand text-lg text-[var(--color-accent-purple)] -rotate-3 mb-2">
              Coffee&apos;s on me,
              <br />
              let&apos;s chat.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/hanneshas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hanneshas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Giant email */}
        <motion.div
          className="border-t-2 border-[var(--color-border)] pt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="mailto:hannes.has@gmail.com"
            className="block font-display text-[clamp(2.5rem,10vw,8rem)] uppercase leading-[0.92] tracking-tight hover:opacity-60 transition-opacity"
          >
            hannes.has
            <br />
            @gmail.com
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="text-xs text-[var(--color-text-dim)] mt-12">
          © 2025 Hannes Hård af Segerstad
        </p>
      </div>
    </footer>
  );
}
