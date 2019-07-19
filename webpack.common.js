const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// allows for separatating media queries into different files.
// maybe good for cache busting media queries.
const MediaQueryPlugin = require('media-query-plugin')


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

    // set filenames based on environment

    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  optimization: {
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // allow HtmlWebpackPlugin to interpret index.html as a template
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.hbs$/,
        use: [ 'handlebars-loader' ]
      },
      // allow imports of style sheets and turn them into css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // use the loader to split the imports into files
            loader: MiniCssExtractPlugin.loader,
            options: {
              // enable hot module reloading
              hmr: process.env.NODE_ENV !== 'production',
              publicPath: '/dist/'
            }
          },
          // don't use style-loader. it will throw an error
          'css-loader',
          // extract the media queries before they hit the css loader
          MediaQueryPlugin.loader,
          'sass-loader'
        ]
      },

    ]
  },
  plugins: [
    // enable plugins with settings
    
    // use HtmlWebpackPlugin before others
    // https://github.com/jantimon/html-webpack-plugin#usage
    new HtmlWebpackPlugin({
      title: 'Import Test',
      template: 'index.hbs',
      // hash: true,
      inject: false
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css',
    //   chunkFilename: '[name].[contenthash].css'
    // }),
    new MediaQueryPlugin({
      include: [
        'style'
      ],
      queries: {
        'screen and (min-width: 60rem)': 'desktop'
      }
    }),
    // new CleanWebpackPlugin({
    //   // dry: true,
    //   // cleanOnceBeforeBuildPatterns: ['**/*/']
    // }),

  ]
}