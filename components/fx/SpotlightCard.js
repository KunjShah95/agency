"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/*
 * Card with a cursor-following glow on both the fill and the border.
 * Uses CSS variables, so moving the mouse never re-renders React.
 */
export default function SpotlightCard({ children, className = "", glow = "rgba(255,91,46,0.14)" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      style={{ "--glow": glow }}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 transition-colors duration-300 hover:border-white/20",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x) var(--y), var(--glow), transparent 45%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
