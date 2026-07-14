"use client";

import { motion } from "framer-motion";
import { Reveal, Section, SectionHeader } from "./ui";

const steps = [
  {
    n: "01",
    t: "Talk it through",
    d: "We figure out what you actually need and what it should cost. You get a plan before I write any code.",
  },
  {
    n: "02",
    t: "Design it",
    d: "I design the screens and the structure. You review, we adjust, you approve. Nothing gets built you have not seen.",
  },
  {
    n: "03",
    t: "Build it",
    d: "I build the site, app, agent, or video and send updates as it comes together. No going quiet for two weeks.",
  },
  {
    n: "04",
    t: "Launch and fix",
    d: "We put it live, then I watch how it does and fix what is worth fixing. You are not on your own after launch.",
  },
];

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader kicker="How it works">
        Four steps, and you always
        <br className="hidden sm:block" /> know where things stand.
      </SectionHeader>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="display grid h-16 w-16 place-items-center rounded-full border border-ink/20 text-xl font-semibold text-vermillion transition-colors group-hover:border-vermillion">
                {s.n}
              </div>
              <h3 className="display mt-6 text-xl font-semibold">{s.t}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
                {s.d}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
