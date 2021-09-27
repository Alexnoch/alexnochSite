const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin")

const mode = "development";
module.exports = {
    mode:'development',
    devtool: "eval-cheap-module-source-map",
    entry:'./src/index.js',
      output:{
        filename:'index.js',
        path:path.resolve(__dirname,'build'),
        assetModuleFilename:'[path][name][ext]'  
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]  
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, {loader:'css-loader', options:{ importLoaders: 1 }}],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                type:'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'src/index.html'
         }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/style.css'
        }),
        new CopyPlugin({
            patterns:[
                {from:'src/static/news', to:'src/static/news'}
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/build'),
        },
        host:'127.0.0.1',
        port:3000,
        compress:true,
        historyApiFallback: true,
        client: {
            overlay: true,
          }
    }
}

