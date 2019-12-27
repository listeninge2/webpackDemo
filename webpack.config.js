const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
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
     rules: [
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
     ]
   },
   resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images"),
      js: path.resolve(__dirname, "src/js"),
      styles: path.resolve(__dirname, "src/styl"),
    },
    extensions: [ ".js", ".styl", "pug" ]
   },
   plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].css",
        chunkFilename: "assets/css/[id].css"
      }),
      new HtmlWebpackPlugin({
        template:"src/html/template.html",
        filename:"index.html",
        title:"templete生成页"
      }),
   ],
   optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};