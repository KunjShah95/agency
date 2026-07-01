"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.6, 1]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 px-5 py-10 sm:px-8"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-violet-glow to-indigo-500 text-xs font-bold">
            S
          </span>
          <span className="text-sm text-white/60">Srijan Studio</span>
        </div>
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} Srijan Studio · Web · Design · AI · Video
        </p>
      </motion.div>
    </footer>
  );
}
