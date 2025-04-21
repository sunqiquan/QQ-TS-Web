import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Dropdown, Switch } from "antd";
import type { MenuProps } from "antd";
import styles from "@/components/NavHeader/index.module.less";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";
import storage from "@/utils/storage";

const NavHeader = () => {
  const { collapsed, updateCollapsed, userInfo } = useStore(
    useShallow((state) => ({
      collapsed: state.collapsed,
      updateCollapsed: state.updateCollapsed,
      userInfo: state.userInfo,
    }))
  );

  const breadList = [
    {
      title: "Home",
    },
    {
      title: "Workbench",
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "email",
      label: "email: " + userInfo.userEmail,
    },
    {
      key: "logout",
      label: "logout",
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "logout") {
      storage.remove("token");
      location.href = "/login?callback=" + encodeURIComponent(location.href);
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div
          onClick={() => {
            updateCollapsed();
          }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined style={{ marginRight: "10px" }} />
          ) : (
            <MenuFoldOutlined style={{ marginRight: "10px" }} />
          )}
        </div>
        <Breadcrumb items={breadList} />
      </div>
      <div>
        <Switch
          checkedChildren="Light"
          unCheckedChildren="Dark"
          style={{ marginRight: "10px" }}
        />
        <Dropdown menu={{ items, onClick }} trigger={["click"]}>
          <span className={styles.nickName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavHeader;
