const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js', // Main JS file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output bundled file in dist folder
    clean: true, // ✅ Fixed (comma instead of semicolon)
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // ✅ Ensure Webpack serves the dist folder
    },
    compress: true,
    port: 8000, // You can change this if needed
    open: true, // Auto-opens browser on startup
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Loaders to process CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
