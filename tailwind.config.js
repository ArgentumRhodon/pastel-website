/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPage: "url('./src/imgs/mainPage.png')",
        devPage: "url('./src/imgs/devPage.png')",
      },
      screens: {
        "5xl": "2150px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
