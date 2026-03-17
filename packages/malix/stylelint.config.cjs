/**
 * Malix Design System — Stylelint Config
 *
 * Extend this in your project:
 *
 *   // .stylelintrc.cjs
 *   module.exports = {
 *     extends: ['@camtomlabs/malix-design-system/stylelint.config'],
 *   };
 */

/** @type {import('stylelint').Config} */
module.exports = {
  rules: {
    // Prevent !important — except for known override contexts
    'declaration-no-important': [
      true,
      {
        message:
          'Avoid !important — use token specificity or data-attributes. If overriding a third-party library, add a comment explaining why.',
        severity: 'warning',
      },
    ],

    // Flag hardcoded hex colors — encourage token usage
    'color-no-hex': [
      true,
      {
        message:
          'Use a Malix token instead of a hex color: var(--malix-*). See token reference at https://malix.camtom.com/docs/tokens',
        severity: 'warning',
      },
    ],

    // Flag arbitrary z-index values — use the --malix-z-* scale
    'declaration-property-value-allowed-list': [
      {
        'z-index': [
          'auto',
          'inherit',
          'initial',
          'unset',
          '-1',
          '0',
          '1',
          '/var\\(--malix-z-/',
        ],
      },
      {
        message:
          'Use a Malix z-index token: var(--malix-z-dropdown|sticky|overlay|modal|tooltip|notification). Arbitrary z-index values cause stacking conflicts.',
        severity: 'warning',
      },
    ],
  },
};
