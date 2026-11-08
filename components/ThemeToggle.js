"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@/lib/track";

/*
 * Follows the visitor's system setting until they pick one, then remembers
 * it. The class is set before paint by the script in app/layout.js, so
 * there is no flash of the wrong theme.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var l=t?t==='light':window.matchMedia('(prefers-color-scheme: light)').matches;if(l)document.documentElement.classList.add('light')}catch(e){}})()`;

export default function ThemeToggle({ className = "" }) {
  const [light, setLight] = useState(null);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = (e) => {
      let saved = null;
      try { saved = localStorage.getItem("theme"); } catch {}
      if (saved) return;
      document.documentElement.classList.toggle("light", e.matches);
      setLight(e.matches);
    };
    mq.addEventListener("change", onSystem);
    return () => mq.removeEventListener("change", onSystem);
  }, []);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
    setLight(next);
    track("theme_toggled", { theme: next ? "light" : "dark" });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 text-neutral-300 transition-colors hover:border-white/25 hover:text-white ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={light ? "moon" : "sun"}
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          {light === false || light === null ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          ) : (
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
          )}
        </motion.svg>
      </AnimatePresence>
    </button>
  );
}
