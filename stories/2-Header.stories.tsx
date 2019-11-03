import React from "react";
import Header from "../src/components/Header/Header";
import "antd/dist/antd.css";
import "../src/App.css";

export default {
  title: "Header"
};

export const text = (): JSX.Element => <Header text="Home" />;
