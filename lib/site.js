/*
 * One place for every fact the site states about the studio.
 * Edit these, not the components.
 */
export const site = {
  name: "Srijan Studio",
  email: "kkshah2005@gmail.com",
  // Digits only with country code, e.g. "919876543210". Leave empty to hide
  // every WhatsApp button (the brief form then sends by email only).
  whatsapp: "919106878258",
  phone: "+91 91068 78258",
  city: "Ahmedabad",
  timezone: "Asia/Kolkata",
  replyTime: "within 24 hours",
  // Shown in the nav, hero and brief. Keep it true.
  availability: "Booking new projects",
  // Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yourdomain.com) for
  // canonical links and social previews.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://srijanstudio.vercel.app",
};

export const services = [
  { id: "web", label: "Website" },
  { id: "design", label: "UI / UX design" },
  { id: "agent", label: "AI agent" },
  { id: "video", label: "AI video" },
];

export const budgets = ["Under ₹25k", "₹25k – 60k", "₹60k – 1.5L", "₹1.5L +", "Not sure yet"];
export const timelines = ["ASAP", "This month", "Next 1–2 months", "Just exploring"];

export function mailto(subject, body = "") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
}

export function whatsappLink(text) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* Pre-select a service in the brief form and scroll to it. */
export function openBrief(serviceId, source) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("brief:preset", { detail: { serviceId, source } }));
}
