/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#1D3068",
        secondaryBlue: "#737C98",
        greyColor: "#A9AABC",
        lightGrey: "#F8F8FF",
      },
    },
  },
  plugins: [],
};
