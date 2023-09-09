/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '420px',
      'sm': '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1260px',
      '2xl': '1440px',
      '3xl': '1920px',
      'collapse-header': '680px',
      'collapse-hero': '1260px',
    }
  },
  plugins: [],
}