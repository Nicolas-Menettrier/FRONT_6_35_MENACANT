import React from "react";
import { PostProps } from "../../types/types.6_35";
import { Card, Avatar, Row, Col, Button, Typography } from "antd";

const Post: React.FC<PostProps> = ({
  likes,
  comments,
  contents,
  author,
  date
}) => {
  return (
    <Card style={{ width: "800px", height: "auto" }}>
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
          <Typography.Text>{`@${author} - ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</Typography.Text>
          <Row>
            <Col style={{ paddingTop: "8px" }}>
              <Typography.Paragraph>{contents}</Typography.Paragraph>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <div>
              <Button shape="circle" icon="message" />
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
    </Card>
  );
};

export default Post;
