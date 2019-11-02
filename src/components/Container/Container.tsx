import React from "react";
import { Layout, Row } from "antd";

import Sider from "../Sider/Sider";

import "react-perfect-scrollbar/dist/css/styles.css";
import LeftPage from "../LeftPage/LeftPage";

const { Content } = Layout;

const Container: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: "100%", flexDirection: "row" }}>
      <Row style={{ flex: 1, height: "100%" }}>
        <Sider />
      </Row>
      <Layout
        style={{
          flex: 1,
          borderStyle: "solid",
          borderColor: "#38444D",
          borderWidth: "1px",
          borderTop: "0px"
        }}
      >
        {children}
      </Layout>
      <Content
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          background: "#15202B"
        }}
      >
        <LeftPage />
      </Content>
    </Layout>
  );
};

export default Container;
