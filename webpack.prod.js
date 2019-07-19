const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  // hashed filenames go to production
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },
  // this setting will override the default webpack minimization technique
  // required to handle minifying the output of MiniCssExtractPlugin
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    // plain file names for development
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css'
    }),
  ]
})