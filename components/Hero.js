"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "./ui";

const disciplines = ["Web Development", "Interface Design", "AI Agents", "AI Video"];

const facts = [
  ["One person", "designs and builds the whole thing"],
  ["2 to 6 weeks", "for a typical build"],
  ["Ahmedabad", "working with founders anywhere"],
];

const line1 = ["You", "explain", "the", "idea."];
const line2 = ["I", "build", "the", "whole", "thing."];

export default function Hero() {
  const reduce = useReducedMotion();

  const word = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
  });
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:px-10"
    >
      <motion.p
        {...rise(0)}
        className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-ink-500"
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-vermillion"
          animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        Solo design and tech studio
      </motion.p>

      <h1 className="display mt-8 text-[3.2rem] font-semibold leading-[0.95] sm:text-[5.5rem] lg:text-[6.6rem]">
        <span className="block">
          {line1.map((w, i) => (
            <motion.span key={w + i} {...word(i)} className="mr-[0.22em] inline-block">
              {w}
            </motion.span>
          ))}
        </span>
        <span className="block">
          {line2.map((w, i) => (
            <motion.span
              key={w + i}
              {...word(line1.length + i)}
              className={`mr-[0.22em] inline-block ${
                w === "whole" || w === "thing." ? "text-vermillion" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </span>
      </h1>

      <motion.p
        {...rise(0.7)}
        className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-600"
      >
        Websites, interfaces, AI agents, and AI video. One person builds all of
        it and ships it.
      </motion.p>

      <motion.div
        {...rise(0.8)}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton href="#contact">Book a call</MagneticButton>
        <MagneticButton href="#work" variant="ghost">
          See the work
        </MagneticButton>
      </motion.div>

      {/* Centered discipline row */}
      <motion.div
        {...rise(0.9)}
        className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
      >
        {disciplines.map((d) => (
          <a
            key={d}
            href="#services"
            className="link-underline pb-1 font-mono text-xs uppercase tracking-wide text-ink-500 transition-colors hover:text-ink"
          >
            {d}
          </a>
        ))}
      </motion.div>

      {/* Facts, centered, hairline framed */}
      <motion.div
        {...rise(1)}
        className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-ink/14 pt-10 sm:grid-cols-3"
      >
        {facts.map(([k, v]) => (
          <div key={k} className="text-center">
            <div className="display text-xl font-semibold">{k}</div>
            <div className="mt-1 text-sm text-ink-500">{v}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
