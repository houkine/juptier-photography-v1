import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn_homeImg: {
          '0%': { opacity: '0.1' },
          '15%': { opacity: '0.6' },
          '85%': { opacity: '0.6' },
          '100%': { opacity: '0.1' },
        },
        fadeIn_homeText: {
          '0%': { opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn_homeButton: {
          '0%': { opacity: '0' },
          '30%': { opacity: '0.6' },
          '85%': { opacity: '0.6' },
          '100%': { opacity: '0' },
        },

        fadeIn_aboutContent: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn_homeImg: 'fadeIn_homeImg 10s ease-in-out',
        fadeIn_homeText: 'fadeIn_homeText 10s ease-in-out',
        fadeIn_homeButton: 'fadeIn_homeButton 10s ease-in-out',

        fadeIn_aboutContent: 'fadeIn_aboutContent 3s linear',
        timeline: 'scroll: scroll(root)'
      },
    },
  },
  plugins: [],
};
export default config;
