/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPage: "url('/src/imgs/mainPage.png')",
      },
    },
  },
  plugins: [],
};
