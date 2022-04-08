const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
  webpack: (config, options) => {
  
    config.module.rules.push({
      test: /\.styl$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        {
          loader: 'css-loader',
        },
        {
          loader: 'stylus-loader',
          
        },
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: 'static/chunks/[id].css',
        ignoreOrder: false,
      }),
    );
    
    return config
  },
}
