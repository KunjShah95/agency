"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Section, SectionHeader } from "./ui";

/* A typical Launch Build, laid out as the days it actually takes. */
const TOTAL = 30;
const steps = [
  {
    n: "01",
    t: "Talk it through",
    from: 1,
    to: 2,
    d: "We work out what you actually need and what it should cost. You get a written plan and a fixed price before anything starts.",
    out: ["Scope in plain words", "Fixed price", "Launch date"],
  },
  {
    n: "02",
    t: "Design it",
    from: 3,
    to: 10,
    d: "I design the real screens, not mood boards. You review, we adjust, you approve. Nothing gets built you have not seen.",
    out: ["Clickable design", "Copy and structure", "Your sign off"],
  },
  {
    n: "03",
    t: "Build it",
    from: 11,
    to: 24,
    d: "I build the site, app, agent or video on a live preview link you can open any time. Regular updates, never two weeks of silence.",
    out: ["Live preview link", "Regular updates", "SEO and speed built in"],
  },
  {
    n: "04",
    t: "Launch and fix",
    from: 25,
    to: 30,
    d: "We go live, then I watch how it does and fix what is worth fixing. You get the code, the files and a short handover.",
    out: ["Go live", "Post launch fixes", "Everything handed over"],
  },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const day = useTransform(scrollYProgress, (v) => String(Math.max(1, Math.round(v * TOTAL))).padStart(2, "0"));

  return (
    <Section id="process">
      <SectionHeader
        kicker="How it works"
        sub="A typical launch build, day by day. Smaller sprints run the same four steps, just faster."
      >
        Thirty days from a call
        <br className="hidden sm:block" /> to a live site.
      </SectionHeader>

      <div ref={ref} className="mt-16">
        {/* delivery board */}
        <Reveal>
          <div className="border border-ink/14 bg-paper-100">
            <div className="flex items-center justify-between border-b border-ink/12 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              <span>Delivery board</span>
              <span className="tabular-nums text-ink">
                Day <motion.span>{day}</motion.span> / {TOTAL}
              </span>
            </div>
            <div className="relative grid grid-cols-[2fr_8fr_14fr_6fr] text-[11px] sm:text-xs">
              {steps.map((s) => (
                <div key={s.n} className="border-r border-ink/10 px-3 py-4 last:border-r-0 sm:px-4">
                  <div className="truncate font-medium text-ink">{s.t}</div>
                  <div className="mt-1 font-mono text-ink-400">
                    {s.from === s.to ? `D${s.from}` : `D${s.from}–${s.to}`}
                  </div>
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/10">
                <motion.div style={{ width }} className="h-full bg-vermillion" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink/14 bg-ink/14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-paper">
              <div className="group flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="display text-4xl font-semibold text-ink/15 transition-colors duration-500 group-hover:text-vermillion">
                    {s.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    Day {s.from}–{s.to}
                  </span>
                </div>
                <h3 className="display mt-8 text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.d}</p>
                <ul className="mt-auto space-y-1.5 pt-6">
                  {s.out.map((o) => (
                    <li key={o} className="flex items-center gap-2 font-mono text-[11px] text-ink-500">
                      <span className="h-1 w-1 bg-vermillion" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
