/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm newsprint paper canvas + true ink. One accent: vermillion.
        paper: {
          DEFAULT: "#EFEDE6",
          100: "#F5F3ED",
          200: "#E7E4DA",
          300: "#DBD7CA",
        },
        ink: {
          DEFAULT: "#16130E",
          800: "#2A251D",
          600: "#4A443A",
          500: "#6B6459",
          400: "#8C857A",
        },
        vermillion: {
          DEFAULT: "#E23B1E",
          600: "#C22F14",
          100: "#F6D9D0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1240px",
      },
      borderRadius: {
        // One radius system: sharp editorial. 2px everywhere structural.
        editorial: "2px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
      },
    },
  },
  plugins: [],
};
