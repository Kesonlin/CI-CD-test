const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");

module.exports = {
    mode: "production",
    entry: "./js/index.js",

    output: {
        filename: "./js/[name].[contenthash:5].js",
        path: path.resolve(__dirname, "./dist"),
        // publicPath: '../dist/',
        clean: true,
    },

    devtool: "source-map",

    performance: {
        maxAssetSize: 300000000,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|webp|gif|png-cover|jpg-cover)$/,
                type: "asset",
                generator: {
                    filename: "images/[contenthash:5].[ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 4kb
                    },
                },
                // use: [
                // {
                //     loader: 'file-loader'
                // },
                // {
                //     loader: 'url-loader',
                //     options: {
                //         // limit: 8000 * 1024,
                //         // output: 'images/',

                //         // name: 'images11/[name].[hash:5].[ext]',
                //         esModule: false
                //     },
                //     // type: 'javascript/auto',
                // }
                // ]
            },
            {
                test: /\.svg/,
                type: "asset/inline",
            },
            {
                test: /\.(|woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name].[ext]",
                },
            },
            {
                test: /\.html$/,
                use: ["html-withimg-loader"],
                // loader: 'html-loader'
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            // 引入图标
            favicon: path.resolve(__dirname, "images/favicon.ico"),
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],

    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        // 去除comsole语句
                        drop_console: true,
                    },
                },
            }),
        ],
    },

    devServer: {
        static: "./dist",
        compress: true,
        https: true,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3344",
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
