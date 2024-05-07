import { Navigate, Outlet, useLocation } from "react-router-dom";
import { paths } from "../constants/paths";

const PublicRoutes = () => {
  const currentPath = useLocation();

  currentPath.pathname === "/" ?? (
    <Navigate to={paths.navigation.HOME} replace={true} />
  );

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoutes;
