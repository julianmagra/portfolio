import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import PublicRoutes from "./router/PublicRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      {/* Barra de navegación */}
      <Appbar />

      {/* Contenedor principal */}
      <div className=" container mx-auto flex-grow bg-gray-200 p-4 ">
        {/* Contenido de las rutas públicas */}
        <PublicRoutes />
      </div>
    </div>
  );
};

export default App;

{
  /* Contenedor principal */
}
