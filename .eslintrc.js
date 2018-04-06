module.exports = {
  extends: [
    'airbnb-base'
  ],

  parser: 'babel-eslint',

  plugins: [
    'babel',
    'import',
  ],

  rules: {
    'func-names': 0,
    curly: ['error', 'all']
  },
};
