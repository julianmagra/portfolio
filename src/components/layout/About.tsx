const AboutMe = () => {
  return (
    <div className="p2">
      <h2 className="text-left srcCodeTypo">About me</h2>
      <div className="flex flex-col-reverse md:flex-row  mt-10 p-2">
        <div className="flex flex-col max-w-2xl p2 justify-evenly mr-6 ">
          <p className="pt-4 ">
            Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la
            programación con un Amstrad, tenía 10 años. Actualmente estoy
            liderando equipos de desarrollo en multinacionales.
          </p>
          <p className="pt-4 pb-4">
            Algunos de mis éxitos incluyen colaborar con Mozilla para el
            desarrollo de las primeras apps en su sistema FirefoxOS. Aunque hoy
            está desaparecido fue un gran avance en el mundo del desarrollo web.
          </p>
          <p className="pt-4 pb-4">
            Como creador de contenido, cuento con el canal de habla hispana más
            visto del mundo en la categoría de Software & Game Development en
            Twitch. Mi objetivo es mejorar la empleabilidad de la comunidad
            hispana y el acceso a contenido de calidad.
          </p>
        </div>
        <div className="p-2 justify-center flex md:block ">
          <img
            className="flex min-w-max rounded-xl"
            src="../../../public/me.jpg"
            alt="Me"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
