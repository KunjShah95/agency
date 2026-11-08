"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { site } from "@/lib/site";
import { track } from "@/lib/track";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-ink/12 bg-paper/85 backdrop-blur-sm" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-4">
          <a href="#top" className="display text-lg font-semibold tracking-tight">
            Srijan<span className="text-vermillion">.</span>
          </a>
          <span className="hidden items-center gap-2 border-l border-ink/15 pl-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3a9d5d]" />
            {site.availability}
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline pb-0.5 text-sm text-ink-600 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" onClick={() => track("cta_clicked", { source: "nav" })} className="hidden rounded-editorial sm:inline-block bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-vermillion">
            Start a project
          </a>
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink/15 md:hidden">
            <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-vermillion transition-opacity ${scrolled ? "opacity-100" : "opacity-0"}`}
      />
      {menuOpen && <div id="mobile-navigation" className="border-t border-ink/10 bg-paper px-6 py-3 md:hidden">
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block border-b border-ink/10 py-3 text-sm text-ink-600 last:border-0">{l.label}<span className="float-right text-vermillion">↗</span></a>)}
        <a href="#contact" onClick={() => { setMenuOpen(false); track("cta_clicked", { source: "mobile_menu" }); }} className="mt-3 block rounded-editorial bg-ink py-3 text-center text-sm font-medium text-paper">Start a project</a>
      </div>}
    </header>
  );
}
