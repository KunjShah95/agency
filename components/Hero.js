"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "./ui";
import { site, services, openBrief } from "@/lib/site";
import { track } from "@/lib/track";

function useLocalTime() {
  const [t, setT] = useState(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: site.timezone,
    });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function StatusCard({ enter }) {
  const time = useLocalTime();
  const rows = [
    ["Local time", time ? `${time} IST` : "—"],
    ["Status", site.availability],
    ["Replies", site.replyTime],
    ["Typical build", "2 to 6 weeks"],
  ];

  return (
    <motion.aside
      {...enter(0.25)}
      aria-label="Studio status"
      className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
    >
      <div className="relative border border-ink/15 bg-paper-100 shadow-[0_30px_80px_-30px_rgba(22,19,14,0.35)]">
        <div className="flex items-center justify-between border-b border-ink/12 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
          <span>Studio status</span>
          <span className="flex items-center gap-2 text-ink-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3a9d5d] opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3a9d5d]" />
            </span>
            Live
          </span>
        </div>

        <dl className="divide-y divide-ink/10 px-5">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
              <dt className="text-sm text-ink-500">{k}</dt>
              <dd className="text-right font-mono text-sm tabular-nums text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-ink/12 bg-paper-200/60 px-5 pb-5 pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            What do you need?
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  track("service_briefed", { service: s.id, source: "hero_status" });
                  openBrief(s.id, "hero_status");
                }}
                className="group flex items-center gap-1.5 border border-ink/20 bg-paper-100 px-3 py-2 text-sm text-ink-800 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {s.label}
                <span aria-hidden="true" className="text-vermillion transition-transform group-hover:translate-x-0.5 group-hover:text-paper">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-3 rotate-[-3deg] border border-ink/15 bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-600 shadow-sm sm:-left-8">
        Fixed price before any work starts
      </div>
    </motion.aside>
  );
}

/* Hand-drawn underline that draws itself in under the key phrase. */
function Scribble({ children, reduce }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 z-0 h-[0.32em] w-full text-vermillion sm:-bottom-2"
      >
        <motion.path
          d="M3 14 C 60 4, 120 4, 170 10 S 260 17, 297 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-36">
      {/* faint blueprint grid, fades out toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgba(22,19,14,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(22,19,14,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_30%_20%,#000_20%,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-page items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-w-0">
          <motion.p {...enter(0)} className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-vermillion" />
            Design & engineering studio · {site.city}
          </motion.p>

          <motion.h1
            {...enter(0.1)}
            className="display mt-8 max-w-4xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[5.6rem]"
          >
            Websites, products and AI, built by{" "}
            <Scribble reduce={reduce}>one person.</Scribble>
          </motion.h1>

          <motion.p {...enter(0.22)} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            For founders and small businesses who want it done properly and done
            fast. You talk to the person doing the work, get a real number up
            front, and launch in weeks, not quarters.
          </motion.p>

          <motion.div {...enter(0.34)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <MagneticButton
              href="#contact"
              onClick={() => track("cta_clicked", { source: "hero" })}
            >
              Start a project <span aria-hidden="true">↗</span>
            </MagneticButton>
            <a href="#work" className="link-underline py-2 text-sm font-medium">
              See live work first
            </a>
          </motion.div>

          <motion.ul {...enter(0.44)} className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-ink/14 pt-5 text-sm text-ink-600">
            {["You own all the code", "Page 1 on Google for a live client", `Reply ${site.replyTime}`].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 text-vermillion">
                  <path d="M1.5 6.5 4.5 9.5 10.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <StatusCard enter={enter} />
      </div>
    </section>
  );
}
