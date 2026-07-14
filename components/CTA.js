"use client";

import { Reveal, MagneticButton } from "./ui";

export default function CTA() {
  return (
    <section id="contact" className="px-6 pb-24 pt-8 sm:px-10">
      <Reveal className="mx-auto max-w-page">
        <div className="rounded-editorial border-2 border-ink p-10 text-center sm:p-16 lg:p-24">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-vermillion">
            Start here
          </div>
          <h2 className="display mx-auto mt-6 max-w-3xl text-[2.6rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            Got something you want built?
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-ink-600">
            Tell me what it is. I reply with a plan, a timeline, and a real
            number, usually the same day.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <MagneticButton href="mailto:kkshah2005@gmail.com?subject=Project%20inquiry%20for%20Srijan%20Studio">
              Book a call
            </MagneticButton>
            <a
              href="mailto:kkshah2005@gmail.com"
              className="link-underline pb-0.5 font-mono text-sm text-ink"
            >
              kkshah2005@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
