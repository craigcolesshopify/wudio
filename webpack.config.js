module.exports = {
  entry: './src/client/index.js',
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