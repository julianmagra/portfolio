import { PiBagFill } from "react-icons/pi";
import { ExperienceTimeline } from "../Icons/ExperienceTimeline";

/* 
const EXPERIENCIE = [
  {
    date: "Actualmente...",
    title: "Creador de Contenido",
    company: "Twitch",
    description:
      "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
    link: "https://twitch.tv/midudev",
  },
  {
    date: "Septiembre 2022",
    title: "Principal Frontend Engineer",
    company: "Adevinta Spain",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
  },
] */
const Experience = () => (
  <section
    id="experience"
    className=" p-2 flex flex-col lg:flex-row mt-20 flex-wrap"
  >
    <div className="text-left mb-20 flex-wrap">
      <h2 className="mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white flex items-center">
        <PiBagFill />
        Work experience
      </h2>
    </div>
    <ExperienceTimeline />
  </section>
);
export default Experience;
