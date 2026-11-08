"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * A screen that starts tipped back and lies flat as you scroll to it,
 * like a laptop lid opening.
 */
export default function ContainerScroll({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={ref} style={{ perspective: 1400 }} className="relative">
      <motion.div
        style={{ rotateX, scale, y, transformOrigin: "50% 0%" }}
        className="rounded-[28px] border border-white/15 bg-night-800 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_120px_-20px_rgba(255,91,46,0.25)] sm:p-3"
      >
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-night">{children}</div>
      </motion.div>
    </div>
  );
}
