/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#f4f2f0',
        'secondary': "#555555",
        'selected-bg': "#848d5e"
      },
    },
  },
  plugins: [],
}