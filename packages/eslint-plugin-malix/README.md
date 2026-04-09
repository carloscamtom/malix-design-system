# @camtomlabs/eslint-plugin-malix

ESLint plugin for the [Malix Design System](https://www.npmjs.com/package/@camtomlabs/malix-design-system). Enforces the use of canonical `<Button>` and `<Input>` components over raw HTML elements.

This is the sibling plugin package that lets ESLint's classic config resolve the plugin name `@camtomlabs/malix` automatically. The rules themselves live in `@camtomlabs/malix-design-system/eslint-plugin`; this package is a thin re-export.

## Install

```bash
pnpm add -D @camtomlabs/eslint-plugin-malix @camtomlabs/malix-design-system
```

Both packages are peer dependencies of each other.

## Usage — classic config (`.eslintrc.cjs`)

```js
module.exports = {
  plugins: ['@camtomlabs/malix'],
  rules: {
    '@camtomlabs/malix/no-raw-button': 'warn',
    '@camtomlabs/malix/no-raw-input': 'warn',
  },
};
```

Or use the recommended preset:

```js
extends: ['plugin:@camtomlabs/malix/recommended'],
```

## Usage — flat config (`eslint.config.js`, ESLint 9+)

```js
import malix from '@camtomlabs/eslint-plugin-malix';

export default [
  {
    plugins: { '@camtomlabs/malix': malix },
    rules: {
      '@camtomlabs/malix/no-raw-button': 'warn',
      '@camtomlabs/malix/no-raw-input': 'warn',
    },
  },
];
```

## Rules

### `@camtomlabs/malix/no-raw-button`

Disallows raw `<button>` elements. Use `<Button hierarchy="primary">` from `@camtomlabs/malix-design-system` instead.

### `@camtomlabs/malix/no-raw-input`

Disallows raw `<input>` elements except `type="hidden"` and `type="file"` (configurable via `allowTypes`). Use `<Input>` from `@camtomlabs/malix-design-system` instead.

```js
'@camtomlabs/malix/no-raw-input': ['warn', { allowTypes: ['hidden', 'file', 'submit'] }],
```

## Escape hatch

When a raw element is truly needed, use the standard ESLint disable comment:

```tsx
// eslint-disable-next-line @camtomlabs/malix/no-raw-button
<button type="submit" form="external-form-id" />
```

## License

MIT © [Camtom Labs](https://camtomx.com)
