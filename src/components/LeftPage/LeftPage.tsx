import React from "react";
import { Input } from "antd";

const { Search } = Input;

const LeftPage: React.FC = () => (
  <div className="left-page">
    <Search
      placeholder="Research"
      onSearch={(value): void => console.log(value)}
      style={{ width: 350, height: 40 }}
    />
  </div>
);

export default LeftPage;
