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
        green: "#a6e3a1",
        yellow: "#f9e2af",
        peach: "#fab387",
        sapphire: "#74c7ec",
        blue: "#89b4fa",
        surface2: "#585b70",
        surface1: "#45475a",
        surface: "#313244",
        textPrimary: "#cdd6f4",
        subText: "#bac2de",
        navBG: "#06080a",
        base: "#1e1e2e"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
