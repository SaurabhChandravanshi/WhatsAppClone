

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.styl$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader:"style-loader"
        },{
          loader:"css-loader"
        }, {
          loader:"stylus-loader"
        }
      ], exclude: /node_modules/,
    })

    return config
  },
}
