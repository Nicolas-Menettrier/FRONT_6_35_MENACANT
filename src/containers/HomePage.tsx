/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Layout } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import _ from "lodash";

import Post from "../components/Post/Post";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

import "react-perfect-scrollbar/dist/css/styles.css";
import AddPost from "../components/AddPost/AddPost";

const { Content } = Layout;

const posts = [
  {
    date: new Date(),
    likes: 35,
    comments: 70,
    contents: "Jui un test mdr",
    author: "Nicolas Menettrier",
    id: "1"
  },
  {
    date: new Date(),
    likes: 1,
    comments: 2,
    contents: "Jui un bide",
    author: "Nicolas Menettrier",
    id: "2"
  }
];

const SiderDemo: React.FC = () => {
  return (
    <Container>
      <Header text="Home" />
      <div className="main-layout">
        <AddPost />
      </div>
      <Content className="content-view">
        <PerfectScrollbar>
          {_.map(posts, (post: any, key) => (
            <Post {...post} key={key} />
          ))}
        </PerfectScrollbar>
      </Content>
    </Container>
  );
};

export default SiderDemo;
