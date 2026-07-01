"use client";

import { Reveal, Section, SectionHeader } from "./ui";

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Recent work"
        sub="I'd rather show you one real site that works than a wall of mockups."
      >
        One live example, more on the way.
      </SectionHeader>

      {/* featured real project */}
      <Reveal delay={0.05}>
        <div className="glass mt-12 grid overflow-hidden rounded-2xl lg:grid-cols-2">
          <a
            href="https://jigisha-kiran-shah.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group relative block h-64 overflow-hidden bg-ink-800 lg:h-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/jigisha.jpeg"
              alt="Jigisha Kiran Shah — LIC Advisor website"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Web and SEO
            </span>
          </a>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h3 className="text-xl font-semibold">
              Jigisha Kiran Shah, LIC Advisor in Ahmedabad
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              A fast, mobile first site for a local LIC insurance advisor. Built
              for search from the ground up, with clean structure, local
              keywords, and proper metadata.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-lg font-semibold text-emerald-400">
                  Page 1
                </div>
                <div className="text-xs text-white/45">
                  Google, local LIC searches
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-lg font-semibold text-white">Ahmedabad</div>
                <div className="text-xs text-white/45">local SEO focus</div>
              </div>
            </div>

            <a
              href="https://jigisha-kiran-shah.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-white"
            >
              Visit the live site
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
