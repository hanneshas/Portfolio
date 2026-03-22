"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-[var(--color-bg-dark)] rounded-3xl p-8 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, transparent 30px, var(--color-text-on-dark) 30px, var(--color-text-on-dark) 31px, transparent 31px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="relative">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-12">
              <span className="inline-flex items-center border border-[var(--color-text-on-dark-dim)]/40 rounded-full px-5 py-1.5 text-sm text-[var(--color-text-on-dark)] shrink-0">
                Contact me
              </span>
              <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.92] text-[var(--color-text-on-dark)]">
                Schedule
                <br />a consultation
              </h2>
              <p className="text-sm text-[var(--color-text-on-dark-dim)] leading-relaxed max-w-xs md:ml-auto">
                I&apos;m here to help you build the right tools and streamline
                your operations. Reach out to discuss your challenges.
              </p>
            </div>

            {/* Form */}
            <form
              action="https://formsubmit.co/hannes.has@gmail.com"
              method="POST"
              className="space-y-8"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-text-on-dark-dim)]/30 pb-3 text-sm text-[var(--color-text-on-dark)] placeholder:text-[var(--color-text-on-dark-dim)]/60 focus:outline-none focus:border-[var(--color-text-on-dark)]  transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="w-full bg-transparent border-b border-[var(--color-text-on-dark-dim)]/30 pb-3 text-sm text-[var(--color-text-on-dark)] placeholder:text-[var(--color-text-on-dark-dim)]/60 focus:outline-none focus:border-[var(--color-text-on-dark)] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-text-on-dark-dim)]/30 pb-3 text-sm text-[var(--color-text-on-dark)] placeholder:text-[var(--color-text-on-dark-dim)]/60 focus:outline-none focus:border-[var(--color-text-on-dark)] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex-1">
                  <textarea
                    name="message"
                    placeholder="Type message"
                    rows={1}
                    className="w-full bg-transparent border-b border-[var(--color-text-on-dark-dim)]/30 pb-3 text-sm text-[var(--color-text-on-dark)] placeholder:text-[var(--color-text-on-dark-dim)]/60 focus:outline-none focus:border-[var(--color-text-on-dark)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-on-dark)] border-b border-[var(--color-text-on-dark)] pb-0.5 hover:opacity-60 transition-opacity shrink-0 cursor-pointer"
                >
                  Schedule a Free Consultation →
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
