var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "app/src/favicon.ico",
      template: "app/public/index.html",
    }),
  ],
};
