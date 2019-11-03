import React from "react";
import { Card, Avatar, Typography } from "antd";
import { ProfileHeaderProps } from "../../types/types.6_35";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  description
}: ProfileHeaderProps) => {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "134px" }}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            className="profil-icon"
            style={{ borderStyle: "solid", borderColor: "#38444d" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            borderStyle: "solid",
            borderColor: "#38444d",
            borderWidth: 1,
            marginTop: 16,
            marginBottom: 8
          }}
        />
        <Typography.Text
          style={{ fontSize: 19, fontWeight: 800, paddingTop: 8 }}
        >
          {`${name}`}
        </Typography.Text>
        <Typography.Text style={{ paddingTop: 8 }}>
          {`About me | ${description}`}
        </Typography.Text>
      </div>
    </Card>
  );
};

export default ProfileHeader;
