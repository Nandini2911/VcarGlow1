import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C4D",     // Navy Blue
        secondary: "#1E3A8A",   // Royal Blue
        accent: "#9CA3AF",      // Soft Gray
        light: "#F8FAFC",       // Light Background
      },
    },
  },
  plugins: [],
};

export default config;