"use client";

import { Reveal, Section, SectionHeader } from "./ui";
import DotGrid from "./DotGrid";

const steps = [
  {
    n: "01",
    t: "Talk it through",
    d: "We figure out what you actually need and what it should cost. You get a plan before I write any code.",
  },
  {
    n: "02",
    t: "Design it",
    d: "I design the screens and the structure. You review, we adjust, you approve. Nothing gets built you haven't seen.",
  },
  {
    n: "03",
    t: "Build it",
    d: "I build the site, app, agent, or video and send updates as it comes together. No going quiet for two weeks.",
  },
  {
    n: "04",
    t: "Launch & fix",
    d: "We put it live, then I watch how it does and fix what's worth fixing. You're not on your own after launch.",
  },
];

export default function Process() {
  return (
    <Section id="process">
      <DotGrid />
      <SectionHeader eyebrow="How it works">
        Four steps, and you know where things stand at each one.
      </SectionHeader>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <div className="text-3xl font-semibold text-violet-300/70">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
