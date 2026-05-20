/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#08111f",
        surface: "#101b2f",
        surfaceAlt: "#16243d",
        accent: "#5eead4",
        accentSoft: "#99f6e4",
        text: "#e2e8f0",
        muted: "#94a3b8",
        line: "rgba(148, 163, 184, 0.18)",
      },
      boxShadow: {
        glow: "0 24px 70px rgba(8, 17, 31, 0.45)",
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
