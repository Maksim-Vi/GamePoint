const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['@babel/polyfill','./src/index.js']
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
 devServer:{
  contentBase: path.join(__dirname, 'build'),
  compress: true,
  port: 3000
 },
  resolve: {
  extensions: [".ts", ".tsx", ".js", ".jsx",".json"]
  }, 
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.ttf$/,
      use: ['file-loader'],
    },
    {
      test: /\.json$/,
      loader: 'file-loader',
      type: 'javascript/auto',
      options: {
        name() {
          return '[path][name].[ext]';
        },
      },
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
              name: '[1]-[name].[ext]',
            },
          },
        ],
    }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};