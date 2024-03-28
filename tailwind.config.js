/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0,0%,9.8%)",
        card: "hsl(0,0%,100%)",
        danger: "hsl(4.93deg,60.83%,47.06%)",

        text: {
          secondary: "hsl(0,0%,37%)",
        },
        gray: {
          100: "hsl(0,1%,76%)",
        },
      },
    },
  },
  plugins: [],
};
