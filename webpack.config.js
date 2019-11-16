
const path = require("path"),
    webpack = require("webpack"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    HtmlPlugin = require("html-webpack-plugin"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",

                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '10.9.67.231',
        open: true,
        historyApiFallback: { //把history index.html
            index: "/index.html"
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]

}