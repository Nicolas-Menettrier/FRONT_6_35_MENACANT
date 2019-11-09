/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable radix */
import React from "react";
import { useParams, useHistory } from "react-router";
import PerfectScrollbar from "react-perfect-scrollbar";
import _ from "lodash";

import { useQuery } from "@apollo/react-hooks";
import Container from "../components/Container/Container";
import ZoomView from "../components/ZoomView/ZoomView";
import Header from "../components/Header/Header";
import Post from "../components/Post/Post";
import { GET_POST } from "../queryGraph/queryGraph";

const PostView: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  // @ts-ignore
  const intId = parseInt(id);
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id: intId }
  });

  // useEffect(() => console.log(data));

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
      <Header text="Post" />
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <ZoomView
          author={data.post.user.username}
          likes={data.post.likes.count}
          comments={data.post.comments.length}
          contents={data.post.message}
          id={data.post.id}
        />
        {_.map(
          data.post.comments.sort((a: any, b: any) => {
            if (a.id > b.id) {
              return -1;
            }
            return 0;
          }),
          el => (
            <Post
              key={el.id}
              author={el.user.username}
              contents={el.message}
              id={el.id}
              date={el.date}
              likes={el.likes.count}
              comments={el.comments.length}
              width
            />
          )
        )}
      </PerfectScrollbar>
    </Container>
  );
};

export default PostView;
