"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Internal Tools",
    description:
      "Replace scattered spreadsheets and generic SaaS with purpose-built platforms tailored to your workflow.",
  },
  {
    title: "AI-Powered Workflows",
    description:
      "Integrate LLMs into your business logic: matching, categorization, automation — where it actually matters.",
  },
  {
    title: "Business Applications",
    description:
      "Customer portals, billing systems, CRMs — built exactly for your needs, not someone else's.",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-12">
            01 — What I build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group border border-transparent hover:border-[var(--color-border)] rounded-sm p-6 -m-6 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-mono text-[var(--color-accent)] text-sm">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl mt-3 mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--color-border)]" />
      </div>
    </section>
  );
}
