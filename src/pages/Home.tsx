import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ExperienceTimeline } from "../components/Icons/ExperienceTimeline";
import ProjectArea from "../components/layout/Project";
import AboutMe from "../components/layout/About";
import Footer from "../components/layout/Footer";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi"; //English/spanish option
//Check folder structure
const Homepage: FC = (): ReactElement => {
  return (
    <main className="flex  flex-col max-w-5xl mx-auto p-5  ">
      <section className="p-2  flex flex-col lg:flex-row mt-10">
        <div>
          <div className=" flex items-center mb-5">
            <img
              src="../../public/yo.jpeg"
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
              +2 years of experience as a <strong> frontend developer</strong>.
              I'm passionate about learning and working on projects that can be
              beneficial to the world at large.
            </p>
            <p className="text-left mt-6 text-xl text-gray-800 dark:text-gray-300 ">
              See more and discover we can do a lot together!
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
        <div className="mt-10 xl:mt-4 lg:mt-4">
          <img
            src="../../public/modul-monitor-with-programming-code-on-screen.png"
            alt=""
            className=" xl:w-full lg:w-full lg:h-full mx-auto"
          />
        </div>
        {/* <p>Resume/CV</p>
        <p>Carrousel abajo exponiendo las redes.</p> */}
      </section>
      <section
        id="experience"
        className="pt-10 p-2 flex flex-col lg:flex-row mt-10 flex-wrap
        "
      >
        <div className="text-left mb-20">
          <h2 className="mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white flex items-center">
            <PiBagFill />
            Work experience
          </h2>
        </div>
        <ExperienceTimeline />
        {/*      <div className="mt-10">
          <WorkExperienceCard /> esto deberia estar dentro del layout de workExperienceArea, asi como el timeline
        </div> */}
      </section>
      <section id="projects" className="pt-10">
        <ProjectArea />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section className="mt-40 " id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
