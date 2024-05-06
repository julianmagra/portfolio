import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import PublicRoutes from "./router/PublicRoutes";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Appbar />
      <div className=" max-w-screen-2xl bg-gray-200 mx-auto flex min-h-screen">
        <PublicRoutes />
      </div>
    </div>
  );
};

export default App;
