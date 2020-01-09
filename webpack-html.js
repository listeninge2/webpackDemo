"use strict";

import HtmlWebpackPlugin from "html-webpack-plugin";

const Pages = [
  { name: 'template',             title: "templete生成页"},
  { name: 'template2',            title: "templete生成页2"}
];

export default {
  plugins: Pages.map((page)=>{
    return new HtmlWebpackPlugin({
      template:`src/html/${page.name}.html`,
      filename:`${page.name}.html`,
      title: page.title
    })
  })
}


