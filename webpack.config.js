
let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist' ),
        filename: 'main.js',
        publicPath: ''
    },

    devServer:{
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/BEM/index.pug',
            inject: true
        }),
    ],
    module:{
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            // exclude: '/node_midules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { 
                test: /\.pug$/,
                loader:  'pug-loader',
                options: {
                      pretty: true,
                  },
                }
        ]
    },
    devtool: 'eval-sourcemap'
};

module.exports = (env, options) =>{
    let production = options.mode ==='production';
    conf.devtool = production
                    ? 'source-map'
                    : 'eval-sourcemap';
    return conf;
};