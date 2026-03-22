"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "Map out your current workflow, identify bottlenecks, and define exactly what needs to be built to move faster.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Design the technical architecture, data models, and user flows. Choose the right stack for your specific needs.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Rapid development cycles with continuous feedback. Ship working features early and iterate based on real usage.",
  },
  {
    number: "04",
    title: "Launch & Deploy",
    description:
      "Battle-tested deployment to production. Set up monitoring, backups, and everything needed for day-one reliability.",
  },
  {
    number: "05",
    title: "Support & Optimize",
    description:
      "Ongoing support, performance tracking, and continuous improvements to keep your tools sharp and effective.",
  },
];

export default function Services() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-20">
          <span className="inline-flex items-center border border-[var(--color-border)] rounded-full px-5 py-1.5 text-sm shrink-0">
            Strategy
          </span>
          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How I solve
            <br />
            your challenges
          </motion.h2>
        </div>

        <div className="border-t-2 border-[var(--color-border)]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.2fr] gap-4 md:gap-12 py-8 border-b border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="text-sm text-[var(--color-text-dim)]">
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-dim)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Handwritten quote */}
        <motion.div
          className="flex items-center gap-6 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-full bg-[var(--color-text)] shrink-0" />
          <p className="font-hand text-2xl md:text-3xl italic">
            Turning spreadsheet chaos into
            <br />
            streamlined apps — one build at a time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
