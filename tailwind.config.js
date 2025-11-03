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
        primary: "#252525",
        secondary: "#2867be",
        orangePrimary: "#bf6e15",
        orangeSecondary: "#eca457",
        thirdy: "#eee8e8",
      },
      fontFamily: {
        title: "var(--popBlack)",
        body: "var(--popReg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
