"use client";

import { Reveal, Section, SectionHeader } from "./ui";

const tiers = [
  {
    name: "Sprint",
    price: "from ₹15,000",
    time: "1 to 2 weeks",
    desc: "One focused piece of work. A landing site, a design refresh, or a single AI agent.",
    features: ["One clear build", "Design and development", "One revision round"],
    cta: "Start a sprint",
    featured: false,
  },
  {
    name: "Launch Build",
    price: "from ₹60,000",
    time: "3 to 6 weeks",
    desc: "The full build. A product site, a design system, and an AI or video asset to launch with.",
    features: [
      "Multi page site or app",
      "Full design system",
      "AI agent or promo video",
      "Launch support",
    ],
    cta: "Build my launch",
    featured: true,
  },
  {
    name: "Studio Partner",
    price: "monthly",
    time: "ongoing",
    desc: "I stay on as your ongoing design and tech partner, shipping and improving over time.",
    features: ["Priority build queue", "Ongoing web and AI work", "Monthly video assets"],
    cta: "Explore partnership",
    featured: false,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-violet-300">
      <path
        d="M5 13l4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Packages() {
  return (
    <Section id="packages">
      <SectionHeader
        eyebrow="Packages"
        sub="Rough pricing. You get a firm number after a quick call."
      >
        Pick the level. I build the rest.
      </SectionHeader>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col rounded-2xl p-7 ${
                t.featured
                  ? "border border-violet-glow/50 bg-gradient-to-b from-violet-glow/15 to-transparent"
                  : "glass glass-hover"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-violet-glow to-indigo-500 px-3 py-1 text-xs font-medium">
                  Most popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className="text-xs text-white/40">{t.time}</span>
              </div>
              <div className="mt-3 text-2xl font-semibold">{t.price}</div>
              <p className="mt-3 text-sm text-white/55">{t.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-medium transition-transform hover:scale-[1.03] ${
                  t.featured
                    ? "bg-white text-ink-950"
                    : "border border-white/15 text-white/85 hover:border-white/40"
                }`}
              >
                {t.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
