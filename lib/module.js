const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.floatingPrompt,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-floating-prompt-module.js',
    options,
    mode: 'client'
  })
}

module.exports.meta = require('../package.json')
