/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c",
        darkText: "#e2e8f0",
        lightBackground: "#ffffff",
        lightText: "#1a202c",
      },
    },
  },
  plugins: [require("daisyui")],
};
