module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': [2, 'unix'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-var': 2,
    'prefer-const': 2,
    semi: [2, 'always'],
  },
};
