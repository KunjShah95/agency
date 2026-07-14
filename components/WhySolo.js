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

export default function WhySolo() {
  return (
    <Section id="why">
      <SectionHeader
        sub="Big studios are built for enterprise budgets and long timelines. If you have an idea and want it built fast, without the layers, that is the gap I fill."
      >
        Ahmedabad has plenty of 200 person agencies.{" "}
        <span className="text-ink-400">You do not need one.</span>
      </SectionHeader>

      <div className="mt-16 grid gap-px overflow-hidden rounded-editorial border border-ink/14 bg-ink/14 md:grid-cols-2">
        <Reveal className="bg-paper">
          <div className="h-full p-8 text-center sm:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
              The big agency
            </div>
            <ul className="mt-6">
              {them.map((t) => (
                <li
                  key={t}
                  className="border-t border-ink/12 py-4 text-[15px] leading-relaxed text-ink-500"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-paper">
          <div className="relative h-full p-8 text-center sm:p-10">
            <span className="absolute inset-x-0 top-0 h-1 bg-vermillion" />
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-vermillion">
              Srijan Studio
            </div>
            <ul className="mt-6">
              {me.map((t) => (
                <li
                  key={t}
                  className="border-t border-ink/12 py-4 text-[15px] font-medium leading-relaxed text-ink-800"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
