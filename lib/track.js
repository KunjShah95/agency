/*
 * Funnel events. Works with Plausible or PostHog if either is loaded,
 * and does nothing otherwise. Names follow object_action.
 *
 * cta_clicked      -> any "start a project" style button  { source }
 * service_briefed  -> "Brief this" on a service           { service }
 * brief_started    -> first interaction with the form     { source }
 * brief_submitted  -> form sent                            { channel, services, budget }
 * work_opened      -> case study live link                 { project }
 */
export function track(event, props = {}) {
  if (typeof window === "undefined") return;
  try {
    if (window.plausible) window.plausible(event, { props });
    if (window.posthog?.capture) window.posthog.capture(event, props);
  } catch {}
}
