import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark, Hoxton-inspired palette. Swap these to rebrand.
        bg: "#111111", // page background (near-black)
        surface: "#191919", // cards / panels
        surface2: "#333333", // image placeholders / lighter panels
        line: "rgba(255,255,255,0.12)", // hairline borders
        accent: "#D8A56D", // caramel/tan — buttons & highlights
        accentHover: "#c8945b",
      },
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
