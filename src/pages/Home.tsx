import { FC, ReactElement } from "react";

const Homepage: FC = (): ReactElement => {
  return (
    <div className="flex ">
      <h1>Julian Nicolas Magra</h1>
      <h3>Welcome to the home page!</h3>
      <h3>My name is Julian and we can do a lot of things together!</h3>
      <h3>Follow me to know more about me and my services.</h3>
      {/* Algun director de la atencion que guie a la persona al click que lo lleve hacia la nueva pagina */}
      <p>Resume/CV</p>
      <p>Carrousel abajo exponiendo las redes.</p>
    </div>
  );
};

export default Homepage;
