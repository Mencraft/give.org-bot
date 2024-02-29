/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // assetModuleFilename: 'images/[hash][ext][query]',
  },
  
    // Enable source maps
  devtool: 'source-map',
  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.css$/, // Regex to match CSS files
        use: [
          // Replace 'style-loader' with MiniCssExtractPlugin.loader
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // Enable source maps for CSS
              sourceMap: true,
            },
          },
          'postcss-loader'
        ], // Use these loaders for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]' // Output images into dist/images folder
        },
        include: path.resolve(__dirname, 'public'), // Include images from the public/images folder
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]', // Output fonts into fonts folder in the dist directory
        },
      },
    ],
  },
    // Plugins configuration
    plugins: [
      new ESLintWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(), // For JS
        new CssMinimizerPlugin(), // For CSS
      ],
    },
};
