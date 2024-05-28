import { createBrowserRouter } from "react-router-dom";
import { paths } from "../constants/paths";
import App from "../App";
import Contact from "../pages/Skills";
import Homepage from "../pages/Home";
import ErrorPage from "../common/components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Homepage />,
        path: paths.navigation.HOME,
      },
      {
        path: paths.navigation.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
/* 
export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Homepage />,
        path: paths.navigation.HOME,
      },
      {
        path: paths.navigation.CONTACT,
        element: <Contact />,
      },
    ],
  },
]); */
