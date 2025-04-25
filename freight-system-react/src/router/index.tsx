import { Navigate } from "react-router-dom";
import Welcome from "@/views/welcome";
import Login from "@/views/login";
import UnAuthorize from "@/views/UnAuthorize";
import NotFound from "@/views/NotFound";
import Layout from "@/layout";
import Workbench from "@/views/workbench";
import UserList from "@/views/system/user/user-ahooks";
import Department from "@/views/system/dept";
import Menu from "@/views/system/menu";
import AuthLoader from "./AuthLoader";

const routes = [
  {
    id: "layout",
    element: <Layout />,
    loader: AuthLoader,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/workbench",
        element: <Workbench />,
      },
      {
        path: "/userlist",
        element: <UserList />,
      },
      {
        path: "/deptlist",
        element: <Department />,
      },
      {
        path: "/menulist",
        element: <Menu />,
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

export default routes;
