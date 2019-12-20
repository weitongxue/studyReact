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
    },
    'postcss-css-variables': { // 定义公共样式（全局可以使用，var()引用）
      preserveInjectedVariables: false, // 不允许通过js修改css
      variables: {
        '--green': '#000000'
      }
    }
  }
}
