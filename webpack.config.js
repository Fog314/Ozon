'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  edge: "11",
                  firefox: "50",
                  chrome: "50",
                  safari: "8",
                  ie: "7"
                },
                useBuiltIns: "usage"
              }]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin()
  ]
};