const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  config.module.rules.push({
    loader: "babel-loader",
    exclude: /node_modules/,
    test: /\.(js|jsx)$/,
    options: {
      presets: ["@babel/react"],
      plugins: [
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true
          }
        ]
      ]
    }
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: {
          modifyVars: {
            "@primary-color": "#1DA57A",
            "@text-color": "#fff",
            "@component-background": "#10171E",
            "@border-color-base": "#38444D",
            "@border-color-split": "#38444D",
            "@input-placeholder-color": "#8899A6",
            "@heading-color": "#8196a7",
            "@icon-color": "#8196a7"
          },
          javascriptEnabled: true
        }
      }
    ],
    include: [path.resolve(__dirname, "../src"), /[\\/]node_modules[\\/].*antd/]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
