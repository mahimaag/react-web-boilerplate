
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
const bourbon = require('node-bourbon').includePaths;
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.(jsx|js)?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel-loader',
            },
            {
                test: /.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'postcss-loader', 'sass-loader?includePaths[]=' + bourbon,]
                }),
            },
            {
                test: /\.(otf|png|jpg|jpeg|gif|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.yaml$/,
                use: [
                    {loader: 'json-loader'},
                    {loader: 'yaml-loader'},
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css'],
    },
    devtool: 'source-map',
    // devServer: {
    //     contentBase: './src',       // overridden in run.js
    //     port: 9000,
    //     historyApiFallback: true,
    // },
    plugins: [
        new LiveReloadPlugin(),
        new ExtractTextPlugin('style.css'),
        // new HtmlWebpackPlugin({
        //     template: './app/index.html',
        //     filename: 'index.html'
        // }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]

};

module.exports = config;
