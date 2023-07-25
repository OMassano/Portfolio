/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { darkBG: "#1d2434", darkNav: "#141924", textColor: "#5d73a5" },
    },
    fontFamily: {
      bitter: ["Bitter", "serif"],
      "russo-one": ["Russo One", "sans-serif"],
    },
  },
  plugins: [],
};
