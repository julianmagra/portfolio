import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import WorkExperienceCard from "../components/Cards/WorkExperienceCard";

const Homepage: FC = (): ReactElement => {
  return (
    <main className="flex items-center justify-center content-center flex-wrap flex-col flex-grow-0">
      <section className="bg-orange-100 flex  flex-col">
        <div>
          <h1> Front end developer</h1>
        </div>
        <div>
          <p>
            I'm Julian Magra, a frontend developer passionate about learning and
            working on projects that can be beneficial to the world at large.
          </p>
        </div>
        <p>See more and discover we can do a lot together!</p>

        <div>
          <Link target="_blank" to={"https://github.com/julianmagra"}>
            GitHub
          </Link>
          <Link target="_blank" to={"https://gitlab.com/julianmagra"}>
            Gitlab
          </Link>
          <Link target="_blank" to={"https://www.linkedin.com/in/julianmagra/"}>
            Linkedin
          </Link>
          <Link target="_blank" to={"https://twitter.com/JulianNicolas26"}>
            X
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/julianmagra/"}>
            Instagram
          </Link>
          <Link target="_blank" to={"https://www.youtube.com/@julianmagra"}>
            Youtube
          </Link>
          <Link
            target="_blank"
            to={
              "https://stackoverflow.com/users/24884113/julian-nicolas-magra?tab=profile"
            }
          >
            StackOverflow
          </Link>
          {/*   Codepen Dribbble Steam Unsplash Daily.dev Producthunt Stackoverflow
          Codewars */}
        </div>
        {/* <p>Resume/CV</p>
        <p>Carrousel abajo exponiendo las redes.</p> */}
      </section>
      <section className="flex flex-col  mt-3 mb-3  ">
        <div>
          <h3>Work experience</h3>
        </div>
        <div className="">
          <WorkExperienceCard />
        </div>
      </section>
      <section className=" bg-yellow-300 flex">
        <div>
          <p>built with: react - tailwind - 'vercel'</p>
        </div>
        <div>
          <p>Copyright © Julian Magra 2024 All rights Reserved</p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
