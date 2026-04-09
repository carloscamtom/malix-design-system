/**
 * @camtomlabs/eslint-plugin-malix
 *
 * ESLint plugin published as a sibling to @camtomlabs/malix-design-system
 * so that the classic ESLint config (eslint 8) can resolve plugin names
 * like `@camtomlabs/malix` to this package automatically.
 *
 * The single source of truth lives in the main package at
 * `@camtomlabs/malix-design-system/eslint-plugin`. This file is a thin
 * re-export so both installation styles work:
 *
 *   // Classic config (.eslintrc.cjs)
 *   module.exports = {
 *     plugins: ['@camtomlabs/malix'],
 *     rules: {
 *       '@camtomlabs/malix/no-raw-button': 'warn',
 *       '@camtomlabs/malix/no-raw-input': 'warn',
 *     },
 *   };
 *
 *   // Flat config (eslint.config.js, ESLint 9+)
 *   import malix from '@camtomlabs/eslint-plugin-malix';
 *   export default [{
 *     plugins: { '@camtomlabs/malix': malix },
 *     rules: {
 *       '@camtomlabs/malix/no-raw-button': 'warn',
 *       '@camtomlabs/malix/no-raw-input': 'warn',
 *     },
 *   }];
 */

'use strict';

module.exports = require('@camtomlabs/malix-design-system/eslint-plugin');
