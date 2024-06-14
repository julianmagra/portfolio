import ProjectCard from "../Cards/ProjectCard";
import { FaCode } from "react-icons/fa";
export interface CardProps {
  title: string;
  techs: string[];
  description: string;
  ghub: string;
  preview: string;
}

const PROJECTS: CardProps[] = [
  {
    title: "SVGL - A beautiful library with SVG logos",
    techs: ["React JS", "Tailwind"],
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con React y Tailwind CSS.",
    ghub: "",
    preview: "",
  },
  {
    title: "SVGL - A beautiful library with SVG logos",
    techs: ["React JS", "Tailwind"],
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con React y Tailwind CSS.",
    ghub: "",
    preview: "",
  },
];

/* modify projects redirect links  */

const ProjectArea = () => (
  <section id="projects" className="mt-20 p-2">
    <div className="text-left">
      <h2 className="text-3xl font-semibold gap-x-3 text-black/80 dark:text-white flex items-center">
        <FaCode className="" />
        Project
      </h2>
    </div>
    {PROJECTS.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        techs={project.techs}
        description={project.description}
        ghub={project.ghub}
        preview={project.preview}
      />
    ))}
  </section>
);
export default ProjectArea;
