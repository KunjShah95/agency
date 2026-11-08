import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

/*
 * The preview card shown when the site is shared on WhatsApp, LinkedIn,
 * X, Slack and so on. Generated at build time in the site's own style.
 */
export const alt = "Srijan Studio: websites, products and AI, built by one person. Ahmedabad.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (f) => readFile(path.join(process.cwd(), "assets/og", f));

export default async function OgImage() {
  const [semibold, regular, mono, serif] = await Promise.all([
    font("Geist-SemiBold.ttf"),
    font("Geist-Regular.ttf"),
    font("GeistMono-Regular.ttf"),
    font("InstrumentSerif-Italic.woff"),
  ]);

  const ember = "#ff5b2e";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(255,91,46,0.30), transparent 45%), radial-gradient(circle at 100% 100%, rgba(255,91,46,0.14), transparent 40%), radial-gradient(rgba(255,255,255,0.10) 1.2px, transparent 1.2px)",
          backgroundSize: "100% 100%, 100% 100%, 26px 26px",
          color: "#fafafa",
          fontFamily: "Geist",
        }}
      >
        {/* top row: logo + status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: ember,
                color: "#050505",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Instrument Serif",
                fontSize: 40,
                paddingBottom: 4,
              }}
            >
              s
            </div>
            <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>Srijan Studio</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d4d4d4",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#7ee2a0" }} />
            Booking new projects · Ahmedabad
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 80, fontWeight: 600, letterSpacing: -3, lineHeight: 1.04 }}>
            Websites, products and AI,
          </div>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 80, fontWeight: 600, letterSpacing: -3, lineHeight: 1.12 }}>
            <span style={{ color: "#a3a3a3", marginRight: 24 }}>built by</span>
            <span style={{ fontFamily: "Instrument Serif", fontWeight: 400, letterSpacing: 0, color: ember, fontSize: 96 }}>
              one person.
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ display: "flex", gap: 14, color: "#d4d4d4" }}>
            {["Websites", "UI / UX", "AI agents", "AI video"].map((t) => (
              <div key={t} style={{ display: "flex", padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)" }}>
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontFamily: "Geist Mono", color: "#a3a3a3" }}>Live in 7 days →</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
        { name: "Instrument Serif", data: serif, weight: 400, style: "normal" },
      ],
    }
  );
}
