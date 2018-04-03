// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const LifecyclePlugin = require('webpack-lifecycle-plugin')
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('./paths');
let isFirstBrowserOpen = true;

module.exports = merge(commonConfig, {
  entry: [
    // require.resolve('react-dev-utils/webpackHotDevClient'),
    // 'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    paths.appIndexJs,// the entry point of our app
    paths.appStyleCss
  ],
  devServer: {
    hot: true // enable HMR on the server
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new LifecyclePlugin({"done": (compilation, options, pluginOptions) => {
      if(isFirstBrowserOpen){
        isFirstBrowserOpen = false
        openBrowser('http://localhost:8080');
      }
    }}), // webpack lifecyclePlugin
  ],
});
