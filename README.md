# Malix Design System

Monorepo for the published Malix Design System npm packages.

This repository enforces two core constraints:
- No surprise tokens
- No surprise components

## Repository structure

- `packages/malix` (`@camtomlabs/malix-design-system`)
  - published package with components, bundled styles, token CSS, and token registry
- `packages/tokens`
  - internal token source of truth used to maintain the published package contents
  - `tokens.css`: CSS variables with `--malix-*` naming
  - `tokens.registry.json`: closed list of allowed tokens
- `packages/ui`
  - internal React component source of truth used to maintain the published package contents
- `apps/storybook`
  - Storybook for component validation and documentation
- `scripts/validate-tokens.mjs`
  - Validator that fails if code uses unknown `var(--malix-...)` tokens

## Published packages

```bash
npm install @camtomlabs/malix-design-system
```

## Install and run locally

```bash
pnpm install
pnpm dev
```

- `pnpm dev` runs Storybook at `http://localhost:6006`.

## Scripts

```bash
pnpm lint   # eslint + no-surprise-token validator
pnpm test   # no-surprise-token validator
pnpm build  # build all workspaces
```

## Using the combined package

Import the bundled styles once:

```ts
import '@camtomlabs/malix-design-system/styles.css';
```

Import components from the single package entrypoint:

```tsx
import { Button, SearchInput, Tooltip, Overlay } from '@camtomlabs/malix-design-system';
```

## Using tokens directly

Import token CSS globally:

```ts
import '@camtomlabs/malix-design-system/tokens.css';
```

Use tokens only through CSS variables:

```css
.button {
  background: var(--malix-primary-bg);
  color: var(--malix-primary-foreground);
  box-shadow: var(--malix-shadow-depth);
}
```

Do not use raw hex colors, ad-hoc shadows, or one-off spacing/radius values in feature code.

V1 component scope:
- `Button` (text, leading icon + text, icon-only, icon + badge)
- `Input` / `SearchInput`
- `Tooltip` (hover + focus, `aria-describedby`)
- `Overlay` glass modal/popover base (ESC close + focus trap)

## Change policy: new tokens/components

New tokens or primitives are approval-gated.

### Propose a new token
1. Open a proposal with token name, purpose, and usage context.
2. Wait for approval.
3. Update centrally in:
   - `packages/tokens/tokens.css`
   - `packages/tokens/tokens.registry.json`
4. Add/adjust Storybook coverage if needed.

### Propose a new component
1. Open a proposal with use case and API.
2. Wait for approval.
3. Add implementation in `@camtomlabs/malix-design-system` using tokens only.
4. Add stories in `apps/storybook`.

## CI

GitHub Actions runs:
- `pnpm lint`
- `pnpm test`
- `pnpm build`

This guarantees token policy validation in every PR.

## License

This repository and the published packages currently ship as `UNLICENSED` until a distribution
license is chosen.
