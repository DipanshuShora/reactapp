var path = require('path');
var DIST = path.resolve(__dirname,'dist');
var SRC = path.resolve(__dirname,'src');

module.exports = {
    entry: SRC + '/app/index.js',
    output: {
        path: DIST + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        inline:true,
        port:8080
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                include: SRC,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:[
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }
            },
            {
                test: /\.css/,
                loader:'style-loader'
            },
            {
                test: /\.css/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};