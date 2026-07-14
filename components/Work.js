"use client";

import { Reveal, Section, SectionHeader } from "./ui";

const projects = [
  {
    href: "https://jigisha-kiran-shah.vercel.app/",
    img: "/work/jigisha.jpeg",
    alt: "Jigisha Kiran Shah, LIC advisor website",
    category: "Web and SEO",
    title: "Jigisha Kiran Shah, LIC Advisor",
    body: "A fast, mobile first site for a local LIC insurance advisor in Ahmedabad. Built for search from the ground up, with clean structure, local keywords, and proper metadata.",
    metrics: [
      ["Page 1", "Google, local LIC searches"],
      ["Ahmedabad", "local SEO focus"],
    ],
  },
  {
    href: "https://aaravsen.vercel.app/",
    img: "https://picsum.photos/seed/aaravsen-shattered-skies-dusk/1400/1000",
    alt: "Aarav Sen, Shattered Skies book launch website",
    category: "Web Design",
    title: "Aarav Sen, Shattered Skies",
    body: "A launch site for a genre bending fiction novel. Typography led, atmospheric, and built around a strong author brand that turns readers into pre orders.",
    metrics: [
      ["Book launch", "author brand site"],
      ["Type led", "atmosphere over clutter"],
    ],
  },
];

function Case({ p, i }) {
  const flip = i % 2 === 1;
  return (
    <Reveal delay={0.05}>
      <div className="grid gap-8 border-t border-ink/14 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className={`group relative block overflow-hidden rounded-editorial border border-ink/12 bg-paper-200 ${
            flip ? "lg:order-2" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={p.alt}
            className="aspect-[7/5] h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
        </a>

        <div
          className={`flex flex-col items-center justify-center text-center ${
            flip ? "lg:order-1" : ""
          }`}
        >
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-vermillion">
            {p.category}
          </div>
          <h3 className="display mt-4 text-3xl font-semibold sm:text-4xl">
            {p.title}
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-600">
            {p.body}
          </p>

          <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-8">
            {p.metrics.map(([k, v]) => (
              <div key={k} className="border-t border-ink/14 pt-3 text-center">
                <div className="display text-lg font-semibold">{k}</div>
                <div className="mt-1 text-xs text-ink-500">{v}</div>
              </div>
            ))}
          </div>

          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-8 pb-0.5 text-sm font-medium text-ink"
          >
            Visit the live site
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        kicker="Selected work"
        sub="I would rather show real sites that work than a wall of mockups."
      >
        Live projects, built and shipped.
      </SectionHeader>

      <div className="mt-14">
        {projects.map((p, i) => (
          <Case key={p.title} p={p} i={i} />
        ))}
        <div className="border-t border-ink/14" />
      </div>
    </Section>
  );
}
