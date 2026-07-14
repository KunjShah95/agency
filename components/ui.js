"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/*
 * Magnetic button: pulls gently toward the cursor and presses on tap.
 * Uses motion values (never state) so it stays smooth on mobile.
 */
export function MagneticButton({ href, children, variant = "solid", className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-vermillion"
      : "border border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block rounded-editorial px-7 py-4 text-sm font-medium transition-colors ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-page px-6 py-24 sm:px-10 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/*
 * Centered section header. The optional `kicker` renders as a small centered
 * label with an animated vermillion tick above the headline.
 */
export function SectionHeader({ kicker, children, sub }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-500"
        >
          <motion.span
            className="inline-block h-1.5 w-1.5 rounded-full bg-vermillion"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {kicker}
        </motion.div>
      )}
      <h2 className="display text-[2.4rem] font-semibold sm:text-5xl lg:text-6xl">
        {children}
      </h2>
      {sub && (
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-600">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
