/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.js"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'black-main': '#24292F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

