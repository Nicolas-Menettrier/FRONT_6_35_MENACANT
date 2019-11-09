import React from "react";
import { Layout } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";

import { useQuery } from "@apollo/react-hooks";

import _ from "lodash";

import { useHistory } from "react-router";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Post from "../components/Post/Post";

import { ProfilePageProps } from "../types/types.6_35";
import { GET_USER_INFO } from "../queryGraph/queryGraph";

const { Content } = Layout;

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_USER_INFO);

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    localStorage.removeItem("token");
    history.push("/");
    return <p>Error</p>;
  }

  return (
    <Container active="Profile">
      <Header text={data.user.username} />
      <ProfileHeader
        name={data.user.username}
        description={
          data.user.description || "This user doesn't provide a description"
        }
      />
      <Content className="content-view">
        <PerfectScrollbar>
          {_.map(
            data.user.posts.sort((a: any, b: any) => {
              if (a.id > b.id) {
                return -1;
              }
              return 0;
            }),
            (post: any) => (
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

export default ProfilePage;
