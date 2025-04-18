import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, App as AntdApp } from "antd";
import AntdComp from "@/utils/AntdComp";
import Router from "@/router";
import "@/App.css";

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ed6c00" } }}>
      <AntdApp>
        <AntdComp />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
