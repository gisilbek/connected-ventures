const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // Cambiar a 'production' para build optimizado
    entry: {
        main: './js/index.js',   
        events: './js/events.js' 
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'                
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', 
                generator: {
                    filename: 'assets/images/[name][ext]' 
                }
            },
        ],
    },
    plugins: [
        // HTML principal
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['main'], 
        }),
        // HTML events
        new HtmlWebpackPlugin({
            template: './events.html',
            filename: 'events.html',
            chunks: ['events'],
        }),
        new HtmlWebpackPlugin({
            template: './events/8.html',
            filename: 'events/8.html',
            chunks: ['events'],
        }),
        new HtmlWebpackPlugin({
            template: './events/9.html',
            filename: 'events/9.html',
            chunks: ['events'],
        }),
        new HtmlWebpackPlugin({
            template: './events/7.html',
            filename: 'events/7.html',
            chunks: ['events'],
        }),
        new HtmlWebpackPlugin({
            template: './events/6.html',
            filename: 'events/6.html',
            chunks: ['events'],
        }),
        new HtmlWebpackPlugin({
            template: './events/1.html',
            filename: 'events/1.html',
            chunks: ['events'],
        }),
        // Extraer CSS
        new MiniCssExtractPlugin({
            filename: '[name].styles.css', 
        }),

       new CopyWebpackPlugin({
            patterns: [
                { from: './img', to: 'assets/images' } 

            ],
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
};
