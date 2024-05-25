/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        buildingBg: `url('./public/constructingTowerOfPower.png')`,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // Define el tamaño de pantalla 2xl según sea necesario
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
