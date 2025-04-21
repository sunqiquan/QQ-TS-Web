import React, { useEffect } from "react";
import { Layout, Watermark } from "antd";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import SideMenu from "@/components/SideMenu";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import api from "@/api";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";

const { Content, Sider } = Layout;

const App: React.FC = () => {
  useEffect(() => {
    getUserInfo();
  }, []);

  const { collapsed, updateUserInfo } = useStore(
    useShallow((state) => ({
      collapsed: state.collapsed,
      updateUserInfo: state.updateUserInfo,
    }))
  );

  const getUserInfo = async () => {
    const user = await api.getUserInfo();
    updateUserInfo(user);
  };

  return (
    <Watermark content="Freight System">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsed={collapsed}>
          <SideMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
