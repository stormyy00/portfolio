/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        web: {
          black: "#000000",
          white: "#ffffff",
          theme: "#5272FF",
          cyan: "#20BF55",
          oldcyan: "#00FFFF",
        },
        tech: {
          postman: "#ed7547",
          openai: "#0BA37F",
          tailwind: "#53b5d1",
          react: "#82d8f8",
          javascript: "#edde67",
          typescript: "#4476c2",
          node: "#7aa568",
          mongo: "#429255",
          firebase: "#f2aa3e",
          python: "#436f9d",
          figma: "#985df5",
          cypress: "#526870",
          git: "#e15a39",
          cpp: "#5E97D0",
          prisma: "#0C344B",
        },
      },
    },
  },
  plugins: [],
};
