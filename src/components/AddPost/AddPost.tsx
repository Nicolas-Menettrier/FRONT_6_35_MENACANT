import React from "react";
import { Card, Avatar, Row, Col, Button, Input } from "antd";

const { TextArea } = Input;

const AddPost: React.FC = () => {
  return (
    <Card style={{ width: "600px", height: "auto", borderBottom: "10px" }}>
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
            <Button type="primary">Send</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddPost;
