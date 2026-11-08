"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Section, SectionHeader } from "./ui";
import { track } from "@/lib/track";

/*
 * Every case reads the same way: what was missing, what got built, what
 * changed. Only write results that are true and checkable.
 */
const projects = [
  {
    id: "jigisha",
    href: "https://jigisha-kiran-shah.vercel.app/",
    img: "/work/jigisha.jpeg",
    alt: "Jigisha Kiran Shah, LIC advisor website",
    category: "Web · Local SEO",
    year: "2025",
    title: "Jigisha Kiran Shah, LIC Advisor",
    before:
      "A trusted local advisor with years of clients, and no way to be found by people searching on Google.",
    built:
      "A fast, mobile first site built for search from the ground up: clean structure, local keywords, proper metadata.",
    result: ["Page 1", "on Google for local LIC searches in Ahmedabad"],
  },
  {
    id: "aaravsen",
    href: "https://aaravsen.vercel.app/",
    img: "https://picsum.photos/seed/aaravsen-shattered-skies-dusk/1400/1000",
    alt: "Aarav Sen, Shattered Skies book launch website",
    category: "Web design · Launch",
    year: "2025",
    title: "Aarav Sen, Shattered Skies",
    before:
      "A debut genre bending novel that needed to feel like a real release, not a link in a bio.",
    built:
      "A typography led, atmospheric launch site around a strong author brand, with one clear path to pre order.",
    result: ["Live", "author brand and launch site"],
  },
];

function Case({ p, i }) {
  const reduce = useReducedMotion();
  const flip = i % 2 === 1;
  return (
    <Reveal delay={0.05}>
      <article className="grid gap-8 border-t border-ink/14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("work_opened", { project: p.id, source: "image" })}
          className={`group relative block overflow-hidden rounded-editorial border border-ink/12 bg-paper-200 ${
            flip ? "lg:order-2" : ""
          }`}
        >
          {/* browser chrome so a screenshot reads as a real, live site */}
          <div className="flex items-center gap-2 border-b border-ink/10 bg-paper-100 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="ml-3 truncate font-mono text-[11px] text-ink-500">
              {p.href.replace("https://", "").replace(/\/$/, "")}
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={p.alt}
            loading="lazy"
            className="aspect-[7/5] w-full object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
          />
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-paper transition-colors group-hover:bg-vermillion"
          >
            Open live site <span aria-hidden="true">↗</span>
          </motion.span>
        </a>

        <div className={`flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
            <span className="text-vermillion">{p.category}</span>
            <span className="text-ink-400">{p.year}</span>
          </div>
          <h3 className="display mt-4 text-3xl font-semibold sm:text-4xl">{p.title}</h3>

          <dl className="mt-8 space-y-5">
            {[
              ["What was missing", p.before],
              ["What I built", p.built],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 sm:pt-1">{k}</dt>
                <dd className="text-[15px] leading-relaxed text-ink-600">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex items-baseline gap-4 border-t border-ink/14 pt-5">
            <span className="display text-4xl font-semibold text-ink">{p.result[0]}</span>
            <span className="text-sm text-ink-500">{p.result[1]}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        kicker="Selected work"
        sub="Real sites you can open right now. Each one starts with what was missing and ends with what changed."
      >
        Less pitch. More proof.
      </SectionHeader>

      <div className="mt-14">
        {projects.map((p, i) => (
          <Case key={p.id} p={p} i={i} />
        ))}
        <div className="border-t border-ink/14" />
      </div>
    </Section>
  );
}
