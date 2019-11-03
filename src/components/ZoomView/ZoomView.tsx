import React, { useState } from "react";
import { Card, Avatar, Typography, Row, Col, Button } from "antd";

import AddCommentModal from "../AddCommentModal/AddCommentModal";

import { ZoomViewProps } from "../../types/types.6_35";

const ZoomView: React.FC<ZoomViewProps> = ({
  author,
  contents,
  comments,
  likes,
  id
}: ZoomViewProps) => {
  const [visible, setVisible] = useState(false);

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
            <Button shape="circle" icon="retweet" className="button-retweet" />
            <div>
              <Button shape="circle" icon="heart" className="button-heart" />
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
