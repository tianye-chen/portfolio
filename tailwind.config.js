/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text": "#2f4d33",
        "light-bg": "#f0fff2",
        "light-primary": "#3dffb8",
        "light-secondary": "#bdffe6",
        "light-accent": "#9aff57",
        "dark-text": "#ffffff",
        "dark-bg": "#0a3211",
        "dark-primary": "#007537",
        "dark-secondary": "#024b2d",
        "dark-accent": "#41a300",
        "mint": "#00FFA7"
      }
    },
  },
  plugins: [],
}

