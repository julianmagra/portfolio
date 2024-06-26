import { FC, ReactElement, useState } from "react";
import {
  SVG_BAR_BUTTON,
  SVG_MOON_PATH,
  SVG_SUN_PATH,
} from "../../assets/svg/SvgIcons";

const Appbar: FC = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="fixed  flex justify-center w-full  mt-2">
      <nav className="px-3 text-sm font-medium rounded-full text-gray-500 dark:text-gray-200  shadow-lg  shadow-gray-300 bg-white bg-opacity-80">
        <div className="flex mx-auto justify-between max-w-7xl items-center pl-5 pr-5">
          <div className="hidden lg:flex">
            <a
              href="#experience"
              className=" py-2 px-4 hover:text-yellow-300 dark:hover:text-yellow-100 "
            >
              Experience
            </a>
            <a
              href="#projects"
              className=" py-2 px-4 hover:text-yellow-300 dark:hover:text-yellow-100"
            >
              Projects
            </a>
            <a
              href="#aboutme"
              className=" py-2 px-4 hover:text-yellow-300 dark:hover:text-yellow-100"
            >
              About me
            </a>

            <a
              href="#contact"
              className=" py-2 px-4 hover:text-yellow-300 dark:hover:text-yellow-100 "
            >
              Contact
            </a>
          </div>

          {/*  TAREA FUTURA: REDUCIR A UN SOLO BOTON QUE VARIE LOS SVG DEPENDIENDO DEL
        ESTADO. */}
          <div className="flex">
            {(!isDarkMode && (
              <button onClick={toggleDarkMode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {SVG_SUN_PATH}
                </svg>
              </button>
            )) ||
              (isDarkMode && (
                <button onClick={toggleDarkMode}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {SVG_MOON_PATH}
                  </svg>
                </button>
              ))}
            <button className=" flex p-4 lg:hidden ">{SVG_BAR_BUTTON}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
