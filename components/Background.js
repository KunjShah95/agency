"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[8%] top-[12%] h-72 w-72 bg-violet-glow/20",
    animate: { x: [0, 60, 0], y: [0, -40, 0] },
    duration: 19,
  },
  {
    className:
      "right-[6%] top-[42%] h-80 w-80 bg-fuchsia-500/15",
    animate: { x: [0, -50, 0], y: [0, 55, 0] },
    duration: 23,
  },
  {
    className:
      "left-[34%] bottom-[6%] h-72 w-72 bg-sky-500/12",
    animate: { x: [0, 45, 0], y: [0, 30, 0] },
    duration: 27,
  },
];

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* faint drifting grid */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_78%)]" />
      {/* slow floating aurora blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={b.animate}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[130px] ${b.className}`}
        />
      ))}
      {/* vignette so content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/60" />
    </div>
  );
}
