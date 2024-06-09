import { Flowbite } from "flowbite-react";
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import PublicRoutes from "./router/PublicRoutes";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white  dark:bg-blue-950 ">
      {/* cambiar hoover en appbar */}
      <Flowbite>
        <Appbar />

        {/* Contenedor principal */}
        {/* Contenido de las rutas públicas */}
        <PublicRoutes />
      </Flowbite>
    </div>
  );
};

export default App;
