import { Menu } from "antd";
import {
  DesktopOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";

const SideMenu = () => {
  const navigate = useNavigate();
  const collapsed = useStore(useShallow((state) => state.collapsed));

  const items = [
    {
      key: "workbench",
      icon: <DesktopOutlined />,
      label: "Workbench",
      onClick: () => {
        navigate("/workbench");
      },
    },
    {
      key: "system",
      icon: <SettingOutlined />,
      label: "System Manage",
      children: [
        {
          key: "user",
          label: "User Manage",
          icon: <UserOutlined />,
          onClick: () => {
            navigate("/userlist");
          },
        },
        {
          key: "dept",
          label: "Dept Manage",
          icon: <ProfileOutlined />,
          onClick: () => {
            navigate("/deptlist");
          },
        },
        {
          key: "menu",
          label: "Menu Manage",
          icon: <MenuOutlined />,
          onClick: () => {
            navigate("/menulist");
          },
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className={styles.logo}
        onClick={() => {
          navigate("/welcome");
        }}
      >
        <img src="/imgs/logo.png" />
        {collapsed ? " " : <span>Freight System</span>}
      </div>
      <Menu
        defaultSelectedKeys={["workbench"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default SideMenu;
