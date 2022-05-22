const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "css", "index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "file-loader",
        options: {
          name: '/image/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    compress: false,
    open: "/",
    port: 3001
  }
}