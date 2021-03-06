module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'indent': [2, 2],
    'linebreak-style': [2,'unix'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-var': 2,
    'prefer-const': 2,
    'quotes': [2,'single'],
    'semi': [2,'always']
  }
};
