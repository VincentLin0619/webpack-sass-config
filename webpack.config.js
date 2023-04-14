const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/env", {
              "targets": {
                "browsers": "last 2 chrome versions"
              }
            }]
          ]
        }
      },
      {
        //sass打包,設定黨是從最後一個開始先讀取的,所以sass-loader要放在最後一個先處裡sass
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          'css-loader',
          {
            //後處裡,設定與瀏覽器的相容性
            loader: 'postcss-loader',
            options: {
              // options必加
              postcssOptions: {
                plugins: [
                  // 添加 Autoprefixer
                  ['autoprefixer'],
                  // 添加 postcss-preset-env
                  ['postcss-preset-env'],
                  ['cssnano']
                ]
              }
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve('./assets/'),
        type: 'asset/resource',
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/',
            publicPath: './assets/'
          }
        }
      },
    ],
  },
  plugins: [
    // 用於自動加載模塊，這裡將全局的process對象定義為'process/browser'模塊的導出值，這樣就不需要手動在每個模塊中引入這個模塊了。
    new webpack.ProvidePlugin({ process: 'process/browser' }),
    // 用於生成html文件。其中template選項指定輸入的html文件路徑，filename選項指定打包完成後的html文件名稱，minify選項則指定對生成的html進行壓縮的配置選項。
    new HtmlWebpackPlugin({
      template: './src/index.html', //輸入html
      filename: '/index.html', //打包完的名稱
      title: 'Development',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        sortAttributes: true,
        useShortDoctype: true
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    host: 'localhost',
    port: 8080,
  }
};