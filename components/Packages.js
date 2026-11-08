"use client";

import Reveal from "./fx/Reveal";
import MovingBorder from "./fx/MovingBorder";
import { Section, Heading, Serif } from "./fx/Section";
import { track } from "@/lib/track";

const tiers = [
  {
    name: "Sprint",
    price: "₹15,000",
    pre: "from",
    time: "live in 7 days",
    desc: "One focused piece of work. A landing page, a design refresh, or a single AI agent.",
    features: ["One clear deliverable", "Design and development", "One revision round", "You own everything"],
    cta: "Start a sprint",
  },
  {
    name: "Launch Build",
    price: "₹60,000",
    pre: "from",
    time: "2 to 4 weeks",
    desc: "The full build. A multi page site or app, a design system, and an AI or video asset to launch with.",
    features: ["Multi page site or app", "Full design system", "AI agent or promo video", "SEO set up for launch", "Post launch fixes"],
    cta: "Build my launch",
    featured: true,
  },
  {
    name: "Studio Partner",
    price: "Monthly",
    time: "ongoing",
    desc: "I stay on as your design and tech partner, shipping and improving every month.",
    features: ["Priority build queue", "Ongoing web and AI work", "Monthly video assets", "Cancel any month"],
    cta: "Talk about a retainer",
  },
];

const promises = [
  ["Fixed price", "Agreed in writing first."],
  ["You own it", "Code, files, domain."],
  ["No lock in", "No page builder."],
  ["Live preview", "Watch it come together."],
];

function Check() {
  return (
    <svg viewBox="0 0 12 12" className="mt-1 h-3 w-3 shrink-0 text-ember" aria-hidden="true">
      <path d="M2 6.5 4.8 9 10 3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function Card({ t }) {
  return (
    <div className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${t.featured ? "bg-night-900" : "border border-white/10 bg-night-900/60"}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{t.name}</h3>
        {t.featured && <span className="rounded-full bg-ember px-2.5 py-1 text-[11px] font-medium text-night">Most picked</span>}
      </div>
      <p className="mt-1 font-mono text-xs text-neutral-500">{t.time}</p>
      <div className="mt-8 flex items-baseline gap-2">
        {t.pre && <span className="text-sm text-neutral-500">{t.pre}</span>}
        <span className="text-5xl font-semibold tracking-[-0.04em] text-white">{t.price}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{t.desc}</p>
      <ul className="mb-8 mt-7 space-y-3 border-t border-white/10 pt-7">
        {t.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-neutral-300"><Check />{f}</li>
        ))}
      </ul>
      <a
        href="#contact"
        onClick={() => track("cta_clicked", { source: `pricing_${t.name}` })}
        className={`mt-auto rounded-full py-3.5 text-center text-sm font-medium transition-all active:scale-[0.98] ${
          t.featured ? "bg-white text-night hover:bg-ember" : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5"
        }`}
      >
        {t.cta}
      </a>
    </div>
  );
}

export default function Packages() {
  return (
    <Section id="pricing">
      <Heading
        eyebrow="Pricing"
        title={<>Pick the level. <Serif>I build the rest.</Serif></>}
        sub="Starting prices, in rupees. You get a firm number in writing after a short call."
      />

      <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className={t.featured ? "lg:-my-4" : ""}>
            {t.featured ? (
              <MovingBorder as="div" radius="rounded-3xl" className="h-full w-full shadow-[0_0_80px_-20px_rgba(255,91,46,0.45)]" innerClassName="block h-full items-stretch bg-night-900 text-left font-normal">
                <Card t={t} />
              </MovingBorder>
            ) : (
              <Card t={t} />
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {promises.map(([k, v]) => (
            <li key={k} className="flex gap-3">
              <Check />
              <div>
                <div className="text-sm font-medium text-white">{k}</div>
                <div className="text-sm text-neutral-500">{v}</div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
