"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    number: "01",
    question: "How long is a typical project?",
    answer:
      "Most projects span 4–8 weeks, beginning with a discovery phase, followed by rapid build cycles with continuous feedback, and concluding with deployment and handover.",
  },
  {
    number: "02",
    question: "What information do you need to start?",
    answer:
      "A walkthrough of your current workflow, access to the tools you're using today, and a clear picture of what's slowing you down. From there, I scope the build and we get moving.",
  },
  {
    number: "03",
    question: "How do you handle data and security?",
    answer:
      "All projects use industry-standard security practices — encrypted databases, environment-separated credentials, and role-based access. Happy to sign NDAs before we begin.",
  },
  {
    number: "04",
    question: "What industries do you work with?",
    answer:
      "Primarily SaaS companies, startup incubators, and operations-heavy teams. If you run on spreadsheets and wish you didn't, we'll get along.",
  },
  {
    number: "05",
    question: "How are fees structured?",
    answer:
      "Project-based pricing with milestone payments. You'll get a fixed quote after the discovery phase — no hourly billing, no surprises.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | null>("01");

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="inline-flex items-center border border-[var(--color-border)] rounded-full px-5 py-1.5 text-sm mb-16">
          FAQ
        </span>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20">
          {/* Left — Heading */}
          <div>
            <motion.h2
              className="font-display text-5xl md:text-7xl uppercase leading-[0.92]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Everything
              <br />
              you need
              <br />
              to know
            </motion.h2>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-[var(--color-text-dim)]">
                Need personalized answers?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm border-b border-[var(--color-border)] pb-0.5 mt-1 hover:opacity-60 transition-opacity"
              >
                Let&apos;s talk →
              </a>
            </motion.div>
          </div>

          {/* Right — Accordion */}
          <div className="border-t-2 border-[var(--color-border)]">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.number}
                className="border-b border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center gap-4 py-6 text-left group"
                  onClick={() =>
                    setExpanded(
                      expanded === faq.number ? null : faq.number
                    )
                  }
                >
                  <span className="font-display text-sm text-[var(--color-text-dim)]">
                    {faq.number}.
                  </span>
                  <span className="font-display text-base md:text-lg uppercase tracking-wide flex-1 group-hover:opacity-60 transition-opacity">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      expanded === faq.number ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {expanded === faq.number && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-[var(--color-text-dim)] leading-relaxed pb-6 pl-10 max-w-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
