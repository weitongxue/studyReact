const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = require('./config')

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'
  return {
    // 入口文件
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
    // 打包之后的文件
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/meituan/',
      filename: 'static/js/' + 'chunk.[name].js',
      // 非入口文件命名（router 动态引入时需要配置）
      chunkFilename: 'static/js/' + 'chunk.[id].[contenthash:8].js'
    },
    cache: true, // 开启缓存功能，这样只有变化的文件才会重新加载，可提升构建速度
    resolve: {
      // 配置别名(可以直接引用，不用写相对路径)
      alias: {
        '@JS': path.resolve(__dirname, 'src/assets/js'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@components/*': path.resolve(__dirname, 'src/components/*'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@views/*': path.resolve(__dirname, 'src/views/*'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@assets/*': path.resolve(__dirname, 'src/assets/*')
      },
      // 不允许忽略后缀名（import js from 'index' 必须写成 import js from 'index.js'）
      enforceExtension: false, // 默认false
      // 自动解析的文件后缀名
      extensions: ['.tsx', '.jsx', '.css', '.js', '.json']
    },
    // 模块
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.m?(jsx|js|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.(less|css)$/,
          use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader',
            options: { minimize: true }
          }
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'static/images/[name].[hash:8].[ext]'
            }
          }
        }
      ]
    },
    // 拆分模块打包
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     name: 'main'
    //     // minChunks: 1,
    //   }
    // },
    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new CleanWebpackPlugin({
        filename: devMode ? '[name].css' : 'static/css/' + '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : 'static/css/' + '[id].[hash].css'
      }),
      // 将css独立到单独的文件 (区分开发环境和生产环境)
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : 'static/css/' + '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : 'static/css/' + '[id].[hash].css'
      })
    ],
    ...config
  }
}
