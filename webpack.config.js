const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    // Punto de entrada principal para la página de inicio
    main: './js/index.js',
    // Punto de entrada separado para las páginas de eventos
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
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    // Configuración para la página de inicio que usa el bundle 'main'
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    // Configuración para las páginas de eventos que usan el bundle 'events'
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
    // Plugin para extraer el CSS en un archivo separado
    new MiniCssExtractPlugin({
      filename: '[name].styles.css',
    }),
    // Plugin para copiar los assets de imágenes
    new CopyWebpackPlugin({
      patterns: [
        { from: './img', to: 'assets/images' },
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
