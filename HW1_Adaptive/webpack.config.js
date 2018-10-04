let webbpack = require('webpack');
let ExtractTextPlugin = require("mini-css-extract-plugin");
let path = require('path');
let inProduction = (process.env.NODE_ENV === 'production');
let autoprefixer = require('autoprefixer');

module.exports = {

    entry: {
        app: [
            './src/js/app.js',
            './src/scss/main.scss'
        ]
    },

    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: ExtractTextPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader', 'postcss-loader', 'sass-loader'
                ]
            },

            {

                test: /\.svg$|\.png$|\.jpg$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }

            }


        ]
    },

    devServer: {
              contentBase: './'
    },

    plugins: [

        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),

        new webbpack.LoaderOptionsPlugin({
            minimize: inProduction
        })

    ]

};