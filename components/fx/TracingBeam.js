"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/*
 * A vertical rail beside long content. The ember beam grows down the rail
 * as the reader scrolls through it.
 */
export default function TracingBeam({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 400, damping: 60 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-px bg-white/10 sm:left-[15px]">
        <motion.div
          style={{ height }}
          className="w-px bg-gradient-to-b from-transparent via-ember to-ember shadow-[0_0_12px_2px_rgba(255,91,46,0.5)]"
        />
      </div>
      {children}
    </div>
  );
}
