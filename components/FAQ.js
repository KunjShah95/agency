"use client";

import { useState } from "react";
import { Reveal, Section, SectionHeader } from "./ui";

const faqs = [
  {
    q: "I'm not technical. Can you still help?",
    a: "That's most of who I work with. I handle the design, the code, the AI, and the video, and I explain what I'm doing in normal words. You bring the idea, I handle the rest.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Four things: websites, UI/UX design, AI agents, and AI video. Plenty of projects use two or three of those together, which is easier when it's one person doing them.",
  },
  {
    q: "What does a project cost?",
    a: "A small one off starts around ₹15,000. A full build is usually ₹60,000 and up. Ongoing work is monthly. I give you a real number after a quick call, not a vague range.",
  },
  {
    q: "How long does it take?",
    a: "A focused piece of work is one to two weeks. A full build is three to six, depending on how much there is. Video and agent add-ons are usually faster.",
  },
  {
    q: "Do I own everything after?",
    a: "Yes. The code, the design files, all of it is yours. Nothing is locked to a builder platform, so you can host it and change it however you want later.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="glass glass-hover w-full rounded-2xl p-6 text-left"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">{q}</span>
        <span
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-white/55">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function FAQ() {
  return (
    <Section id="faq">
      <SectionHeader eyebrow="Before we start">
        Stuff people ask before we start.
      </SectionHeader>
      <div className="mx-auto grid max-w-3xl gap-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <Item {...f} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
