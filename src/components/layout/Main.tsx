import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Main = () => (
  <section className="p-2 flex flex-col lg:flex-row mt-20">
    <div>
      <div className=" flex items-center mb-5">
        <img
          src="../images/yo.jpeg"
          alt=""
          className="rounded-full mr-4 shadow-lg shadow-blue-100"
        />

        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/julianmagra"}
          className="flex items-center py-1 px-5  rounded-xl  shadow-lg  border-b text-sm   text-green-800 bg-green-100 cursor-pointer  "
        >
          Available to work
        </Link>
      </div>
      <div className="text-left  lg:max-w-prose  ">
        {/*     */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
          Hey, I'm Julian
        </h1>
        <p className="text-left mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-300 [&>strong]:font-semibold dark:text-gray-300 ">
          +2 years of experience as a <strong> frontend developer</strong>. I'm
          passionate about learning and working on projects that can be
          beneficial to the world at large.
        </p>
        <p className="text-left mt-6 text-xl text-gray-800 dark:text-gray-300 ">
          See more and discover how much we can do together!
        </p>
      </div>

      <div className=" flex mt-6 ">
        <Link
          target="_blank"
          to={"https://www.instagram.com/julianmagra"}
          className="px-4 py-1 rounded-xl  shadow-md  border border-gray-300 mr-2 flex items-center"
        >
          <FaInstagram className="m-1" />
          Instagram
        </Link>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/julianmagra"}
          className="px-4 py-1 rounded-xl  shadow-md  border border-gray-300 mr-2 flex items-center"
        >
          <CiLinkedin className="m-1" />
          Linkedin
        </Link>
      </div>
    </div>
  </section>
);
export default Main;
