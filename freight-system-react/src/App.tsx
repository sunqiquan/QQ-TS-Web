import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, App as AntdApp } from "antd";
import AntdComp from "@/utils/AntdComp";
import routs from "@/router";
import "@/App.less";

const App = () => {
  const Router = createBrowserRouter(routs);
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ed6c00" } }}>
      <AntdApp>
        <AntdComp />
        <RouterProvider router={Router} />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
