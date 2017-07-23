const webpack = require('webpack');
const path = require('path');
const { extend } = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'build');
const STATIC_DIR = path.join(__dirname, 'static');

const TARGET = process.env.npm_lifecycle_event;


let config = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
};

if(TARGET === 'dev' || !TARGET) {
  config = extend(config, {

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
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'],
        include: APP_DIR
      }]
    },

    devtool: 'source-map',
  });
} else if(TARGET === 'build-fe') {
  consig = extend(config, {
    entry: {
      app: path.join(APP_DIR, 'client/entry'),
    },

    output: {
      path: path.join(STATIC_DIR, 'js'),
      filename: 'app.js',
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new ExtractTextPlugin('../css/screen.css', { allChunks: true})
    ],

    module: {
     loaders: [{
        test: /\.jsx?/,
        loaders: ['babel-loader'],
        include: APP_DIR
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'),
        include: APP_DIR
      }]
   },
  });
}
module.exports = config;
