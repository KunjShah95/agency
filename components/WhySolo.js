"use client";

import { Reveal, Section, SectionHeader } from "./ui";

const them = [
  "Projects start around 4,00,000 rupees and climb from there",
  "Your work passes through a sales rep, a PM, and a team",
  "Web, AI, and video sit in different departments",
  "Small and local clients wait behind enterprise accounts",
];

const me = [
  "Small jobs start at 15,000 rupees, full builds around 60,000",
  "You talk to the person actually building it, every time",
  "Web, design, AI, and video come from the same hands",
  "Built for founders, small business, and local shops",
];

function Row({ text, good }) {
  return (
    <li className="flex items-start gap-3 py-3">
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs ${
          good ? "bg-emerald-400/15 text-emerald-400" : "bg-white/5 text-white/40"
        }`}
      >
        {good ? "✓" : "✕"}
      </span>
      <span className={good ? "text-sm text-white/80" : "text-sm text-white/45"}>
        {text}
      </span>
    </li>
  );
}

export default function WhySolo() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why me, not a big shop"
        sub="Big studios are built for enterprise budgets and long timelines. If you have an idea and want it built fast, without the layers, that is the gap I fill."
      >
        Ahmedabad has plenty of 200 person agencies.{" "}
        <span className="text-white/50">You do not need one.</span>
      </SectionHeader>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-7">
            <div className="text-sm font-medium text-white/50">
              The big agency
            </div>
            <ul className="mt-4 divide-y divide-white/5">
              {them.map((t) => (
                <Row key={t} text={t} good={false} />
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-violet-glow/40 bg-gradient-to-b from-violet-glow/12 to-transparent p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-glow/20 blur-3xl" />
            <div className="text-sm font-medium text-violet-200">
              Srijan Studio
            </div>
            <ul className="mt-4 divide-y divide-white/5">
              {me.map((t) => (
                <Row key={t} text={t} good />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
