/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/*.astro",
    "./src/**/*.tsx",
    "./src/**/*.ts"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f9f8",
          100: "#f1f3f1",
          200: "#e3e7e3",
          300: "#d5dbd5",
          400: "#c7cfc7",
          500: "#b9c3b9",
          600: "#2C3930",
          700: "#222b24",
          800: "#171d18",
          900: "#0b0e0c",
        },
        secondary: {
          50: "#f5f6f5",
          100: "#ebedec",
          200: "#d7dbd9",
          300: "#c3c9c6",
          400: "#afb7b3",
          500: "#9ba5a0",
          600: "#7D8D86",
          700: "#5e6a65",
          800: "#3f4743",
          900: "#1f2322",
        },
        accent: {
          50: "#f8f6f2",
          100: "#f1ede5",
          200: "#e3dbcb",
          300: "#d5c9b1",
          400: "#c7b797",
          500: "#b9a57d",
          600: "#BCA88D",
          700: "#8e7f6a",
          800: "#5f5547",
          900: "#2f2a24",
        },
        background: {
          50: "#fdfcfb",
          100: "#fbfaf7",
          200: "#f7f6ef",
          300: "#f3f2e7",
          400: "#efeedf",
          500: "#ebead7",
          600: "#F1F0E4",
          700: "#b4b3aa",
          800: "#78766f",
          900: "#3c3b37",
        },
      },
    },
  },
  plugins: [],
};
