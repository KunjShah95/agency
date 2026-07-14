"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#top" className="display text-lg font-semibold tracking-tight">
          Srijan<span className="text-vermillion">.</span>
        </a>

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

        <a
          href="#contact"
          className="rounded-editorial bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-vermillion"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
