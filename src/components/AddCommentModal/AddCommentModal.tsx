/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Modal, Button, Row, Col, Input } from "antd";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router";

import Post from "../Post/Post";

import { AddCommentModalProps } from "../../types/types.6_35";
import { GET_POST, ADD_COMMENTS } from "../../queryGraph/queryGraph";

const { TextArea } = Input;

const AddCommentModal: React.FC<AddCommentModalProps> = ({
  visible,
  setVisible,
  id
}: AddCommentModalProps) => {
  const { loading, error, data } = useQuery(GET_POST, { variables: { id } });
  const [addComment] = useMutation(ADD_COMMENTS, {
    update(cache, { data }) {
      const post = cache.readQuery({
        query: GET_POST,
        variables: { id }
      });

      console.log(post);
      cache.writeQuery({
        query: GET_POST,
        // @ts-ignore
        data: { comments: post.post.comments.concat(data) }
      });
    }
  });
  const [tweet, setTweet] = useState("");
  const history = useHistory();

  const handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    addComment({
      variables: { postId: id, message: tweet }
    });
    setVisible(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    localStorage.removeItem("token");
    history.push("/");
    return <p>Error...</p>;
  }

  return (
    <Modal
      title="Reply"
      visible={visible}
      onCancel={handleCancel}
      width="600px"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Send
        </Button>
      ]}
    >
      <div>
        <Post
          likes={data.post.likes.count}
          comments={data.post.comments.length}
          contents={data.post.message}
          id={data.post.id}
          author={data.post.user.username}
          comment
          width
        />
        <div className="add-post">
          <Row>
            <Col>
              <TextArea
                style={{
                  fontSize: 19,
                  border: 0,
                  outline: 0,
                  paddingTop: 16
                }}
                onClick={(e): void => e.stopPropagation()}
                placeholder="Put your answer"
                onChange={(e): void => setTweet(e.target.value)}
                autoSize
              />
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default AddCommentModal;
