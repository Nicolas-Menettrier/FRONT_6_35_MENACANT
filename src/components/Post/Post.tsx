/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar, Row, Col, Button, Typography } from "antd";

import AddCommentModal from "../AddCommentModal/AddCommentModal";

import { PostProps } from "../../types/types.6_35";

const Post: React.FC<PostProps> = ({
  likes,
  comments,
  contents,
  author,
  date,
  comment,
  width,
  id
}: PostProps) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleClick = (): void => {
    console.log("testos");
    history.push(`/post/${id}`);
  };

  return (
    <div onClick={handleClick} role="button" tabIndex={0}>
      <Card
        style={{ width: !width ? "600px" : "auto", height: "auto" }}
        hoverable={!comment}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "60px" }}>
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              className="profil-icon"
            />
          </div>
          <div
            style={{
              width: "700px",
              paddingLeft: "8px",
              paddingRight: "60px"
            }}
          >
            <Typography.Text style={{ fontSize: "15px", fontWeight: "bold" }}>
              {`@${author} - ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
            </Typography.Text>
            <Row>
              <Col style={{ paddingTop: "8px" }}>
                <Typography.Paragraph style={{ fontSize: "15px" }}>
                  {contents}
                </Typography.Paragraph>
              </Col>
            </Row>

            {!comment ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div>
                  <Button
                    shape="circle"
                    icon="message"
                    className="button-comment"
                    onClick={(e): void => {
                      e.stopPropagation();
                      setVisible(true);
                    }}
                    onMouseDown={(e): void => e.stopPropagation()}
                  />
                  {` ${comments}`}
                </div>
                <Button
                  shape="circle"
                  icon="retweet"
                  className="button-retweet"
                />
                <div>
                  <Button
                    shape="circle"
                    icon="heart"
                    className="button-heart"
                  />
                  {` ${likes}`}
                </div>
                <Button shape="circle" icon="share-alt" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card>
      <AddCommentModal visible={visible} setVisible={setVisible} id={id} />
    </div>
  );
};

Post.defaultProps = {
  comment: false,
  width: false
} as Partial<PostProps>;

export default Post;
