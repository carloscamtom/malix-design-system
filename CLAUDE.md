# Malix Design System

Enterprise design system for Camtom products. Package: `@camtomlabs/malix-design-system`

## Architecture

```
packages/
  malix/          ← Main published package (components + tokens + styles)
  tokens/         ← Standalone tokens package (@camtomlabs/malix-tokens)
  ui/             ← Internal UI experiments
apps/
  docs/           ← Fumadocs documentation site
  storybook/      ← Component playground
```

## Token naming convention

All CSS custom properties use `--malix-` prefix. Tokens are semantic, not literal:
- `--malix-primary` (not `--malix-blue-700`)
- `--malix-surface-elevated` (not `--malix-white`)
- `--malix-error` (not `--malix-red-600`)

## Dark mode

Tokens auto-switch via `.dark` class or `[data-theme="dark"]` attribute. Never hardcode hex colors in components — always reference tokens.

## Component pattern

Components use CSS classes (`.malix-*`) with `data-*` attributes for variants:
```tsx
<button className="malix-button" data-hierarchy="primary" data-variant="pill" data-size="sm">
```

## Scripts

- `pnpm dev` — Storybook dev
- `pnpm build` — Build all packages
- `pnpm lint` — ESLint + token validation
- `pnpm test` — Token validation (ensures no undeclared tokens)
