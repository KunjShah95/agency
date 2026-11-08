"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./fx/Reveal";
import { Section, Heading } from "./fx/Section";
import { site, mailto, whatsappLink } from "@/lib/site";

const faqs = [
  ["I'm not technical. Can you still help?", "That is most of who I work with. I handle the design, the code, the AI and the video, and explain what I'm doing in normal words. You bring the idea."],
  ["Do you only build websites?", "No. Four things: websites, UI/UX design, AI agents and AI video. Plenty of projects use two or three together, which is easier when it is one person doing them."],
  ["What does a project cost?", "A focused sprint starts around ₹15,000. A full build is usually ₹60,000 and up. Ongoing work is monthly. You get a real number in writing after a short call, not a vague range."],
  ["How long does it take?", "A website goes live in 7 days: plan on day one, design by day three, built by day six, live on day seven. Bigger builds with apps or AI agents take two to four weeks."],
  ["Do I own everything after?", "Yes. Code, design files, domain, all of it. Nothing is locked to a builder platform, so you can host it and change it however you like."],
  ["What if I'm not happy with the design?", "You approve the design before anything is built, and each package includes revision rounds. The point of the design step is that there are no surprises at launch."],
];

function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-b border-white/10">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className={`text-base font-medium transition-colors sm:text-lg ${open ? "text-white" : "text-neutral-300"}`}>{q}</span>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-ember bg-ember text-night" : "border-white/15 text-neutral-400"}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="max-w-2xl pb-6 leading-relaxed text-neutral-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Heading align="left" eyebrow="FAQ" title="Before we start." />
          <Reveal delay={0.1}>
            <p className="mt-5 text-neutral-400">
              Not here?{" "}
              <a href={mailto("Question")} className="text-white underline decoration-ember underline-offset-4">Email me</a>
              {site.whatsapp && <>{" "}or <a href={whatsappLink("Hi, I have a question.")} target="_blank" rel="noreferrer" className="text-white underline decoration-ember underline-offset-4">WhatsApp</a></>}{" "}and I reply {site.replyTime}.
            </p>
          </Reveal>
        </div>
        <Reveal className="border-t border-white/10">
          {faqs.map(([q, a], i) => <Item key={q} q={q} a={a} i={i} />)}
        </Reveal>
      </div>
    </Section>
  );
}
