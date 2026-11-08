"use client";

import { useState } from "react";
import Reveal from "./fx/Reveal";
import { Section, Heading } from "./fx/Section";
import { site, mailto, whatsappLink } from "@/lib/site";
import { homeFaqs } from "@/lib/content";

/* Answers stay in the HTML even when closed, so search engines and AI
   assistants can read every one of them. */
function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  const id = `faq-${i}`;
  return (
    <div className="border-b border-white/10">
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
          <span className={`text-base font-medium transition-colors sm:text-lg ${open ? "text-white" : "text-neutral-300"}`}>{q}</span>
          <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-ember bg-ember text-night" : "border-white/15 text-neutral-400"}`}>+</span>
        </button>
      </h3>
      <div id={id} role="region" className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className="max-w-2xl overflow-hidden leading-relaxed text-neutral-400">
          <span className="block pb-6">{a}</span>
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ faqs = homeFaqs, title = "Before we start." }) {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Heading align="left" eyebrow="FAQ" title={title} />
          <Reveal delay={0.1}>
            <p className="mt-5 text-neutral-400">
              Not here?{" "}
              <a href={mailto("Question")} className="text-white underline decoration-ember underline-offset-4">Email me</a>
              {site.whatsapp && <>{" "}or <a href={whatsappLink("Hi, I have a question.")} target="_blank" rel="noreferrer" className="text-white underline decoration-ember underline-offset-4">WhatsApp</a></>}{" "}and I reply {site.replyTime}.
            </p>
          </Reveal>
        </div>
        <Reveal className="border-t border-white/10">
          {faqs.map(({ q, a }, i) => <Item key={q} q={q} a={a} i={i} />)}
        </Reveal>
      </div>
    </Section>
  );
}
