"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./ui";
import { site, services, budgets, timelines, mailto, whatsappLink } from "@/lib/site";
import { track } from "@/lib/track";

/*
 * Three short steps instead of one long form. Every step is a tap, so the
 * only typing is a name and a sentence. Submits through the visitor's own
 * email or WhatsApp app, so there is no backend to break.
 */

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border px-4 py-2.5 text-sm transition-all duration-200 active:scale-[0.97] ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-ink/20 bg-paper-100 text-ink-800 hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

const STEPS = ["What", "Budget", "You"];

export default function CTA() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const started = useRef(false);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const start = (source = "form") => {
    if (started.current) return;
    started.current = true;
    track("brief_started", { source });
  };

  // Other sections can pre-select a service and jump here.
  useEffect(() => {
    const onPreset = (e) => {
      const { serviceId, source } = e.detail || {};
      if (serviceId) setPicked((p) => (p.includes(serviceId) ? p : [...p, serviceId]));
      setStep(0);
      setSent(false);
      start(source);
      const el = sectionRef.current;
      if (!el) return;
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
      else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };
    window.addEventListener("brief:preset", onPreset);
    return () => window.removeEventListener("brief:preset", onPreset);
  }, [reduce]);

  const toggle = (id) => {
    start();
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const labels = services.filter((s) => picked.includes(s.id)).map((s) => s.label);
  const message = [
    `Hi, I'm ${name || "…"}.`,
    "",
    `I need: ${labels.join(", ") || "not sure yet"}`,
    `Budget: ${budget || "not sure yet"}`,
    `Timeline: ${timeline || "flexible"}`,
    "",
    note ? `About the project: ${note}` : "",
  ]
    .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
    .join("\n")
    .trim();

  const canNext = [picked.length > 0, budget && timeline, name.trim().length > 1][step];
  const wa = whatsappLink(message);

  const send = (channel) => {
    track("brief_submitted", { channel, services: picked.join(","), budget, timeline });
    setSent(true);
  };

  const slide = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="contact" ref={sectionRef} className="scroll-mt-20 px-6 pb-24 pt-8 sm:px-10">
      <Reveal className="mx-auto max-w-page">
        <div className="grid overflow-hidden border-2 border-ink lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: the pitch */}
          <div className="relative flex flex-col justify-between bg-ink p-8 text-paper sm:p-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-vermillion">Start here</div>
              <h2 className="display mt-6 text-[2.5rem] font-semibold leading-[0.98] sm:text-6xl">
                Tell me what you want built.
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper/70">
                Three taps and a sentence. I reply {site.replyTime} with a plan, a
                timeline and a real number.
              </p>
            </div>

            <ul className="mt-12 space-y-3 border-t border-paper/15 pt-6 text-sm text-paper/70">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-vermillion" /> No sales call unless you want one
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-vermillion" /> Fixed price before any work starts
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-vermillion" /> Or just write to{" "}
                <a href={mailto("Project inquiry")} className="link-underline pb-0.5 text-paper">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* right: the brief */}
          <div className="flex min-h-[460px] flex-col bg-paper-100 p-8 sm:p-12">
            {!sent && (
              <ol className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={i > step}
                      onClick={() => setStep(i)}
                      className={`flex items-center gap-2 ${i === step ? "text-ink" : i < step ? "text-ink-500 hover:text-ink" : "text-ink-400"}`}
                    >
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-full border text-[10px] ${
                          i < step ? "border-vermillion bg-vermillion text-paper" : i === step ? "border-ink" : "border-ink/20"
                        }`}
                      >
                        {i < step ? "✓" : i + 1}
                      </span>
                      {s}
                    </button>
                    {i < STEPS.length - 1 && <span className="h-px w-6 bg-ink/20" />}
                  </li>
                ))}
              </ol>
            )}

            <div className="mt-8 flex-1">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="sent" {...slide} className="flex h-full flex-col justify-center">
                    <div className="display text-4xl font-semibold">Thanks{name ? `, ${name.split(" ")[0]}` : ""}.</div>
                    <p className="mt-4 max-w-md text-ink-600">
                      Your message should be open and ready to send in your mail or
                      WhatsApp app. Once it lands, I reply {site.replyTime}.
                    </p>
                    <button type="button" onClick={() => { setSent(false); setStep(2); }} className="link-underline mt-6 w-fit pb-0.5 text-sm font-medium">
                      Didn&apos;t open? Try again
                    </button>
                  </motion.div>
                ) : step === 0 ? (
                  <motion.fieldset key="s0" {...slide}>
                    <legend className="display text-2xl font-semibold">What do you need?</legend>
                    <p className="mt-1 text-sm text-ink-500">Pick one or more.</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {services.map((s) => (
                        <Chip key={s.id} active={picked.includes(s.id)} onClick={() => toggle(s.id)}>
                          {s.label}
                        </Chip>
                      ))}
                      <Chip active={picked.includes("other")} onClick={() => toggle("other")}>
                        Something else
                      </Chip>
                    </div>
                  </motion.fieldset>
                ) : step === 1 ? (
                  <motion.div key="s1" {...slide} className="space-y-8">
                    <fieldset>
                      <legend className="display text-2xl font-semibold">Rough budget?</legend>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {budgets.map((b) => (
                          <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Chip>
                        ))}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="display text-2xl font-semibold">When do you need it?</legend>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {timelines.map((t) => (
                          <Chip key={t} active={timeline === t} onClick={() => setTimeline(t)}>{t}</Chip>
                        ))}
                      </div>
                    </fieldset>
                  </motion.div>
                ) : (
                  <motion.div key="s2" {...slide} className="space-y-5">
                    <label className="block">
                      <span className="display text-2xl font-semibold">Your name</span>
                      <input
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        placeholder="So I know who I'm talking to"
                        className="mt-3 w-full border-b-2 border-ink/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-ink-400 focus:border-vermillion"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-ink-600">One line about the project <span className="text-ink-400">(optional)</span></span>
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        placeholder="e.g. A site for my clinic that gets bookings on WhatsApp"
                        className="mt-2 w-full resize-none border border-ink/20 bg-paper p-3 text-[15px] outline-none transition-colors placeholder:text-ink-400 focus:border-vermillion"
                      />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!sent && (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/12 pt-6">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={`text-sm text-ink-500 hover:text-ink ${step === 0 ? "invisible" : ""}`}
                >
                  ← Back
                </button>

                {step < 2 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="rounded-editorial bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-vermillion disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-ink"
                  >
                    Next →
                  </button>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {wa && (
                      <a
                        href={canNext ? wa : undefined}
                        target="_blank"
                        rel="noreferrer"
                        aria-disabled={!canNext}
                        onClick={(e) => (canNext ? send("whatsapp") : e.preventDefault())}
                        className={`rounded-editorial border border-ink px-6 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper ${canNext ? "" : "pointer-events-none opacity-30"}`}
                      >
                        Send on WhatsApp
                      </a>
                    )}
                    <a
                      href={canNext ? mailto(`Project brief: ${labels.join(", ") || "new project"}`, message) : undefined}
                      aria-disabled={!canNext}
                      onClick={(e) => (canNext ? send("email") : e.preventDefault())}
                      className={`rounded-editorial bg-vermillion px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink ${canNext ? "" : "pointer-events-none opacity-30"}`}
                    >
                      Send my brief ↗
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
