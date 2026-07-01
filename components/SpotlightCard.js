"use client";

export default function SpotlightCard({ children, className = "" }) {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  return (
    <div onMouseMove={onMove} className={`spot-card ${className}`}>
      {children}
    </div>
  );
}
