module.exports = {
  plugins: {
    'postcss-functions': {
      functions: {
        rem: function ($px) {
          return ($px / 16) + 'rem'
        }
      }
    }
  }
}
