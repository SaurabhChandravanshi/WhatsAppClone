const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      new MiniCssExtractPlugin(),
    );
    return config
  },
}
