const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path.join(__dirname, "src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.json$/,
        use: {
          loader: "json-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./public/index.html"
    })
  ]
};
