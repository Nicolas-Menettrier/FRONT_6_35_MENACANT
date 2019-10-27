import React from "react";
import Post from "../src/components/Post/Post";
import "antd/dist/antd.css";
import "../src/App.css";

export default {
  title: "Post"
};

const date = new Date();

export const text = () => (
  <Post
    date={date}
    likes={10}
    comments={50}
    contents={"mdr jui un test"}
    author={"Nicolas Menettrier"}
  />
);

export const textPlusLong = () => (
  <Post
    date={date}
    likes={10}
    comments={50}
    contents={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero turpis, posuere non turpis non, congue pharetra nisl. Cras et cursus enim. Pellentesque vel leo pharetra, convallis nisi at, posuere ligula. Sed sollicitudin, tellus ultricies dictum blandit, purus nunc dictum elit, non malesuada urna lacus ornare dui. Etiam neque arcu, egestas vel metus ut, bibendum suscipit urna. Sed semper nibh in sem egestas, vel efficitur magna aliquam. Aliquam mi augue, cursus sed malesuada ac, lacinia non nunc. Nam sodales, massa non pellentesque porttitor, justo est consectetur justo, sed mollis arcu ante et turpis. Sed in tellus sed lacus mattis pretium a a tortor. Quisque mollis dui nec viverra euismod. Fusce eget pellentesque augue."
    }
    author={"Nicolas Menettrier"}
  />
);
