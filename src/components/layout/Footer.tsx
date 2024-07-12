import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.VITE_PUBLIC_URL}/pdf/JulianMagra.resume.pdf`;
    link.download = "JulianMagra.resume.pdf";
    link.click();
  };
  return (
    <footer
      className="opacity-80 m-4 mt-16 w-full mx-auto lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center  "
      id="contact"
    >
      <div className="rounded-lg w-full mx-auto md:flex md:items-center md:justify-between py-4 dark:text-blue-200">
        <p className="text-sm text-left md:text-center">
          Copyright © Julian Magra 2024 All rights Reserved
        </p>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <button
            className="flex items-center text-md mr-8 hover:underline me-4 md:me-6"
            onClick={handleDownload}
          >
            <IoMdDownload className="m-1" />
            Resume
          </button>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/julianmagra"}
            className="text-md hover:underline me-4 md:me-6"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
