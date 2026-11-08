"use client";

import { motion } from "framer-motion";

/*
 * Words blur and fade in one after another. Pass `accent` words to set
 * them in the italic serif with the ember colour.
 */
export default function TextGenerate({ text, accent = [], className = "", delay = 0, as = "h1" }) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {words.map((w, i) => {
        const bare = w.replace(/[.,]/g, "");
        const isAccent = accent.includes(bare);
        return (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, filter: "blur(10px)", y: 8 },
              show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {isAccent ? (
              <span className="font-serif font-normal italic tracking-normal text-ember">{w}</span>
            ) : (
              w
            )}
            {i < words.length - 1 && " "}
          </motion.span>
        );
      })}
    </Tag>
  );
}
