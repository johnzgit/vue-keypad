'use strict'
const pkg = require('../package')
const cssnext = require('postcss-cssnext')

module.exports = {
  port: 4000,
  title: 'vue-keypad',
  vendor: Object.keys(pkg.dependencies),
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ],
    plugins: [
      'transform-vue-jsx'
    ]
  },
  postcss: [
        cssnext({
            autoprefixer: {
                browsers: ['last 2 versions']
            }
        }),
        require('postcss-nested'),
  ],
  cssModules: true,
}
