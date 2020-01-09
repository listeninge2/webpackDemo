"use strict";

import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const rules = [
   // Enable ES6 coding style
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
   {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
   },
   {
      test: /\.styl$/,
       use: [
         MiniCssExtractPlugin.loader,
         'css-loader',
         'stylus-loader'
       ]
   },
   {
      test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
      use: [
        {
          loader: 'url-loader',
          options: {
              limit: 8192,
              outputPath: 'images'
          }
        }
      ]
    },
 ];

export default { rules }