/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        buildingBg: `url('./public/constructingTowerOfPower.png')`,
      },
      screens: {
        "2xl": "1536px", // Define el tamaño de pantalla 2xl según sea necesario
      },
    },
  },
  plugins: [],
};
