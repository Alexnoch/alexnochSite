const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = "development";
module.exports = {
  
    mode:mode,
    devtool: "eval-cheap-module-source-map",
    entry:'./src/index.js',
      output:{
        filename: mode === "production" ?  '[name]-[contenthash].js' : '[name].js',
        path:path.resolve(__dirname,'./build'),
      
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
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: false,
                    name: '[name].[hash:7].[ext]',
                    outputPath:'static/images'
                    },
                },
                // {
                //     loader: 'image-webpack-loader', 
                //     options: {
                //     name:'[name].[hash:7].[ext]',
                //     outputPath:'static/images'
                //     }
                // }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: 'static/fonts/[name].[ext]',
                  outputPath:'static/fonts'
                }
            },
         
        ]
        
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html',
        
        }),
        new MiniCssExtractPlugin({
            filename: mode === "production" ? "css/[name]-[contenthash].css" : "css/[name].css",
          
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, './build/index.html'),
        },
        port: 9000,
        host:'127.0.0.1',
        historyApiFallback: true,
        client:{
            overlay: true
        }
      },
    resolve:{
        alias:{
            images:path.resolve(__dirname,'src/static')
        }
    }

}