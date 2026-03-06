# @camtomlabs/malix-design-system

Malix Design System combined package.

## Install

```bash
npm install @camtomlabs/malix-design-system
```

## Usage

Import the bundled styles once:

```ts
import '@camtomlabs/malix-design-system/styles.css';
```

Import components from the combined entrypoint:

```tsx
import { Button, Input, Card } from '@camtomlabs/malix-design-system';
```

You can also read the token registry:

```ts
import { tokenRegistry } from '@camtomlabs/malix-design-system';
```

## Note

This package publishes raw TypeScript source. Configure your bundler to transpile the package in
frameworks like Next.js.

## License

`UNLICENSED`
