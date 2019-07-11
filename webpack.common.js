const path = require('path')

module.exports = {
  entry: [
    /**
     * 
     * import the array iterator directly to handle this issue 
     * IE11 compat
     * https://github.com/babel/babel/issues/9872
     * 
     */
    'core-js/modules/es.array.iterator',
    path.resolve(__dirname, 'js', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}