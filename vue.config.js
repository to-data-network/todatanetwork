const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "/hun/" : "",
  configureWebpack: {
    

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Dashboard',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
