"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * Tagline reveal: each word goes from muted to full colour as the line
 * scrolls through the viewport, one at a time in reading order. Tied to
 * scroll position, so it never moves on its own. Reduced motion shows the
 * final colour via CSS (.reveal-word in globals.css).
 */
function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.45, 1]); // 45%: still muted, but large text keeps 3:1 contrast in both themes
  return (
    // The ember accent stays at full strength (ember at low opacity fails
    // contrast); the words around it do the revealing.
    <motion.span style={{ opacity: accent ? 1 : opacity }} className={`reveal-word inline-block ${accent ? "font-serif font-normal italic tracking-normal text-ember" : ""}`}>
      {children}
    </motion.span>
  );
}

export default function ScrollWords({ text, accent = "", className = "", as: Tag = "p" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");
  // Highlight one exact phrase (e.g. "same person"), not every matching word.
  const phrase = accent ? accent.split(" ") : [];
  const bare = (w) => w.replace(/[.,]/g, "").toLowerCase();
  const startAt = phrase.length
    ? words.findIndex((_, i) => phrase.every((p, j) => bare(words[i + j] || "") === p.toLowerCase()))
    : -1;
  const isAccent = (i) => startAt >= 0 && i >= startAt && i < startAt + phrase.length;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <span key={i} aria-hidden="true">
            <Word progress={scrollYProgress} range={[start, start + 1 / words.length]} accent={isAccent(i)}>
              {w}
            </Word>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
