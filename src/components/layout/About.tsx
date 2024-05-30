import { BsPersonCheckFill } from "react-icons/bs";
const AboutMe = () => {
  return (
    <section id="aboutme" className=" p-2 ">
      <h2 className="text-left flex items-center text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ">
        <BsPersonCheckFill />
        About me
      </h2>
      <div className="flex flex-col-reverse items-center md:flex-row   mt-10 p-2 ">
        <div className=" [&>p>strong]:text-yellow-300 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty ">
          <p className="py-4">
            Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la
            programación con un Amstrad, tenía 10 años. Actualmente estoy&nbsp;
            <strong>liderando equipos de desarrollo en multinacionales</strong>.
          </p>
          <p className="py-4">
            Algunos de mis éxitos incluyen&nbsp;
            <strong>
              colaborar con Mozilla para el desarrollo de las primeras apps en
              su sistema FirefoxOS
            </strong>
            . Aunque hoy está desaparecido fue un gran avance en el mundo del
            desarrollo web.
          </p>
          <p className="py-4">
            Como creador de contenido,&nbsp;
            <strong>
              cuento con el canal de habla hispana más visto del mundo en la
              categoría de Software & Game Development en Twitch
            </strong>
            . Mi objetivo es mejorar la empleabilidad de la comunidad hispana y
            el acceso a contenido de calidad.
          </p>
        </div>
        <div className=" px-10  md:block min-w-max">
          <img className="rounded-xl" src="../../../public/me.jpg" alt="Me" />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
