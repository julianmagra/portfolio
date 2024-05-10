import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import PublicRoutes from "./router/PublicRoutes";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Barra de navegación */}
      <Appbar />

      {/* Contenedor principal */}
      {/* Contenido de las rutas públicas */}
      <PublicRoutes />
    </div>
  );
};

export default App;

{
  /* Contenedor principal */
}
