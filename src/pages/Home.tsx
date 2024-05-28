import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ExperienceTimeline } from "../components/Icons/ExperienceTimeline";
import ProjectArea from "../components/layout/Project";
import AboutMe from "../components/layout/About";
import Footer from "../components/layout/Footer";
//English/spanish option
//Check folder structure
const Homepage: FC = (): ReactElement => {
  return (
    <main className="flex  flex-col max-w-5xl mx-auto p-5 text-gray-700 ">
      <section className="p-2 interTypo flex flex-col lg:flex-row mt-10 ">
        <div className="">
          <div className="text-left  lg:max-w-prose  ">
            <h1 className="srcCodeTypo text-4xl sm:text-3xl md:text-2xl lg:text-xl xl:text-lg font-bold ">
              Front end developer
            </h1>
            <p className="text-left  mt-10 pl-4 pt-4 ">
              I'm Julian Magra, + 2 years of experience as a frontend developer.
              I'm passionate about learning and working on projects that can be
              beneficial to the world at large.
            </p>
            <p className="text-left mt-2 pl-6 pt-4 ">
              See more and discover we can do a lot together!
            </p>
          </div>

          <div className=" flex flex-wrap mt-6 pl-4">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/julianmagra"}
              className="p-2 bg-slate-200 mx-1 rounded-md  shadow-md  border-b border-b-gray-300  "
            >
              Linkedin
            </Link>

            <Link
              target="_blank"
              to={"https://www.instagram.com/julianmagra"}
              className="p-2 bg-slate-200 mx-1 rounded-md  shadow-md  border-b border-b-gray-300  "
            >
              Instagram
            </Link>

            {/*   Codepen Dribbble Steam Unsplash Daily.dev Producthunt Stackoverflow
          Codewars */}
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
        className="pt-10 p-2 interTypo flex flex-col lg:flex-row mt-10 flex-wrap"
      >
        <div className="text-left mb-20">
          <h2 className="srcCodeTypo">Work experience</h2>
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
