/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FEB86F",
        violet: "#9194CE",
        red: "#F492A0",
        blue: "#3E479B",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^border-/,
    },
  ],
};
