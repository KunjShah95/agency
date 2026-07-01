"use client";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet-glow to-indigo-500 text-sm font-bold">
            S
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Srijan Studio
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-glow to-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition-transform hover:scale-105"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
