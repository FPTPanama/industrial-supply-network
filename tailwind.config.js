/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003889',
        secondary: '#2867be',
        'red-primary': '#8C0018',
        'red-secondary': '#c91130',
        thirdy: '#eee8e8'
      },
      fontFamily: {
        title: 'var(--popBlack)',
        body: 'var(--popReg)',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

