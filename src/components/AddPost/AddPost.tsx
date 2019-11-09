import React, { useState } from "react";
import { Card, Avatar, Row, Col, Button, Input, notification } from "antd";
import { useMutation } from "@apollo/react-hooks";

import { ADD_POST, GET_HOME_POST } from "../../queryGraph/queryGraph";

const { TextArea } = Input;

const AddPost: React.FC = () => {
  const [addTweet] = useMutation(ADD_POST, {
    update(cache, { data }) {
      const post: any = cache.readQuery({
        query: GET_HOME_POST
      });

      cache.writeQuery({
        query: GET_HOME_POST,
        data: {
          ...post,
          user: {
            ...post.user,
            posts: [...post.user.posts, data.post]
          }
        }
      });
    }
  });
  const [tweet, setTweet] = useState("");

  return (
    <Card style={{ width: "100%", height: "auto", borderBottom: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "60px" }}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            className="profil-icon"
          />
        </div>
        <div className="add-post">
          <Row>
            <Col style={{ paddingTop: "8px" }}>
              <TextArea
                style={{
                  fontSize: 19,
                  border: 0,
                  outline: 0
                }}
                placeholder="What's up ?"
                autoSize
                value={tweet}
                onChange={(e): void => setTweet(e.target.value)}
              />
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingTop: "8px"
            }}
          >
            <Button
              onClick={(): void => {
                addTweet({ variables: { message: tweet } });
                setTweet("");
                notification.success({
                  message: "Hermès Success",
                  description: "Your post has been posted successfully."
                });
              }}
              type="primary"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddPost;
