"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "./ui";

const offerings = ["Websites", "Product design", "AI systems", "Video"];

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36">
      <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p {...enter(0)} className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            <span className="h-2 w-2 rounded-full bg-vermillion" />
            Independent design & technology studio · Ahmedabad
          </motion.p>
          <motion.h1 {...enter(0.1)} className="display mt-8 max-w-4xl text-[3.5rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]">
            Good ideas deserve <span className="text-vermillion">great</span> digital experiences.
          </motion.h1>
          <motion.p {...enter(0.22)} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            I design and build the websites, products and AI tools that help ambitious teams move forward. One thoughtful partner, from first sketch to launch.
          </motion.p>
          <motion.div {...enter(0.34)} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact">Tell me what you’re building <span aria-hidden="true">↗</span></MagneticButton>
            <a href="#work" className="link-underline py-2 text-sm font-medium">Explore selected work</a>
          </motion.div>
          <motion.div {...enter(0.44)} className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/14 pt-5">
            {offerings.map((item) => <span key={item} className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">{item}</span>)}
          </motion.div>
        </div>

        <motion.div {...enter(0.2)} className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -right-7 -top-8 h-36 w-36 rounded-full bg-vermillion/10 blur-2xl" />
          <div className="relative overflow-hidden border border-ink/12 bg-[#e7e4da] p-3 shadow-[0_24px_80px_rgba(22,19,14,0.10)] sm:p-5">
            <div className="flex items-center justify-between border-b border-ink/10 px-2 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
              <span>From idea to shipped</span><span>01 — 04</span>
            </div>
            <div className="grid grid-cols-[1fr_48px] gap-3 p-2 sm:gap-5 sm:p-4">
              <div className="space-y-3">
                <div className="flex h-28 items-end bg-[#253b32] p-4 sm:h-36 sm:p-5">
                  <span className="display max-w-[210px] text-2xl font-semibold leading-none text-[#f4eee2] sm:text-3xl">Make the next thing matter.</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex h-24 flex-col justify-between bg-[#e9ad85] p-3 sm:h-28 sm:p-4"><span className="font-mono text-[9px] uppercase tracking-widest">01 / Understand</span><span className="display text-lg font-semibold">Find the signal.</span></div>
                  <div className="flex h-24 flex-col justify-between bg-[#d1d9ca] p-3 sm:h-28 sm:p-4"><span className="font-mono text-[9px] uppercase tracking-widest">02 / Shape</span><span className="display text-lg font-semibold">Make it clear.</span></div>
                </div>
                <div className="flex items-center justify-between border-t border-ink/15 pt-3 text-xs text-ink-600"><span>Design, technology, all connected.</span><span aria-hidden="true">↗</span></div>
              </div>
              <div className="flex flex-col items-center justify-between rounded-full border border-ink/15 py-4 font-mono text-[9px] uppercase tracking-widest text-ink-500 [writing-mode:vertical-rl]">Strategy · Design · Build</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rotate-[-4deg] bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] shadow-md sm:-left-8">Small studio. Big-picture thinking.</div>
        </motion.div>
      </div>
      <div className="mx-auto mt-20 grid max-w-page grid-cols-1 border-t border-ink/14 pt-6 sm:grid-cols-3 sm:gap-8">
        {[["01", "Direct collaboration", "Work with the person doing the work."], ["02", "Thoughtful by design", "Clear, useful, built around your people."], ["03", "Ahmedabad to anywhere", "Local perspective, open reach."]].map(([n, title, body]) => <div key={n} className="flex gap-4 border-b border-ink/10 py-4 sm:border-0 sm:py-0"><span className="font-mono text-xs text-vermillion">{n}</span><div><div className="text-sm font-semibold">{title}</div><p className="mt-1 text-sm text-ink-500">{body}</p></div></div>)}
      </div>
    </section>
  );
}
