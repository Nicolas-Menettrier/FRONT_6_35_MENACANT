/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Layout } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router";

import _ from "lodash";

import Post from "../components/Post/Post";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

import "react-perfect-scrollbar/dist/css/styles.css";
import AddPost from "../components/AddPost/AddPost";

import { GET_HOME_POST } from "../queryGraph/queryGraph";

const { Content } = Layout;

const SiderDemo: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HOME_POST);
  const history = useHistory();

  useEffect(() => console.log(data));
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    localStorage.removeItem("token");
    history.push("/");
    return <p>Error...</p>;
  }
  return (
    <Container active="Home">
      <Header text="Home" />
      <div className="main-layout" style={{ width: "100%" }}>
        <AddPost />
      </div>
      <Content className="content-view">
        <PerfectScrollbar>
          {_.map(data.user.posts, post => (
            <Post
              likes={post.likes.count}
              comments={post.comments.length}
              contents={post.message}
              id={post.id}
              author={post.user.username}
              key={post.id}
            />
          ))}
        </PerfectScrollbar>
      </Content>
    </Container>
  );
};

export default SiderDemo;
