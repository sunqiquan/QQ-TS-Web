import { Navigate, useRoutes } from "react-router-dom";
import Welcome from "@/views/welcome";
import Login from "@/views/login";
import UnAuthorize from "@/views/UnAuthorize";
import NotFound from "@/views/NotFound";
import Layout from "@/layout";
import Workbench from "@/views/workbench";

const router = [
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/workbench",
        element: <Workbench />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/welcome" />,
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
