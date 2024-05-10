import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import WorkExperienceCard from "../components/Cards/WorkExperienceCard";
import "./styles.css";

const Homepage: FC = (): ReactElement => {
  return (
    <main className="flex  flex-col max-w-7xl mx-auto p-5">
      <section className="interTypo">
        <div className="">
          <h1 className="srcCodeTypo text-left "> Front end developer</h1>
        </div>
        <div className="text-left  ">
          <p>
            I'm Julian Magra, a frontend developer passionate about learning and
            working on projects that can be beneficial to the world at large.
          </p>
          <p>See more and discover we can do a lot together!</p>

          <img
            src="https://images.unsplash.com/photo-1715090156594-aaa3ed5900b9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" max-w-sm max-h-sm"
          />
        </div>

        <div className="flex  max-w-7xl  p-2">
          <Link
            target="_blank"
            to={"https://github.com/julianmagra"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            to={"https://gitlab.com/julianmagra"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            Gitlab
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/julianmagra"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            to={"https://twitter.com/JulianNicolas26"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            X
          </Link>
          <Link
            target="_blank"
            to={"https://www.instagram.com/julianmagra"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            to={"https://www.youtube.com/@julianmagra"}
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            Youtube
          </Link>
          <Link
            target="_blank"
            to={
              "https://stackoverflow.com/users/24884113/julian-nicolas-magra?tab=profile"
            }
            className="rounded-md  shadow-md  border-b border-b-gray-300 mx-auto "
          >
            StackOverflow
          </Link>
          {/*   Codepen Dribbble Steam Unsplash Daily.dev Producthunt Stackoverflow
          Codewars */}
        </div>
        {/* <p>Resume/CV</p>
        <p>Carrousel abajo exponiendo las redes.</p> */}
      </section>
      <section className="flex flex-col  p-10 interTypo">
        <div>
          <h3 className="srcCodeTypo">Work experience</h3>
        </div>
        <div className="">
          <WorkExperienceCard />
        </div>
      </section>
      <section className="interTypo flex">
        <div>
          <p>Built with: react - tailwind - 'vercel'</p>
        </div>
        <div>
          <p>Copyright © Julian Magra 2024 All rights Reserved</p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
