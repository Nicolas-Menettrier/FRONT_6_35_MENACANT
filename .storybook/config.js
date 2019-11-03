import { configure } from "@storybook/react";
import React from "react";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.tsx$/), module);
