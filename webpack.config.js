const path = require('path');
module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, "src/public/assets/javascript")
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
  },
  node: {
    fs: 'empty'
  }
}