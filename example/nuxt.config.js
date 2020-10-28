const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('../') }],
  floatingPrompt: {
    name: 'My super product',
    url: 'https://www.producthunt.com/posts/my-super-product',
    buttonText: 'My customized button',
    width: '500px',
    saveInCookies: false
  }
}
