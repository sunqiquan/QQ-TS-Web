import { Navigate, useRoutes } from "react-router-dom";
import Welcome from "@/views/Welcome";
import Login from "@/views/login";
import UnAuthorize from "@/views/UnAuthorize";
import NotFound from "@/views/NotFound";

const router = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/403",
    element: <UnAuthorize />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => useRoutes(router);

export default Router;
