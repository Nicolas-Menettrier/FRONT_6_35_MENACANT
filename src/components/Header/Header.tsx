import React from "react";
import { Card, Typography } from "antd";

import { HeaderProps } from "../../types/types.6_35";

const Header: React.FC<HeaderProps> = ({ text }: HeaderProps) => (
  <Card style={{ height: "auto", width: "100%", borderTopWidth: "0px" }}>
    <Typography.Text style={{ fontSize: "19px", fontWeight: 800 }}>
      {text}
    </Typography.Text>
  </Card>
);

export default Header;
