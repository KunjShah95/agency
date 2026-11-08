const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Every colour is a CSS variable (see globals.css), so light and dark
      // themes share the exact same classes. "white" means "foreground" and
      // "night" means "background"; the neutral scale flips with the theme.
      colors: {
        white: v("--c-fg"),
        night: { DEFAULT: v("--c-bg"), 900: v("--c-bg-900"), 800: v("--c-bg-800"), 700: v("--c-bg-700") },
        neutral: Object.fromEntries([100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => [n, v(`--n-${n}`)])),
        ember: { DEFAULT: v("--c-ember"), 400: v("--c-ember-400"), 600: v("--c-ember-600") },
        live: v("--c-live"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1200px" },
      // One motion curve for the whole site: weighted, decelerating.
      transitionTimingFunction: { DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)" },
      transitionDuration: { DEFAULT: "300ms" },
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
