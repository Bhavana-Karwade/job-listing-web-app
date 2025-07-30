/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        background: '#e8f1fb',
        card: '#dbeafe',
        text: '#1e3a8a',
      },
    },
  },
  
  plugins: [],
}

