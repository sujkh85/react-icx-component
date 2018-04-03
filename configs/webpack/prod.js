// production config
const merge = require('webpack-merge');
const {resolve} = require('path');
const commonConfig = require('./common');
const paths = require('./paths');

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

module.exports = merge(commonConfig, {
  entry: [
    paths.appIndexJs,// the entry point of our app
    paths.appStyleCss
  ],
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: './',
  },
  plugins: [],
});
