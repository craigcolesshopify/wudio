const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    path:'./src/client/index.js'
  },
  output: {
    path: path.resolve(__dirname, "src/public/assets/javascript"),
    filename:'main.js'
  },
  module: {
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}