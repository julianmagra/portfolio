import { Link } from "react-router-dom";
import { SVG_ATTACH_PATH } from "../../assets/Attach";
import { SVG_GHUB_PATH } from "../../assets/Github";
import { CardProps } from "../layout/Project";

const ProjectCard: React.FC<CardProps> = ({
  title,
  techs,
  description,
  ghub,
  preview,
}) => {
  return (
    <div className="flex flex-col p-2 mt-10 mb-10 interTypo md:flex-row ">
      <div className="md:max-w-md p-4 ">
        <img
          className="rounded-2xl"
          src="../../../public/projectImage.jpg"
          alt="projectImage"
        />
      </div>
      <div className=" flex-col text-left p-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex flex-wrap mt-4">
          {techs.map((tech: string, i: number) => (
            <p
              key={i}
              className="border bg-sky-600 rounded-2xl shadow-md text-gray-900 dark:text-white pl-1 pr-1 mr-1"
            >
              {tech}
            </p>
          ))}
        </div>
        <p className="mt-4">{description}</p>
        <div className="flex flex-wrap mt-4">
          <Link
            to={ghub}
            className="flex border bg-gray-600 rounded-2xl shadow-md text-gray-900 dark:text-white p-3 mr-2"
          >
            <SVG_GHUB_PATH />
            Code
          </Link>
          <Link
            to={preview}
            className="flex border bg-gray-600 rounded-2xl shadow-md text-gray-900 dark:text-white p-3  ml-2"
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
