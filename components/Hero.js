"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spotlight from "./fx/Spotlight";
import TextGenerate from "./fx/TextGenerate";
import ContainerScroll from "./fx/ContainerScroll";
import { site, services, openBrief } from "@/lib/site";
import { track } from "@/lib/track";

function useLocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: site.timezone });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* What the hero "screen" shows: real, shipped work in a browser frame. */
function Screen() {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 border-b border-white/10 bg-night-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mx-auto flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-neutral-400">
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true"><path d="M3.5 5V3.8a2.5 2.5 0 0 1 5 0V5M2.5 5h7v5h-7z" fill="none" stroke="currentColor" /></svg>
          jigishakiranshah.in
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/jigisha.jpeg" alt="Live website built for Jigisha Kiran Shah, an LIC advisor in Ahmedabad" className="aspect-[16/9] w-full object-cover object-top" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night via-night/40 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
        {["Page 1 on Google", "Mobile first", "Live client site"].map((c) => (
          <span key={c} className="rounded-full border border-white/15 bg-night/80 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-10 pt-36 sm:px-8 sm:pt-44">
      <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" fill="#ff8a63" />
      <div aria-hidden="true" className="dots fade-edges pointer-events-none absolute inset-0 -z-0 h-[900px]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[520px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-ember/10 blur-[120px]" />

      <div className="relative mx-auto max-w-page text-center">
        <motion.a
          {...fade(0)}
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-xs text-neutral-300 backdrop-blur transition-colors hover:border-white/20"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-[#1f3d2a] px-2 py-0.5 font-medium text-[#7ee2a0]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ee2a0] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7ee2a0]" />
            </span>
            Open
          </span>
          {site.availability} · {site.city}
          <span suppressHydrationWarning className="hidden font-mono text-neutral-500 sm:inline">{time && `${time} IST`}</span>
          <span aria-hidden="true" className="text-neutral-500 transition-transform group-hover:translate-x-0.5">→</span>
        </motion.a>

        <TextGenerate
          text="Websites, products and AI, built by one person."
          accent={["one", "person"]}
          delay={0.15}
          className="text-silver mx-auto mt-8 max-w-5xl text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-[5.75rem]"
        />

        <motion.p {...fade(0.7)} className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          A design and engineering studio of one, in {site.city}. You talk to the
          person doing the work, get a fixed price before anything starts, and
          go live in 7 days, not 7 months.
        </motion.p>

        <motion.div {...fade(0.85)} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            onClick={() => track("cta_clicked", { source: "hero" })}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white pl-6 pr-2 text-sm font-medium text-night shadow-[0_0_40px_-8px_rgba(255,255,255,0.5)] transition-transform active:scale-[0.98]"
          >
            Start a project
            <span className="grid h-8 w-8 place-items-center rounded-full bg-night text-white transition-transform group-hover:-rotate-45">→</span>
          </a>
          <a href="#work" className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 text-sm text-neutral-300 transition-colors hover:border-white/25 hover:text-white">
            See live work
          </a>
        </motion.div>

        <motion.div {...fade(1)} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs text-neutral-500">I need</span>
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                track("service_briefed", { service: s.id, source: "hero" });
                openBrief(s.id, "hero");
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-ember/60 hover:text-white"
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div {...fade(1.1)} className="relative mx-auto mt-20 max-w-5xl">
        <ContainerScroll>
          <Screen />
        </ContainerScroll>
      </motion.div>
    </section>
  );
}
