# Bulma
[![npm](https://img.shields.io/npm/dt/@olivierbelaud/bulma.svg?style=flat-square)](https://npmjs.com/package/@olivierbelaud/bulma)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@olivierbelaud/bulma/latest.svg?style=flat-square)](https://npmjs.com/package/@olivierbelaud/bulma)

> Leverage [bulma](http://github.com/jgthms/bulma) CSS.

## Setup
- Add `@olivierbelaud/bulma` dependency using yarn or npm to your project
- Add `@olivierbelaud/bulma` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    '@olivierbelaud/bulma'
  ]
}
````

- You will need to use postcss loader if you are not already using it.

```js

build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
```