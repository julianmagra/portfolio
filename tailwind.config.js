/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        buildingBg: `url('./public/constructingTowerOfPower.png')`,
      },
    },
  },
  plugins: [],
};
