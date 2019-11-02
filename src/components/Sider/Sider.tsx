import React, { useState } from "react";
import { Tabs } from "antd";

import SiderPan from "./SiderPan";

const SiderHome: React.FC = () => {
  const [active, setActive] = useState("Home");

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
        defaultActiveKey={active}
        tabPosition="left"
        onChange={(key): void => setActive(key)}
      >
        <Tabs.TabPane
          tab={<SiderPan icon="home" text="Home" active={active} />}
          key="Home"
        />
        <Tabs.TabPane
          tab={<SiderPan icon="bell" text="Notifications" active={active} />}
          key="Notifications"
        />
        <Tabs.TabPane
          tab={<SiderPan icon="user" text="Profile" active={active} />}
          key="Profile"
        />
      </Tabs>
    </div>
  );
};

export default SiderHome;
