"use client";

import { Reveal } from "./ui";

export default function CTA() {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 sm:px-8">
      {/* aurora silk mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[40%] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
      </div>
      <Reveal>
        <div
          onMouseMove={onMove}
          className="spot-card glass mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Got something you
            <br />
            <span className="gradient-text">want built?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/55">
            Tell me what it is. I'll reply with a plan, a timeline, and a real
            number, usually the same day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:kkshah2005@gmail.com?subject=Project%20inquiry%20for%20Kunj%20Shah%20Studio"
              className="moving-border inline-block transition-transform hover:scale-105"
            >
              <span className="block rounded-full px-7 py-3.5 text-sm font-medium text-white">
                Book a call
              </span>
            </a>
            <a
              href="mailto:kkshah2005@gmail.com"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40"
            >
              kkshah2005@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
