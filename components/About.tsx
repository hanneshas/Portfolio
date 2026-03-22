"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js / React development",
  "AI & LLM integration (Claude API)",
  "Supabase & database design",
  "Internal tool architecture",
];

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-[var(--color-bg-dark)] rounded-3xl p-8 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle circle pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, transparent 30px, var(--color-text-on-dark) 30px, var(--color-text-on-dark) 31px, transparent 31px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Pill label */}
          <span className="relative inline-flex items-center border border-[var(--color-text-on-dark-dim)]/40 rounded-full px-5 py-1.5 text-sm text-[var(--color-text-on-dark)] mb-12">
            About Me
          </span>

          <div className="relative grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
            {/* Photo + Contact */}
            <div className="flex flex-col gap-6">
              <div className="w-48 h-64 md:w-56 md:h-72 bg-[var(--color-accent-lime)] rounded-sm overflow-hidden">
                <img
                  src="/images/portrait.png"
                  alt="Hannes Hård af Segerstad"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-sm text-[var(--color-text-on-dark-dim)] space-y-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hannes.has@gmail.com"
                    className="text-[var(--color-accent-lime)] hover:underline"
                  >
                    hannes.has@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-[var(--color-text-on-dark)] mb-8">
                Who am I and
                <br />
                how can I be
                <br />
                of help?
              </h2>
              <p className="text-[var(--color-text-on-dark-dim)] leading-relaxed max-w-lg mb-10">
                I&apos;m Hannes Hård af Segerstad, a developer and product
                consultant based in Sweden. I build internal tools and
                AI-powered applications for founders and operations teams —
                replacing spreadsheets and generic SaaS with something that
                actually fits.
              </p>

              <h3 className="font-display text-lg uppercase tracking-wide text-[var(--color-text-on-dark)] mb-4">
                Key Skills
              </h3>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-on-dark-dim)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-lime)] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
