/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Layout } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useQuery } from "@apollo/react-hooks";

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

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
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
          {_.map(
            data.user.posts.sort((a: any, b: any) => {
              if (a.id > b.id) {
                return -1;
              }
              return 0;
            }),
            post => (
              <Post
                likes={post.likes.count}
                comments={post.comments.length}
                contents={post.message}
                id={post.id}
                author={post.user.username}
                key={post.id}
                date={post.date}
              />
            )
          )}
        </PerfectScrollbar>
      </Content>
    </Container>
  );
};

export default SiderDemo;
