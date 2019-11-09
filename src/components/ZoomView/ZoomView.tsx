import React, { useState } from "react";
import { Card, Avatar, Typography, Row, Col, Button, notification } from "antd";

import { useMutation } from "@apollo/react-hooks";
import AddCommentModal from "../AddCommentModal/AddCommentModal";

import { ZoomViewProps } from "../../types/types.6_35";
import { ADD_LIKES, RETWEET } from "../../queryGraph/queryGraph";

const ZoomView: React.FC<ZoomViewProps> = ({
  author,
  contents,
  comments,
  likes,
  id
}: ZoomViewProps) => {
  const [visible, setVisible] = useState(false);
  const [addLike] = useMutation(ADD_LIKES);
  const [retweet] = useMutation(RETWEET);

  return (
    <Card style={{ width: "100%", height: "auto" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50px" }}>
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              className="profil-icon"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", paddingLeft: 8 }}
          >
            <Typography.Text style={{ fontSize: "15px", fontWeight: "bold" }}>
              {`@${author}`}
            </Typography.Text>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: "8px"
          }}
        >
          <Row
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "#38444D"
            }}
          >
            <Col style={{ paddingTop: "8px" }}>
              <Typography.Paragraph
                style={{ fontSize: "23px", fontWeight: 400 }}
              >
                {contents}
              </Typography.Paragraph>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              paddingTop: "16px"
            }}
          >
            <div>
              <Button
                shape="circle"
                icon="message"
                className="button-comment"
                onClick={(): void => setVisible(true)}
              />
              {` ${comments}`}
            </div>
            <Button
              shape="circle"
              icon="retweet"
              className="button-retweet"
              onClick={(e): void => {
                e.stopPropagation();
                retweet({ variables: { postId: id } });
                notification.success({
                  message: "Hermès Success",
                  description: "Retweet success!"
                });
              }}
            />
            <div>
              <Button
                shape="circle"
                icon="heart"
                className="button-heart"
                onClick={(e): void => {
                  e.stopPropagation();
                  addLike({ variables: { postId: id } });
                  notification.success({
                    message: "Hermès Success",
                    description: "Your like is set."
                  });
                }}
              />
              {` ${likes}`}
            </div>
            <Button shape="circle" icon="share-alt" />
          </div>
        </div>
      </div>
      <AddCommentModal visible={visible} setVisible={setVisible} id={id} />
    </Card>
  );
};

export default ZoomView;
