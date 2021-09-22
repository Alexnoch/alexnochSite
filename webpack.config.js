const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    watch:true,
    mode:'production',
    devtool: "eval-cheap-module-source-map",
    entry:'./src/index.js',
      output:{
        filename:'app.js',
        path:path.resolve(__dirname,'build')  
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }  
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192,
                    name: '[name].[hash:7].[ext]'
                      },
                },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ]

}