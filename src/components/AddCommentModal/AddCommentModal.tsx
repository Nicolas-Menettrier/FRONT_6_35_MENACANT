/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Modal, Button, Row, Col, Input } from "antd";
import _ from "lodash";
import { AddCommentModalProps } from "../../types/types.6_35";

import Post from "../Post/Post";

const { TextArea } = Input;

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

const AddCommentModal: React.FC<AddCommentModalProps> = ({
  visible,
  setVisible,
  id
}: AddCommentModalProps) => {
  const handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(false);
  };

  const getPost = (): JSX.Element => {
    const post = _.find(posts, el => el.id === id);

    if (post) {
      return <Post {...post} comment width />;
    }
    return <></>;
  };

  return (
    <Modal
      title="Reply"
      visible={visible}
      onCancel={handleCancel}
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
        {getPost()}
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
