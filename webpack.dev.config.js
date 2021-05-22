const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname, // __dirname: 当前目录
    filename: './release/bundle.js',
  },

  // babel
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/, // 忽略哪些文件
        loader: 'babel-loader', // 将检测到的文件，基于此 包 进行处理（如处理成 es5 语法）
      },
    ],
  },

  // 插件列表
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './release'), // 根目录
    open: true, // 自动打开浏览器
    port: 9000,
  },
}
