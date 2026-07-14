"use client";

import { motion } from "framer-motion";
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

export default function Packages() {
  return (
    <Section id="packages">
      <SectionHeader
        kicker="Packages"
        sub="Rough pricing. You get a firm number after a quick call."
      >
        Pick the level. I build the rest.
      </SectionHeader>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => {
          const dark = t.featured;
          return (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className={`relative flex h-full flex-col rounded-editorial border p-8 text-center ${
                  dark
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/14 bg-paper-100 hover:border-vermillion"
                }`}
              >
                {t.featured && (
                  <span className="mx-auto mb-4 w-fit font-mono text-[11px] uppercase tracking-[0.18em] text-vermillion">
                    Most picked
                  </span>
                )}
                <div className="display text-xl font-semibold">{t.name}</div>
                <div
                  className={`mt-1 font-mono text-xs uppercase tracking-wide ${
                    dark ? "text-paper/50" : "text-ink-400"
                  }`}
                >
                  {t.time}
                </div>

                <div className="display mt-6 text-3xl font-semibold">
                  {t.price}
                </div>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    dark ? "text-paper/70" : "text-ink-600"
                  }`}
                >
                  {t.desc}
                </p>

                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center justify-center gap-3 text-sm ${
                        dark ? "text-paper/85" : "text-ink-800"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-vermillion" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-editorial px-5 py-3 text-center text-sm font-medium transition-colors active:scale-[0.97] ${
                    dark
                      ? "bg-vermillion text-paper hover:bg-paper hover:text-ink"
                      : "border border-ink text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {t.cta}
                </a>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
