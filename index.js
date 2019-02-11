const path = require('path')

module.exports = function nuxtBulma(options) {
  // Add CSS
  this.options.css.push('~/assets/css/main.scss')
}

module.exports.meta = require('./package.json')