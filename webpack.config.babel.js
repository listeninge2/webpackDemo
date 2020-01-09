import path from 'path';

import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

import plugins from "./webpack-plugins";
import rules from "./webpack-rules";

export default {
   mode: 'development',
   entry: {
     index: './src/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },

   output: {
     filename: 'assets/js/[name].js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: rules.rules
   },
   resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images"),
      js: path.resolve(__dirname, "src/js"),
      styles: path.resolve(__dirname, "src/styl"),
    },
    extensions: [ ".js", ".styl", "pug" ]
   },
   plugins: plugins.plugins,
   optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};