const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#1DA57A",
      "@text-color": "#fff",
      "@component-background": "#10171E",
      "@border-color-base": "#38444D",
      "@border-color-split": "#38444D",
      "@input-placeholder-color": "#8899A6",
      "@heading-color": "#8196a7",
      "@icon-color": "#8196a7"
    }
  })
);
