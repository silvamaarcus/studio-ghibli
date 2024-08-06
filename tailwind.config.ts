import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      img_bg_hero: "url(../assets/background.png)",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-family-primary)", "sans-serif"],
        secondary: ["var(--font-family-secondary)", "sans-serif"],
        display: ["var(--font-family-display)", "sans-serif"]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
