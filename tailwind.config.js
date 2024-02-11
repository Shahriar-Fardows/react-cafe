import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster Two', sans-serif",
        ptserif: "'PT Serif', serif;",
      },
      colors: {
        primaryColor1: "#16a085",
        primaryColor2: "#34495e",
      },
    },
  },
  plugins: [],
  presets: [keepPreset],
};
