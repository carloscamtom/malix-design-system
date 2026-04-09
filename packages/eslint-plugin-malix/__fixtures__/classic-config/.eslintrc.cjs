module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@camtomlabs/malix'],
  rules: {
    '@camtomlabs/malix/no-raw-button': 'error',
    '@camtomlabs/malix/no-raw-input': 'error',
  },
};
