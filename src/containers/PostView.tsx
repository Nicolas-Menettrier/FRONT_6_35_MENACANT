import React from "react";
import { useParams } from "react-router";
import PerfectScrollbar from "react-perfect-scrollbar";
import _ from "lodash";

import Container from "../components/Container/Container";
import ZoomView from "../components/ZoomView/ZoomView";
import Header from "../components/Header/Header";
import Post from "../components/Post/Post";

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

const comments = [
  {
    date: new Date(),
    contents: "testos",
    author: "Arnaud Pinta",
    id: "3"
  },
  {
    date: new Date(),
    contents: "testas",
    author: "Tozzi Bendo",
    id: "4"
  },
  {
    date: new Date(),
    contents: "testus",
    author: "Rochelon Raclette",
    id: "5"
  },
  {
    date: new Date(),
    contents: "testis",
    author: "Suisson Poton",
    id: "6"
  }
];

const PostView: React.FC = () => {
  const { id } = useParams();

  const findPost = (): JSX.Element => {
    const post = _.find(posts, el => el.id === id);

    if (post) {
      return <ZoomView {...post} />;
    }
    return <></>;
  };

  const findCommentsRelatedToPost = (): JSX.Element[] => {
    return _.map(comments, el => (
      <Post
        key={el.id}
        author={el.author}
        date={el.date}
        id={el.id}
        contents={el.contents}
        comment
      />
    ));
  };

  return (
    <Container>
      <Header text="Post" />
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        {findPost()}
        {findCommentsRelatedToPost()}
      </PerfectScrollbar>
    </Container>
  );
};

export default PostView;
