// production config

const merge = require('webpack-merge');
const {resolve} = require('path');
const paths = require('./paths');

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const commonConfig = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};


module.exports = merge(commonConfig, {
  entry: paths.libraryBuildPath,
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../../build'),
    publicPath: './',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [

  ],
});
