"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import MovingBorder from "./fx/MovingBorder";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/content";
import { track } from "@/lib/track";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

/* Floating pill nav that tightens once you scroll. */
export default function Nav() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 40));
  const pathname = usePathname();
  const isCurrent = (l) => l.label === "Services" && pathname?.startsWith("/services");

  // Full-screen menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 overflow-y-auto bg-night/95 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="space-y-1"
            >
              {links.map((l) => (
                <motion.li key={l.href} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
                  <a
                    href={l.href}
                    aria-current={isCurrent(l) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-white/10 py-4 text-3xl font-semibold tracking-tight ${isCurrent(l) ? "text-ember" : "text-white"}`}
                  >
                    {l.label} <span aria-hidden="true" className="text-xl text-neutral-600">→</span>
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }} className="pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">Services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {servicePages.map((sp) => (
                    <a
                      key={sp.slug}
                      href={`/services/${sp.slug}`}
                      aria-current={pathname === `/services/${sp.slug}` ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`rounded-full border px-3.5 py-2 text-sm ${pathname === `/services/${sp.slug}` ? "border-ember text-white" : "border-white/10 text-neutral-300"}`}
                    >
                      {sp.name}
                    </a>
                  ))}
                </div>
              </motion.li>
              <motion.li variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }} className="pt-8">
                <a
                  href="/#contact"
                  onClick={() => {
                    setOpen(false);
                    track("cta_clicked", { source: "mobile_menu" });
                  }}
                  className="block rounded-full bg-white py-4 text-center text-base font-medium text-night active:scale-[0.98]"
                >
                  Start a project
                </a>
                <p className="mt-3 text-center text-xs text-neutral-500">Reply {site.replyTime} · {site.phone}</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        animate={{ maxWidth: compact ? 860 : 1200 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={`relative w-full rounded-full border transition-colors duration-300 ${
          compact ? "border-white/10 bg-night-900/70 shadow-[0_10px_40px_-10px_var(--float-shadow)] backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-5 pr-2">
          <a href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-ember font-serif text-base italic leading-none text-night">s</span>
            Srijan
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isCurrent(l) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors hover:bg-white/5 hover:text-white ${isCurrent(l) ? "text-white" : "text-neutral-400"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MovingBorder
              href="/#contact"
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
                <span className={`absolute left-0 top-0 h-px w-4 bg-white transition-transform duration-500 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-px w-4 bg-white transition-transform duration-500 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

      </motion.nav>
    </header>
  );
}
