// .eslintrc.cjs
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = [
  ...compat.extends('eslint:recommended'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      // Add custom rules if needed
    },
  },
];
