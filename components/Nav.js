"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import MovingBorder from "./fx/MovingBorder";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/site";
import { track } from "@/lib/track";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* Floating pill nav that tightens once you scroll. */
export default function Nav() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 40));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        animate={{ maxWidth: compact ? 860 : 1200 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={`relative w-full rounded-full border transition-colors duration-300 ${
          compact ? "border-white/10 bg-night-900/70 shadow-[0_10px_40px_-10px_var(--float-shadow)] backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-5 pr-2">
          <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-ember font-serif text-base italic leading-none text-night">s</span>
            Srijan
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3.5 py-2 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MovingBorder
              href="#contact"
              onClick={() => track("cta_clicked", { source: "nav" })}
              className="hidden h-10 sm:inline-flex"
              innerClassName="px-5"
            >
              Start a project
            </MovingBorder>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 top-0 h-px w-4 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-px w-4 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute inset-x-0 top-16 rounded-3xl border border-white/10 bg-night-900/95 p-3 backdrop-blur-xl md:hidden"
            >
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-3 text-neutral-300 hover:bg-white/5">
                  {l.label} <span className="text-neutral-600">→</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setOpen(false);
                  track("cta_clicked", { source: "mobile_menu" });
                }}
                className="mt-2 block rounded-2xl bg-white py-3 text-center text-sm font-medium text-night"
              >
                Start a project
              </a>
              <p className="mt-3 text-center text-xs text-neutral-500">Reply {site.replyTime}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
