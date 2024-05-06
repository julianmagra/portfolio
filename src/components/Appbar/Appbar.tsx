import { FC, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";
import { SVG_MOON_PATH, SVG_SUN_PATH } from "../../assets/Darkmode";

/* 
const navLinks = [
  { title: "Home", path: "/", icon: "" },
  { title: "About", path: "/about", icon: "" },
  { title: "Services", path: "/services", icon: "" },
  { title: "Projects", path: "/projects", icon: "" },
  { title: "Contact", path: "/contact", icon: "" },
]; */

const Appbar: FC = (): ReactElement => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  return (
    <div className="">
      {/*padings: py-2 px-4 */}
      <nav className="flex items-center content-center   justify-around border-b border-gray-400 text-gray-600 ">
        <div className=" py-2 px-4 hover:bg-gray-700">
          <Link to={paths.navigation.HOME} className="text-2xl">
            Julian Magra
          </Link>
        </div>
        <div className="flex">
          <Link
            to={paths.navigation.ABOUT}
            className=" py-2 px-4 hover:bg-gray-700"
          >
            Social
          </Link>
          <Link
            to={paths.navigation.PROJECTS}
            className=" py-2 px-4 hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            to={paths.navigation.CONTACT}
            className=" py-2 px-4 hover:bg-gray-700"
          >
            Skills
          </Link>
        </div>
        {/*  TAREA FUTURA: REDUCIR A UN SOLO BOTON QUE VARIE LOS SVG DEPENDIENDO DEL
        ESTADO. */}
        <div className="flex">
          {(!isDarkModeOn && (
            <button
              onClick={() => {
                setIsDarkModeOn(!isDarkModeOn);
              }}
            >
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
          )) ||
            (isDarkModeOn && (
              <button
                onClick={() => {
                  setIsDarkModeOn(!isDarkModeOn);
                }}
              >
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
            ))}
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
