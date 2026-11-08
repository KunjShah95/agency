/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // True, slightly cool black. One accent: ember.
        night: { DEFAULT: "#050505", 900: "#0a0a0a", 800: "#111111", 700: "#171717" },
        ember: { DEFAULT: "#ff5b2e", 400: "#ff7a52", 600: "#e5431a", glow: "rgba(255,91,46,0.35)" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1200px" },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        spin: { to: { transform: "rotate(360deg)" } },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%, -40%) scale(1)" },
        },
        shimmer: { to: { backgroundPosition: "-200% 0" } },
        blink: { "50%": { opacity: 0 } },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        spotlight: "spotlight 2s ease 0.6s 1 forwards",
        shimmer: "shimmer 2.4s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
