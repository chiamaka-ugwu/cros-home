/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Serif", "sans-serif"],
      },
      colors: {
        primary: "#0a0893",
        secondary: "#A09C9C",
        // accent: "#ffc107",
      },
    },
  },
  plugins: [],
};
