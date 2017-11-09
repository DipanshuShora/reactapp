const path = require("path");
const DIST = path.resolve(__dirname,"dist");
const SRC = path.resolve(__dirname,"src");

module.exports = {
    entry: SRC + "/app/index.js",
    output: {
        path: DIST + "/app/",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.less#/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.sass#/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};