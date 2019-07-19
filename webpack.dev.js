const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports =  merge(common, {
  mode: 'development',
  devtool: 'source-map',
  // plain file names for development
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    // plain file names for development
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
  ]
})