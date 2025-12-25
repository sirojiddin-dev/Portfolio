import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // основной текст
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],

        // моно (код, цифры)
        mono: ["var(--font-geist-mono)", "monospace"],

        // кастомный шрифт
        bbh: ["var(--font-bbh-sans-bartle)"],

        bebas: ["var(--font-bebas-neue)"],
      },
    },
  },
  plugins: [],
};

export default config;
