'use strict'
module.exports = {
  publicPath: '/',
  pages: {
    index: 'src/pages/index/main.js',
    login: 'src/pages/login/main.js'
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/login$/, to: '/login.html' }
      ]
    }
  }
}
