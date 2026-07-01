"use client";

import { motion } from "framer-motion";

// deterministic pseudo-random so server and client markup match
function rand(seed) {
  const x = Math.sin(seed * 999.13) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.round(rand(i + 1) * 100)}%`,
  top: `${Math.round(rand(i + 7) * 100)}%`,
  size: 1 + Math.round(rand(i + 3) * 2),
  delay: rand(i + 5) * 6,
  duration: 6 + rand(i + 9) * 8,
}));

const beams = [
  { left: "18%", delay: 0, hue: "from-violet-glow/0 via-violet-glow/70 to-violet-glow/0" },
  { left: "50%", delay: 1.4, hue: "from-sky-400/0 via-sky-400/60 to-sky-400/0" },
  { left: "78%", delay: 2.6, hue: "from-fuchsia-400/0 via-fuchsia-400/60 to-fuchsia-400/0" },
];

export default function HeroFX() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* sweeping light beams */}
      {beams.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: "-40%", opacity: 0 }}
          animate={{ y: "140%", opacity: [0, 1, 0] }}
          transition={{
            duration: 5,
            delay: b.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          style={{ left: b.left }}
          className={`absolute top-0 h-40 w-px bg-gradient-to-b ${b.hue}`}
        />
      ))}

      {/* drifting particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          className="absolute rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(124,92,255,0.5)]"
        />
      ))}
    </div>
  );
}
