import ProjectCard from "../Cards/ProjectCard";

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
    ghub: "https://github.com/pheralb/svgl",
    preview: "https://svgl.app/",
  },
  {
    title: "SVGL - A beautiful library with SVG logos",
    techs: ["React JS", "Tailwind"],
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con React y Tailwind CSS.",
    ghub: "https://github.com/pheralb/svgl",
    preview: "https://svgl.app/",
  },
];

const ProjectArea = () => (
  <div>
    <div className="text-left">
      <h2 className="srcCodeTypo">Project</h2>
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
  </div>
);
export default ProjectArea;
