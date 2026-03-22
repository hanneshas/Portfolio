"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { projects, Project } from "@/lib/projects";

/* ─────────────────────────────────────────────
   Browser Window Mockup — with traffic lights
   ───────────────────────────────────────────── */

function BrowserWindow({
  project,
  scaleProgress,
}: {
  project: Project;
  scaleProgress: MotionValue<number>;
}) {
  // Scale up as user scrolls through each project
  const windowScale = useTransform(scaleProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.92]);
  const smoothScale = useSpring(windowScale, { stiffness: 80, damping: 28 });

  // Subtle shadow depth
  const shadowOpacity = useTransform(scaleProgress, [0, 0.3, 0.7, 1], [0.05, 0.15, 0.15, 0.05]);
  const smoothShadow = useSpring(shadowOpacity, { stiffness: 80, damping: 28 });

  return (
    <motion.div
      className="w-[680px] lg:w-[780px] xl:w-[860px]"
      style={{
        scale: smoothScale,
        filter: smoothShadow.get
          ? undefined
          : undefined,
      }}
    >
      <motion.div
        className="rounded-xl overflow-hidden"
        style={{
          boxShadow: "0 25px 80px -12px rgba(26, 15, 10, 0.15), 0 8px 30px -8px rgba(26, 15, 10, 0.1)",
        }}
      >
        {/* Title bar with traffic lights */}
        <div className="bg-[#2a2226] px-4 py-3 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-[7px]">
            <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          </div>

          {/* URL bar */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1a1317] rounded-md px-4 py-1.5 flex items-center gap-2 min-w-[260px] max-w-[360px] w-full">
              <svg
                className="w-3 h-3 text-[#6b5f64] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={project.url || project.name}
                  className="text-[11px] text-[#8a7e82] font-mono truncate"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {project.url || "localhost:3000"}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Right-side icons placeholder */}
          <div className="flex items-center gap-2 opacity-30">
            <svg className="w-3.5 h-3.5 text-[#6b5f64]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>

        {/* Browser content area */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.number}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectPlaceholder project={project} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Project Placeholder Screen
   ───────────────────────────────────────────── */

function ProjectPlaceholder({ project }: { project: Project }) {
  const isLight =
    project.color === "#C5E636" || project.color === "#B8A5D4";

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative"
      style={{ backgroundColor: project.color }}
    >
      {/* Big number background */}
      <span
        className={`font-display text-[8rem] md:text-[10rem] leading-none select-none absolute ${
          isLight ? "text-black/[0.07]" : "text-white/[0.07]"
        }`}
      >
        {project.number}
      </span>

      {/* Project name */}
      <span
        className={`font-display text-lg md:text-xl uppercase tracking-wider relative z-10 mt-24 ${
          isLight ? "text-black/30" : "text-white/30"
        }`}
      >
        {project.name}
      </span>

      {/* Fake UI elements for visual interest */}
      <div className="absolute top-6 left-6 right-6 flex gap-3">
        <div
          className={`h-2 w-16 rounded-full ${
            isLight ? "bg-black/[0.06]" : "bg-white/[0.06]"
          }`}
        />
        <div
          className={`h-2 w-24 rounded-full ${
            isLight ? "bg-black/[0.06]" : "bg-white/[0.06]"
          }`}
        />
        <div className="flex-1" />
        <div
          className={`h-2 w-12 rounded-full ${
            isLight ? "bg-black/[0.06]" : "bg-white/[0.06]"
          }`}
        />
      </div>

      {/* Fake sidebar hint */}
      <div
        className={`absolute top-16 left-6 bottom-6 w-[140px] rounded-lg ${
          isLight ? "bg-black/[0.04]" : "bg-white/[0.04]"
        }`}
      >
        <div className="p-4 space-y-3 mt-4">
          {[48, 64, 40, 56, 44].map((w, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${
                isLight ? "bg-black/[0.06]" : "bg-white/[0.06]"
              }`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>

      {/* Fake main content area hint */}
      <div
        className={`absolute top-16 left-[172px] right-6 bottom-6 rounded-lg ${
          isLight ? "bg-black/[0.03]" : "bg-white/[0.03]"
        }`}
      >
        <div className="p-6 space-y-4 mt-6">
          <div
            className={`h-3 w-2/5 rounded-full ${
              isLight ? "bg-black/[0.06]" : "bg-white/[0.06]"
            }`}
          />
          <div
            className={`h-2 w-3/4 rounded-full ${
              isLight ? "bg-black/[0.05]" : "bg-white/[0.05]"
            }`}
          />
          <div
            className={`h-2 w-1/2 rounded-full ${
              isLight ? "bg-black/[0.05]" : "bg-white/[0.05]"
            }`}
          />
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`aspect-[4/3] rounded-md ${
                  isLight ? "bg-black/[0.04]" : "bg-white/[0.04]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Dot Navigation (right side)
   ───────────────────────────────────────────── */

function DotNavigation({
  activeIndex,
  scrollYProgress,
}: {
  activeIndex: number;
  scrollYProgress: MotionValue<number>;
}) {
  const navOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.12, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30"
      style={{ opacity: navOpacity }}
    >
      {projects.map((project, i) => (
        <motion.div
          key={project.number}
          className="w-3 h-3 rounded-full border-2 transition-all duration-300"
          style={{
            backgroundColor:
              activeIndex === i ? project.color : "transparent",
            borderColor:
              activeIndex === i ? project.color : "var(--color-text-dim)",
            scale: activeIndex === i ? 1.4 : 1,
          }}
        />
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Desktop Projects — Fullscreen Browser Showcase
   ───────────────────────────────────────────── */

function DesktopProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projects.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Derive active project index from scroll progress
  const activeMotion = useTransform(scrollYProgress, (v) => {
    const idx = Math.floor(v * (totalProjects + 1) - 0.5);
    return Math.max(0, Math.min(totalProjects - 1, idx));
  });

  useMotionValueEvent(activeMotion, "change", (latest) => {
    setActiveIndex(latest);
  });

  // Per-project progress (0→1 within each project's scroll range)
  const projectProgress = useTransform(scrollYProgress, (v) => {
    const projectIndex = Math.floor(v * (totalProjects + 1) - 0.5);
    const clampedIndex = Math.max(0, Math.min(totalProjects - 1, projectIndex));
    const projectStart = (clampedIndex + 0.5) / (totalProjects + 1);
    const projectEnd = (clampedIndex + 1.5) / (totalProjects + 1);
    const progress = (v - projectStart) / (projectEnd - projectStart);
    return Math.max(0, Math.min(1, progress));
  });

  // Parallax layers
  const bgNumberY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const smoothBgY = useSpring(bgNumberY, { stiffness: 60, damping: 30 });

  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const smoothDeviceY = useSpring(deviceY, { stiffness: 60, damping: 30 });

  // Subtle 3D tilt on browser window
  const tiltX = useTransform(projectProgress, [0, 0.2, 0.5, 0.8, 1], [2, 0, 0, 0, -1]);
  const smoothTilt = useSpring(tiltX, { stiffness: 80, damping: 25 });

  // Header fade out
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.14], [0, -50]);

  // Progress bar
  const progressScale = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ height: `${(totalProjects + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center perspective-container">
        {/* Layer 1: Giant background number */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{ y: smoothBgY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeProject.number}
              className="font-display text-[20rem] md:text-[28rem] lg:text-[34rem] text-[var(--color-text)] opacity-[0.03] select-none leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {activeProject.number}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Section header — fades out on scroll */}
        <motion.div
          className="absolute top-12 left-12 z-20"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <span className="inline-flex items-center border border-[var(--color-border)] rounded-full px-5 py-1.5 text-sm">
            Case Studies
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.92] mt-4">
            Success
            <br />
            Stories
          </h2>
        </motion.div>

        {/* Layer 2: Browser Window */}
        <motion.div
          className="relative z-10"
          style={{
            y: smoothDeviceY,
            rotateX: smoothTilt,
          }}
        >
          <BrowserWindow
            project={activeProject}
            scaleProgress={projectProgress}
          />
        </motion.div>

        {/* Layer 3: Project text metadata */}
        <div className="absolute bottom-20 left-12 right-12 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.number}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>
                <h3 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.92]">
                  {activeProject.name}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)] mt-3 max-w-md leading-relaxed">
                  {activeProject.description}
                </p>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
                  {activeProject.tags.join(" / ")}
                </p>
                <p className="font-display text-3xl mt-1">
                  {activeProject.year}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <DotNavigation
          activeIndex={activeIndex}
          scrollYProgress={scrollYProgress}
        />

        {/* Progress bar */}
        <div className="absolute bottom-8 left-12 right-12 h-[2px] bg-[var(--color-border-light)] z-20">
          <motion.div
            className="h-full bg-[var(--color-text)] origin-left"
            style={{ scaleX: progressScale }}
          />
        </div>

        {/* Layer 4: Decorative accents */}
        <motion.div
          className="absolute top-1/4 right-24 w-20 h-20 rounded-full border border-[var(--color-border-light)] opacity-20 pointer-events-none z-0"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -180]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-[var(--color-text)] opacity-10 pointer-events-none z-0"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Mobile — Browser cards stacked vertically
   ───────────────────────────────────────────── */

function MobileProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const browserY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Mini browser window */}
      <motion.div className="mb-6" style={{ y: browserY }}>
        <div className="rounded-lg overflow-hidden shadow-lg">
          {/* Title bar */}
          <div className="bg-[#2a2226] px-3 py-2 flex items-center gap-2">
            <div className="flex items-center gap-[5px]">
              <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 h-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#1a1317] rounded px-3 py-1">
                <span className="text-[10px] text-[#8a7e82] font-mono">
                  {project.url || "localhost:3000"}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="aspect-[16/10]">
            <ProjectPlaceholder project={project} />
          </div>
        </div>
      </motion.div>

      {/* Metadata */}
      <h3 className="font-display text-3xl uppercase tracking-tight leading-[0.92]">
        {project.name}
      </h3>
      <p className="text-xs uppercase tracking-wider text-[var(--color-text-dim)] mt-2">
        {project.tags.join(" / ")} — {project.year}
      </p>
      <p className="text-sm text-[var(--color-text-dim)] mt-3 leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  );
}

function MobileProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="px-6">
        <span className="inline-flex items-center border border-[var(--color-border)] rounded-full px-5 py-1.5 text-sm mb-12">
          Case Studies
        </span>
        <h2 className="font-display text-5xl uppercase leading-[0.92] mb-16">
          Success
          <br />
          Stories
        </h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <MobileProjectCard
              key={project.number}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main Export — Desktop/Mobile Detection
   ───────────────────────────────────────────── */

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted) {
    return <section id="projects" className="h-screen" />;
  }

  return isMobile ? <MobileProjects /> : <DesktopProjects />;
}
