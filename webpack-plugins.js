"use strict";

import path from "path";
import webpack from "webpack";

import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import HTMLProcess from "./webpack-html";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "assets/css/[name].css",
    chunkFilename: "assets/css/[id].css"
  })
].concat(HTMLProcess.plugins);

export default { plugins }