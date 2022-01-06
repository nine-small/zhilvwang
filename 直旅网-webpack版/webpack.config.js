const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWobpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: "development",
  entry:{
    index:'./src/index.js',
  },
  output: { 
    filename: "[name].[chunkhash:5].js",
    path:path.resolve(__dirname,'./dist') 
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWobpackPlugin({
    template:"./public/index.html",
    inject:'body'
  })]
};
