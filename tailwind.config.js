import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sky: "#89dceb",
        maroon: "#eba0ac",
        mauve: "#cba6f7",
        pink: "#f5c2e7",
        green: "#a6e3a1"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
