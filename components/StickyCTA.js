"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { track } from "@/lib/track";

/*
 * Phone-only bar: appears once the hero CTA has scrolled away and hides
 * again when the brief form is on screen, so it never covers it.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let atContact = false;
    const update = () => setShow(pastHero && !atContact);

    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) pastHero = !e.isIntersecting;
        if (e.target === contact) atContact = e.isIntersecting;
      }
      update();
    });
    hero && io.observe(hero);
    contact && io.observe(contact);
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 border border-ink/15 bg-paper/95 py-2 pl-4 pr-2 shadow-[0_12px_40px_-12px_rgba(22,19,14,0.4)] backdrop-blur md:hidden"
        >
          <span className="flex items-center gap-2 text-xs text-ink-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3a9d5d]" />
            Reply {site.replyTime}
          </span>
          <a
            href="#contact"
            onClick={() => track("cta_clicked", { source: "sticky_mobile" })}
            className="rounded-editorial bg-ink px-4 py-2.5 text-sm font-medium text-paper active:scale-[0.97]"
          >
            Start a project
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
