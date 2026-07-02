/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0c",
        "ink-2": "#080808",
        lime: "#d4f938",
        soft: "#eefe98",
        brandgray: "#898989",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Montserrat"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
