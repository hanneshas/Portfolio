"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const heroNavLinks = [
  { label: "How I Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20">
      <motion.div style={{ opacity: heroOpacity, y: heroY }}>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-8 items-start">
          {/* Left — Headline */}
          <div>
            <motion.h1
              className="font-display text-[clamp(4.5rem,14vw,11rem)] leading-[0.88] tracking-tight uppercase"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Build tools.
              <br />
              Automate
              <br />
              work.
            </motion.h1>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-12 text-sm border-b border-[var(--color-border)] pb-1 hover:opacity-60 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Free Consultation →
            </motion.a>
          </div>

          {/* Right — Photo + Nav + Bio */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-6">
              {/* Photo */}
              <div className="w-44 h-56 md:w-48 md:h-60 bg-[var(--color-accent-purple)] rounded-sm overflow-hidden shrink-0">
                <img
                  src="/images/portrait.png"
                  alt="Hannes Hård af Segerstad"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-2.5 pt-2">
                {heroNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Handwritten accent */}
            <p className="font-hand text-xl text-[var(--color-accent-purple)] ml-auto -mt-2 -rotate-3">
              Your workflow&apos;s
              <br />
              new best friend
            </p>

            {/* Name + Bio */}
            <div className="mt-2">
              <h2 className="font-display text-lg uppercase tracking-wide">
                Hannes Hård af Segerstad
              </h2>
              <p className="text-sm text-[var(--color-text-dim)] mt-2 max-w-xs leading-relaxed">
                I help companies build internal tools, automate workflows with AI,
                and ship custom applications fast.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-24 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: "4+", label: "Projects\nShipped" },
            { value: "100%", label: "Custom\nBuilt" },
            { value: "AI", label: "Powered\nWorkflows" },
            {
              value: "500+",
              label: "Hours of Development\nand Strategy Work",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="border-l-2 border-[var(--color-border)] pl-6"
            >
              <p className="font-display text-5xl md:text-6xl">{stat.value}</p>
              <p className="text-sm text-[var(--color-text-dim)] mt-2 whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
