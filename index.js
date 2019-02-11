const path = require('path')

module.exports = function nuxtBulma(options) {
  // Add CSS
  this.options.css.push({src: '~/assets/css/main.scss', lang: 'scss'})
  this.options.css.push({src: '@fortawesome/fontawesome-free/css/all.css'})
}

module.exports.meta = require('./package.json')