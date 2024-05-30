import { Link } from "react-router-dom";
import { CardProps } from "../layout/Project";
import { SVG_ATTACH_PATH, SVG_GHUB_PATH } from "../../assets/svg/SvgIcons";

const ProjectCard: React.FC<CardProps> = ({
  title,
  techs,
  description,
  ghub,
  preview,
}) => {
  return (
    <div className="flex flex-col p-2 mt-10 mb-10 md:flex-row ">
      <div className="md:max-w-md p-4 ">
        {/* VER QUE HACEN:  object-cover object-top transition duration-500 scale-110 group-hover:scale-105*/}
        {/* CUSTOMIZAR IMAGEN */}
        <img
          className="rounded-3xl object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
          src="../../../public/projectImage.jpg"
          alt="projectImage"
        />
      </div>
      <div className=" flex-col text-left p-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex flex-row gap-x-2">
          {techs.map((tech: string, i: number) => (
            <p
              key={i}
              className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 "
            >
              {tech}
            </p>
          ))}
        </div>
        <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex justify-start mt-4 gap-x-1">
          {/*
          Ver que hace cada cosa y hacer por mi mismo:
          focus-visible:ring-yellow-500/80  hover:bg-gray-800 hover:border-gray-900 group max-w-fit  hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black */}
          <Link
            to={ghub}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-md text-white transition bg-gray-800 border border-gray-600"
          >
            <SVG_GHUB_PATH />
            Code
          </Link>
          <Link
            to={preview}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-md text-white transition bg-gray-800 border border-gray-600"
          >
            <SVG_ATTACH_PATH />
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
// lg:max-w-prose
