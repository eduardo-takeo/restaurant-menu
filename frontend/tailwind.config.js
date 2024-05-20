/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        800: "50rem",
      },
      colors: {
        primary: "#F2B64E",
        gray: {
          100: "#F3F1F0",
          700: "#717171",
        },
      },
    },
  },
  plugins: [],
};
