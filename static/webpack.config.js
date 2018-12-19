let debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const config = {
    watch: true,
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    performance: {
        hints: false 
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ],
     rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
  },
  plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false, minimize: true }),
  ],
};

module.exports = config;
