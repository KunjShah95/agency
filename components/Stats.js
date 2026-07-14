"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf;
    const start = performance.now();
    const dur = 1100;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { node: <Counter to={4} />, label: "services under one roof" },
  { node: <Counter to={1} />, label: "person you actually talk to" },
  { node: "2 to 6", label: "weeks for a typical build" },
  { node: "Page 1", label: "Google rank for a live client" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-y-12 px-6 py-20 sm:px-10 md:grid-cols-4 md:py-24">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-2 ${
              i !== 0 ? "md:border-l md:border-paper/15 md:pl-8" : ""
            }`}
          >
            <div className="display text-5xl font-semibold text-vermillion sm:text-6xl">
              {s.node}
            </div>
            <div className="mt-3 max-w-[11rem] text-sm text-paper/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
