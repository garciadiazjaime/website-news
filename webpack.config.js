const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'build');
const APP_DIR = path.join(__dirname, 'src');

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: path.join(APP_DIR, 'client/entry'),
  },

  output: {
    path: path.join(BUILD_DIR, 'js'),
    filename: 'app.js',
  },

  devServer: {
    contentBase: BUILD_DIR,

    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    hot: true,
    inline: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel-loader'],
      include: APP_DIR
    }]
  },

  devtool: 'source-map',
};

module.exports = config;
