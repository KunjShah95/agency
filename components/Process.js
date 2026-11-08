"use client";

import TracingBeam from "./fx/TracingBeam";
import Reveal from "./fx/Reveal";
import { Section, Heading, Serif } from "./fx/Section";

const steps = [
  {
    n: "01",
    t: "Talk it through",
    days: "Day 1",
    d: "One call to work out what you need. Same day, you get a written plan and a fixed price before anything starts.",
    out: ["Scope in plain words", "Fixed price", "Launch date"],
  },
  {
    n: "02",
    t: "Design it",
    days: "Day 2–3",
    d: "Real screens, not mood boards, within 48 hours. You review, we adjust, you approve. Nothing gets built that you have not seen.",
    out: ["Clickable design", "Copy and structure", "Your sign off"],
  },
  {
    n: "03",
    t: "Build it",
    days: "Day 4–6",
    d: "Built on a live preview link you can open any time, with daily updates. You see it come together every evening.",
    out: ["Live preview link", "SEO and speed built in", "Daily updates"],
  },
  {
    n: "04",
    t: "Launch and look after it",
    days: "Day 7",
    d: "We go live on day seven. Then I watch how it does and fix what is worth fixing. You get the code, the files and a short handover.",
    out: ["Go live", "Post launch fixes", "Everything handed over"],
  },
];

export default function Process() {
  return (
    <Section id="process">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Heading
            align="left"
            eyebrow="How it works"
            title={<>Seven days from a call to a <Serif>live site.</Serif></>}
            sub="A typical website, day by day. Bigger builds with apps or AI agents run the same four steps over a few more weeks."
          />
        </div>

        <TracingBeam>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.n} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-night sm:left-1 sm:h-7 sm:w-7">
                  <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(255,91,46,0.6)]" />
                </span>
                <Reveal delay={i * 0.05}>
                  <div className="rounded-3xl border border-white/10 bg-night-900 p-6 transition-colors hover:border-white/20 sm:p-8">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
                      <span className="text-neutral-500">Step {s.n}</span>
                      <span className="rounded-full border border-ember/30 bg-ember/10 px-2.5 py-1 text-ember">{s.days}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{s.t}</h3>
                    <p className="mt-3 leading-relaxed text-neutral-400">{s.d}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.out.map((o) => (
                        <li key={o} className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
                          <svg viewBox="0 0 12 12" className="h-3 w-3 text-ember" aria-hidden="true"><path d="M2 6.5 4.8 9 10 3" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </TracingBeam>
      </div>
    </Section>
  );
}
