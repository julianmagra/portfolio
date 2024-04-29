import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import PublicRoutes from "./router/PublicRoutes";

const App = () => {
  return (
    <div className="bg">
      <Appbar />
      <PublicRoutes />
    </div>
  );
};

export default App;
