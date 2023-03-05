const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode
  mode: "development",
  // entry -> kiriw
  entry: {
    app: path.resolve(__dirname, "src/js/app.js"),
    index: path.resolve(__dirname, "src/js/index.js"),
    about: path.resolve(__dirname, "src/js/about.js"),
  },
  // output -> shigariw
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  // modules
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/path/index.html"),
      filename: "index.html",
      chunks: ["app", "index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/path/about.html"),
      filename: "about.html",
      chunks: ["app", "about"],
    }),
    new MiniCssExtractPlugin(),
  ],
  // devServer
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 5500,
    open: true,
  },
};
