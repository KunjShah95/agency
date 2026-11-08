"use client";

import { MotionConfig } from "framer-motion";

/* Framer skips transform animations for visitors who ask for reduced motion. */
export default function Motion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
