"use client";

import { useState } from "react";
import { Section } from "./ui";

const faqs = [
  {
    q: "I am not technical. Can you still help?",
    a: "That is most of who I work with. I handle the design, the code, the AI, and the video, and I explain what I am doing in normal words. You bring the idea, I handle the rest.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Four things: websites, UI and UX design, AI agents, and AI video. Plenty of projects use two or three of those together, which is easier when it is one person doing them.",
  },
  {
    q: "What does a project cost?",
    a: "A small one off starts around ₹15,000. A full build is usually ₹60,000 and up. Ongoing work is monthly. I give you a real number after a quick call, not a vague range.",
  },
  {
    q: "How long does it take?",
    a: "A focused piece of work is one to two weeks. A full build is three to six, depending on how much there is. Video and agent add ons are usually faster.",
  },
  {
    q: "Do I own everything after?",
    a: "Yes. The code, the design files, all of it is yours. Nothing is locked to a builder platform, so you can host it and change it however you want later.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ink/14">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-ink">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-editorial border border-ink/30 text-ink-500 transition-transform duration-300 ${
            open ? "rotate-45 border-vermillion text-vermillion" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="max-w-xl overflow-hidden text-[15px] leading-relaxed text-ink-600">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="display text-4xl font-semibold sm:text-5xl">
          Before we start.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-600">
          The questions people usually ask. If yours is not here, just email me.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl text-left">
        {faqs.map((f) => (
          <Item key={f.q} {...f} />
        ))}
        <div className="border-t border-ink/14" />
      </div>
    </Section>
  );
}
