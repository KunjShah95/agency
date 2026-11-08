"use client";

import { motion } from "framer-motion";

/* Aceternity "lamp": two cones of light open out from a bright bar. */
export default function Lamp({ className = "" }) {
  const cone = { initial: { opacity: 0.4, width: "12rem" }, whileInView: { opacity: 1, width: "28rem" }, viewport: { once: true }, transition: { delay: 0.2, duration: 0.9, ease: "easeInOut" } };
  return (
    <div aria-hidden="true" className={`pointer-events-none relative flex h-40 w-full scale-y-125 items-center justify-center overflow-hidden ${className}`}>
      <motion.div
        {...cone}
        style={{ backgroundImage: "conic-gradient(from 70deg at center top, #ff5b2e, transparent, transparent)" }}
        className="absolute right-1/2 top-0 h-40 overflow-visible [--tw:0]"
      >
        <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-night [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute bottom-0 left-0 z-20 h-full w-24 bg-night [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>
      <motion.div
        {...cone}
        style={{ backgroundImage: "conic-gradient(from 290deg at center top, transparent, transparent, #ff5b2e)" }}
        className="absolute left-1/2 top-0 h-40"
      >
        <div className="absolute bottom-0 right-0 z-20 h-full w-24 bg-night [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute bottom-0 right-0 z-20 h-24 w-full bg-night [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>
      <div className="absolute top-0 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-ember opacity-40 blur-3xl" />
      <motion.div
        initial={{ width: "6rem" }}
        whileInView={{ width: "16rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        className="absolute top-0 h-36 -translate-y-1/2 rounded-full bg-ember-400 opacity-60 blur-2xl"
      />
      <motion.div
        initial={{ width: "12rem" }}
        whileInView={{ width: "28rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        className="absolute top-0 h-px bg-ember-400"
      />
    </div>
  );
}
