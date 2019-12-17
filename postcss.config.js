const path = require('path')
module.exports = {
  plugins: {
    'postcss-import': {
      path: path.resolve(__dirname, './src/assets/style/reset.css')
    },
    'postcss-functions': {
      functions: {
        rem: function ($px) {
          return ($px / 16) + 'rem'
        }
      }
    }
  }
}
