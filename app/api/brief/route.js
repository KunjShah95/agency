import { site } from "@/lib/site";

/*
 * Receives a project brief from the contact form and forwards it to the
 * studio's own WhatsApp through CallMeBot (free, owner-only messages).
 *
 * Setup (once):
 *  1. From the studio WhatsApp, follow the activation steps on
 *     callmebot.com (WhatsApp API) to get an API key.
 *  2. In Vercel → Settings → Environment Variables add
 *     CALLMEBOT_APIKEY=<your key>   and redeploy.
 *
 * Without the key the route answers { delivered: false } and the form falls
 * back to opening WhatsApp with the message pre-filled.
 */

const MAX = { name: 80, phone: 20, note: 600, field: 120 };
const clip = (v, n) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, n);

function normalisePhone(raw) {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  if (digits.length >= 11 && digits.length <= 15) return digits;
  return null;
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body.company) return Response.json({ ok: true, delivered: true });

  const name = clip(body.name, MAX.name);
  const phone = normalisePhone(body.phone);
  if (name.length < 2 || !phone) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const services = clip(Array.isArray(body.services) ? body.services.join(", ") : body.services, MAX.field) || "not sure yet";
  const budget = clip(body.budget, MAX.field) || "not sure yet";
  const timeline = clip(body.timeline, MAX.field) || "flexible";
  const note = clip(body.note, MAX.note);

  const text = [
    "🟠 New project brief (srijanstudio)",
    "",
    `Name: ${name}`,
    `WhatsApp: +${phone}`,
    `Needs: ${services}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
    note ? `About: ${note}` : null,
    "",
    `Reply: https://wa.me/${phone}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!apikey || !site.whatsapp) {
    return Response.json({ ok: true, delivered: false, reason: "not_configured" });
  }

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(site.whatsapp)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10000) });
    const out = await res.text();
    // CallMeBot answers with a short HTML page saying the message was queued.
    const delivered = res.ok && /queued|sent/i.test(out);
    if (!delivered) console.error("callmebot failed", res.status, out.slice(0, 300));
    return Response.json({ ok: true, delivered });
  } catch (e) {
    console.error("callmebot error", e);
    return Response.json({ ok: true, delivered: false, reason: "send_failed" });
  }
}
