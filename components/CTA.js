"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lamp from "./fx/Lamp";
import Reveal from "./fx/Reveal";
import { Serif } from "./fx/Section";
import { site, services, budgets, timelines, mailto, whatsappLink } from "@/lib/site";
import { track } from "@/lib/track";
import WhatsAppIcon from "./WhatsAppIcon";

/*
 * Three short steps instead of one long form. Every step is a tap, so the
 * only typing is a name and a sentence. Sends through the visitor's own
 * email or WhatsApp app, so there is no backend to break.
 */

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-sm transition-all duration-200 active:scale-[0.97] ${
        active
          ? "border-ember bg-ember/15 text-white shadow-[0_0_20px_-6px_rgba(255,91,46,0.7)]"
          : "border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/30"
      }`}
    >
      {children}
    </button>
  );
}

const STEPS = ["What", "Budget", "You"];

export default function CTA() {
  const sectionRef = useRef(null);
  const started = useRef(false);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(""); // honeypot, hidden from people
  // false | "auto" (landed on the studio WhatsApp) | "manual" (visitor must tap send)
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -40 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("brief:preset", onPreset);
    return () => window.removeEventListener("brief:preset", onPreset);
  }, []);

  const toggle = (id) => {
    start();
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const labels = [...services, { id: "other", label: "Something else" }].filter((s) => picked.includes(s.id)).map((s) => s.label);
  const message = [
    `Hi, I'm ${name || "…"}.`,
    ...(phone ? [`My WhatsApp: ${phone}`] : []),
    "",
    `I need: ${labels.join(", ") || "not sure yet"}`,
    `Budget: ${budget || "not sure yet"}`,
    `Timeline: ${timeline || "flexible"}`,
    ...(note ? ["", `About the project: ${note}`] : []),
  ].join("\n");

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneOk = phoneDigits.length >= 10 && phoneDigits.length <= 15;
  const canNext = [picked.length > 0, Boolean(budget && timeline), name.trim().length > 1 && phoneOk][step];
  const wa = whatsappLink(message);
  const mail = mailto(`Project brief: ${labels.join(", ") || "new project"}`, message);

  /* Send straight to the studio WhatsApp. If that is not set up or fails,
     fall back to a one-tap pre-filled WhatsApp message. */
  const submit = async () => {
    if (!canNext || sending) return;
    setSending(true);
    let delivered = false;
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, services: labels, budget, timeline, note, company }),
      });
      delivered = (await res.json())?.delivered === true;
    } catch {}
    setSending(false);
    setSent(delivered ? "auto" : "manual");
    track("brief_submitted", { channel: delivered ? "direct" : "fallback", services: picked.join(","), budget, timeline });
  };

  const slide = {
    initial: { opacity: 0, x: 24, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -24, filter: "blur(4px)" },
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section id="contact" ref={sectionRef} className="relative scroll-mt-10 overflow-hidden px-5 pb-28 pt-10 sm:px-8">
      <Lamp />
      <div className="relative mx-auto -mt-16 max-w-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-silver text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Tell me what you <Serif>want built.</Serif>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-neutral-400 sm:text-lg">
            Three taps, your name and number. I reply {site.replyTime} with a plan, a
            timeline and a real number.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-[28px] border border-white/10 bg-night-900/80 p-2 shadow-[0_40px_120px_-40px_rgba(255,91,46,0.35)] backdrop-blur">
            <div className="flex min-h-[440px] flex-col rounded-[22px] border border-white/5 bg-night p-6 sm:p-10">
              {!sent && (
                <div>
                  <ol className="flex items-center gap-2 text-xs sm:gap-3">
                    {STEPS.map((s, i) => (
                      <li key={s} className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          disabled={i > step}
                          onClick={() => setStep(i)}
                          className={`flex items-center gap-2 ${i === step ? "text-white" : i < step ? "text-neutral-400 hover:text-white" : "text-neutral-600"}`}
                        >
                          <span className={`grid h-6 w-6 place-items-center rounded-full border text-[11px] ${i < step ? "border-ember bg-ember text-night" : i === step ? "border-white/60" : "border-white/15"}`}>
                            {i < step ? "✓" : i + 1}
                          </span>
                          {s}
                        </button>
                        {i < STEPS.length - 1 && <span className="h-px w-6 bg-white/15 sm:w-10" />}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
                    <motion.div className="h-full bg-ember" animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ type: "spring", stiffness: 200, damping: 30 }} />
                  </div>
                </div>
              )}

              <div className="mt-8 flex-1">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="sent" {...slide} className="flex h-full flex-col items-center justify-center text-center">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-ember/15 text-2xl text-ember">✓</div>
                      {sent === "auto" ? (
                        <>
                          <div className="mt-6 text-3xl font-semibold text-white">Got it{name ? `, ${name.split(" ")[0]}` : ""}.</div>
                          <p className="mt-3 max-w-sm text-neutral-400">
                            Your brief just landed on my WhatsApp. I&apos;ll message you on {phone} {site.replyTime} with a plan and a real number.
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="mt-6 text-3xl font-semibold text-white">One last tap{name ? `, ${name.split(" ")[0]}` : ""}.</div>
                          <p className="mt-3 max-w-sm text-neutral-400">
                            Your brief is written. Open WhatsApp and press send, and I reply {site.replyTime}.
                          </p>
                          <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {wa && (
                              <a
                                href={wa}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => track("whatsapp_clicked", { source: "brief_fallback" })}
                                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-medium text-[#062b14] transition-transform active:scale-[0.98]"
                              >
                                <WhatsAppIcon /> Send on WhatsApp
                              </a>
                            )}
                            <a href={mail} className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm text-white hover:border-white/40">
                              Email instead
                            </a>
                          </div>
                        </>
                      )}
                      <button type="button" onClick={() => { setSent(false); setStep(2); }} className="mt-6 text-sm text-neutral-500 underline decoration-white/20 underline-offset-4 hover:text-white">
                        Edit my brief
                      </button>
                    </motion.div>
                  ) : step === 0 ? (
                    <motion.fieldset key="s0" {...slide}>
                      <legend className="text-2xl font-semibold tracking-tight text-white">What do you need?</legend>
                      <p className="mt-1 text-sm text-neutral-500">Pick one or more.</p>
                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {services.map((s) => (
                          <Chip key={s.id} active={picked.includes(s.id)} onClick={() => toggle(s.id)}>{s.label}</Chip>
                        ))}
                        <Chip active={picked.includes("other")} onClick={() => toggle("other")}>Something else</Chip>
                      </div>
                    </motion.fieldset>
                  ) : step === 1 ? (
                    <motion.div key="s1" {...slide} className="space-y-8">
                      <fieldset>
                        <legend className="text-2xl font-semibold tracking-tight text-white">Rough budget?</legend>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {budgets.map((b) => <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Chip>)}
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="text-2xl font-semibold tracking-tight text-white">When do you need it?</legend>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {timelines.map((t) => <Chip key={t} active={timeline === t} onClick={() => setTimeline(t)}>{t}</Chip>)}
                        </div>
                      </fieldset>
                    </motion.div>
                  ) : (
                    <motion.div key="s2" {...slide} className="space-y-6">
                      <label className="block">
                        <span className="text-2xl font-semibold tracking-tight text-white">Your name</span>
                        <input
                          autoFocus
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="name"
                          placeholder="So I know who I'm talking to"
                          className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-lg text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-ember"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm text-neutral-400">Your WhatsApp number <span className="text-neutral-600">(so I can reply)</span></span>
                        <div className="mt-2 flex items-center rounded-2xl border border-white/10 bg-white/[0.03] transition-colors focus-within:border-ember">
                          <span className="pl-4 pr-2 text-[15px] text-neutral-500">+91</span>
                          <input
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel-national"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/[^\d +-]/g, "").slice(0, 16))}
                            placeholder="98765 43210"
                            className="w-full bg-transparent py-3.5 pr-4 text-[15px] text-white outline-none placeholder:text-neutral-600"
                          />
                        </div>
                        {phone && !phoneOk && <span className="mt-1.5 block text-xs text-ember">Enter a 10 digit mobile number.</span>}
                      </label>
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="absolute -left-[9999px] h-0 w-0 opacity-0"
                      />
                      <label className="block">
                        <span className="text-sm text-neutral-400">One line about the project <span className="text-neutral-600">(optional)</span></span>
                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          rows={3}
                          placeholder="e.g. A site for my clinic that gets bookings on WhatsApp"
                          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[15px] text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-ember"
                        />
                      </label>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!sent && (
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} className={`text-sm text-neutral-500 hover:text-white ${step === 0 ? "invisible" : ""}`}>
                    ← Back
                  </button>

                  {step < 2 ? (
                    <button
                      type="button"
                      disabled={!canNext}
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-night transition-all hover:bg-ember disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-white"
                    >
                      Next →
                    </button>
                  ) : (
                    <div className="flex flex-wrap items-center gap-4">
                      <a href={canNext ? mail : undefined} aria-disabled={!canNext} className={`text-sm text-neutral-500 underline decoration-white/20 underline-offset-4 hover:text-white ${canNext ? "" : "pointer-events-none opacity-40"}`}>
                        or email
                      </a>
                      <button
                        type="button"
                        disabled={!canNext || sending}
                        onClick={submit}
                        className="inline-flex h-12 items-center gap-2 rounded-full bg-ember px-6 text-sm font-medium text-night shadow-[0_0_30px_-6px_rgba(255,91,46,0.8)] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-ember"
                      >
                        {sending ? "Sending…" : "Send my brief ↗"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <figure className="mx-auto mt-10 max-w-xl text-center">
            <blockquote className="font-serif text-xl italic leading-snug text-neutral-200 sm:text-2xl">
              &ldquo;You understood our vision and brought it to life exactly the way we wanted.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500">
              <span className="text-ember">★★★★★</span> Swarnika Jewellery, Ahmedabad
            </figcaption>
          </figure>

          <p className="mt-8 text-center text-sm text-neutral-500">
            Prefer to message directly?{" "}
            <a href={mailto("Project inquiry")} className="text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-white">
              {site.email}
            </a>
            {site.whatsapp && (
              <>
                {" "}or{" "}
                <a
                  href={whatsappLink("Hi, I'd like to talk about a project.")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track("whatsapp_clicked", { source: "contact" })}
                  className="inline-flex items-center gap-1 text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-[#25d366]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp {site.phone}
                </a>
              </>
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
