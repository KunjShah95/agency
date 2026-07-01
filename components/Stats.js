"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, Section } from "./ui";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1200;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// Honest numbers only. No inflated claims.
const stats = [
  { node: <Counter to={4} />, label: "services under one roof" },
  { node: <Counter to={1} />, label: "person you actually talk to" },
  { node: "2 to 6", label: "weeks for a typical build" },
  { node: "Page 1", label: "Google rank for a live client" },
];

export default function Stats() {
  return (
    <Section id="stats" className="py-16">
      <Reveal>
        <div className="glass grid grid-cols-2 gap-y-10 rounded-3xl px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                {s.node}
              </div>
              <div className="mx-auto mt-2 max-w-[10rem] text-xs text-white/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
