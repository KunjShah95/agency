/*
 * Funnel events. Sent to Vercel Analytics, plus Plausible or PostHog if
 * either is loaded. Names follow object_action.
 *
 * cta_clicked      -> any "start a project" style button  { source }
 * service_briefed  -> "Brief this" on a service           { service }
 * brief_started    -> first interaction with the form     { source }
 * brief_submitted  -> form sent                            { channel, services, budget }
 * work_opened      -> case study live link                 { project }
 * whatsapp_clicked -> direct WhatsApp link                 { source }
 * theme_toggled    -> light / dark switch                  { theme }
 */
import { track as vercelTrack } from "@vercel/analytics";

export function track(event, props = {}) {
  if (typeof window === "undefined") return;
  try {
    // Vercel Analytics custom events (shown under Analytics → Events on
    // plans that include them; safely ignored otherwise).
    vercelTrack(event, props);
    if (window.plausible) window.plausible(event, { props });
    if (window.posthog?.capture) window.posthog.capture(event, props);
  } catch {}
}
