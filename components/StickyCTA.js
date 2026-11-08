"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
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
          className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-night-900/85 py-2 pl-5 pr-2 shadow-[0_12px_40px_-12px_var(--float-shadow)] backdrop-blur-xl md:hidden"
        >
          <span className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Reply {site.replyTime}
          </span>
          <div className="flex items-center gap-2">
          {site.whatsapp && (
            <a
              href={whatsappLink("Hi, I'd like to talk about a project.")}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              onClick={() => track("whatsapp_clicked", { source: "sticky_mobile" })}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#25d366]"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          )}
          <a
            href="#contact"
            onClick={() => track("cta_clicked", { source: "sticky_mobile" })}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-night active:scale-[0.97]"
          >
            Start a project
          </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
