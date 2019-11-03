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
      "@component-background": "#15202B",
      "@body-background": "#15202B",
      "@border-color-base": "#38444D",
      "@border-color-split": "#38444D",
      "@input-placeholder-color": "#8899A6",
      "@heading-color": "#8196a7",
      "@btn-border-radius-base": "9999px",
      "@btn-border-radius-sm": "9999px",
      "@layout-body-background": "#15202B",
      "@layout-header-background": "#15202B"
    }
  })
);
