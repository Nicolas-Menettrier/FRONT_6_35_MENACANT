import React, { useState } from "react";
import { Tabs } from "antd";

import { useHistory } from "react-router";
import SiderPan from "./SiderPan";
import { SiderHomeProps } from "../../types/types.6_35";

const SiderHome: React.FC<SiderHomeProps> = ({ active }: SiderHomeProps) => {
  const [key, setActive] = useState(active);
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "start",
        height: "100%",
        width: "100%",
        paddingTop: "8px"
      }}
    >
      <Tabs
        defaultActiveKey={key}
        tabPosition="left"
        onChange={(e): void => {
          setActive(e as "Home" | "Notifications" | "Profile");
        }}
        onTabClick={(tab: any): void => {
          let path = String(tab).toLowerCase();

          if (path === "home") {
            path = "homePage";
          }
          history.push(`/${path}`);
        }}
      >
        <Tabs.TabPane
          tab={<SiderPan icon="home" text="Home" active={key} />}
          key="Home"
        />
        <Tabs.TabPane
          tab={<SiderPan icon="bell" text="Notifications" active={key} />}
          key="Notifications"
        />
        <Tabs.TabPane
          tab={<SiderPan icon="user" text="Profile" active={key} />}
          key="Profile"
        />
      </Tabs>
    </div>
  );
};

export default SiderHome;
