import React from "react";
import { Icon } from "antd";
import { SiderPanProps } from "../../types/types.6_35";

const SiderPan: React.FC<SiderPanProps> = ({
  icon,
  text,
  active
}: SiderPanProps) => (
  <div
    className="div-home-page"
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      width: "235px"
    }}
  >
    {active === text ? (
      <Icon
        type={icon}
        style={{ color: "#1da57a" }}
        className="button-home-page"
      />
    ) : (
      <Icon type={icon} className="button-home-page" />
    )}

    <p
      style={{
        fontSize: "19px",
        fontWeight: "bold",
        margin: "0px"
      }}
    >
      {text}
    </p>
  </div>
);

export default SiderPan;
