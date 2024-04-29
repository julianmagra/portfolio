import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";
/* 
const navLinks = [
  { title: "Home", path: "/", icon: "" },
  { title: "About", path: "/about", icon: "" },
  { title: "Services", path: "/services", icon: "" },
  { title: "Projects", path: "/projects", icon: "" },
  { title: "Contact", path: "/contact", icon: "" },
]; */

const Appbar: FC = (): ReactElement => {
  return (
    <div className="bg ">
      <nav className="flex items-center justify-center border-b border-gray-400 text-gray-600  ">
        <div className="p-4 mr-60">
          <h1 className="text-2xl font-semibold">Logo</h1>
        </div>
        <div className="flex ml-64  ">
          <Link
            to={paths.navigation.HOME}
            className=" py-2 px-4 hover:bg-gray-700"
          >
            Home
          </Link>
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
      </nav>
    </div>
  );
};

export default Appbar;
