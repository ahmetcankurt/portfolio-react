// webpack.config.js
module.exports = {
  // diğer yapılandırmalar
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
        exclude: [
          /node_modules\/@tensorflow\/tfjs/
        ]
      }
    ]
  }
};
