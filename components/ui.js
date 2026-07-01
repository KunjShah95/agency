"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="eyebrow inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-glow shadow-[0_0_10px_2px_rgba(124,92,255,0.7)]" />
      {children}
    </div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

// Centered section header used across the page.
export function SectionHeader({ eyebrow, children, sub }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
        {children}
      </h2>
      {sub && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
