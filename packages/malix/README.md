# @camtomlabs/malix-design-system

Malix Design System — a React component library by [Camtom Labs](https://camtomx.com). Ships pre-built with full TypeScript types, design tokens, and ready-to-use CSS.

## Installation

```bash
npm install @camtomlabs/malix-design-system
# or
pnpm add @camtomlabs/malix-design-system
# or
yarn add @camtomlabs/malix-design-system
```

**Peer dependencies** — make sure your project has these installed:

```bash
npm install react react-dom
```

## Setup

Import the bundled stylesheet once in your app's entry point (e.g. `main.tsx`, `layout.tsx`, or `_app.tsx`):

```ts
// Optional: opt-in reset scoped to @layer malix-reset.
// Import BEFORE styles.css so the layer order is established correctly.
import '@camtomlabs/malix-design-system/reset.css';

import '@camtomlabs/malix-design-system/styles.css';
```

That's it. All components are styled and ready to use.

### Why the reset is optional

`reset.css` lives inside `@layer malix-reset`, which means **any style you
write outside a layer will automatically win** — no specificity wars, no
`:not()` hacks. Use it if your project has a hostile global reset that
makes CSS Modules fight for background colors; skip it if you already
have your own reset.

Layer cascade order:

```
malix-reset  →  malix-tokens  →  malix-components  →  app
```

## Usage

```tsx
import { Button, Input, Card } from '@camtomlabs/malix-design-system';

export function MyPage() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button hierarchy="primary">Continue</Button>
    </Card>
  );
}
```

## Icons

Malix ships a canonical `<Icon>` wrapper that accepts any icon component
(lucide-react, phosphor-react, custom SVG) and enforces consistent
sizing and theming via `currentColor`.

```tsx
import { Icon } from '@camtomlabs/malix-design-system';
import { Plus, Search, Trash } from 'lucide-react';

<Icon as={Plus} size="md" label="Add item" />       // 16px, aria-label
<Icon as={Search} size="sm" />                       // decorative (aria-hidden)
<Icon as={Trash} size="lg" />                        // 20px
```

Sizes: `'xs'` (12px), `'sm'` (14px), `'md'` (16px), `'lg'` (20px), `'xl'` (24px), or a raw number.

## ESLint Plugin — enforce canonical components

Malix ships an ESLint plugin that catches raw `<button>` and `<input>`
elements and tells you to use `<Button>` / `<Input>` from the DS.

```js
// .eslintrc.cjs
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
extends: ['plugin:@camtomlabs/malix/recommended']
```

You can escape the rule with a standard disable comment when needed:

```tsx
// eslint-disable-next-line @camtomlabs/malix/no-raw-button
<button type="submit" form="external-form-id" />
```

The `no-raw-input` rule allows `type="hidden"` and `type="file"` by default.

## Theme Provider

Malix includes a React theme provider for managing dark mode:

```tsx
import { MalixThemeProvider, useMalixTheme } from '@camtomlabs/malix-design-system';

// Wrap your app
<MalixThemeProvider defaultTheme="system">
  <App />
</MalixThemeProvider>

// Use in any component
function ThemeToggle() {
  const { theme, toggleTheme } = useMalixTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
```

Supported themes: `'light'` | `'dark'` | `'system'`

## Design Tokens

Malix uses a CSS custom-property token system for colors, spacing, typography, and radius. You can also import the tokens stylesheet separately:

```ts
import '@camtomlabs/malix-design-system/tokens.css';
```

Or access the token registry programmatically:

```ts
import { tokenRegistry } from '@camtomlabs/malix-design-system';
```

### Quick Reference

| Category | Tokens |
|----------|--------|
| **Surfaces** | `--malix-surface`, `--malix-surface-secondary`, `--malix-surface-elevated` |
| **Card** | `--malix-card-bg`, `--malix-card-border`, `--malix-card-radius` |
| **Input** | `--malix-input-bg`, `--malix-input-border` |
| **Nav** | `--malix-nav-bg`, `--malix-nav-height` |
| **Text** | `--malix-foreground`, `--malix-foreground-secondary`, `--malix-foreground-tertiary` |
| **Primary** | `--malix-primary-bg`, `--malix-primary-hover`, `--malix-primary-active`, `--malix-primary-foreground` |
| **Semantic** | `--malix-success`, `--malix-warning`, `--malix-error`, `--malix-info` (each with `-light` and `-foreground`) |
| **Spacing** | `--malix-space-xs` (4px) through `--malix-space-3xl` (48px) |
| **Radius** | `--malix-radius-sm` (4px) through `--malix-radius-pill` (9999px) |
| **Typography** | `--malix-text-xs` (12px) through `--malix-text-display` (responsive) |
| **Layout** | `--malix-container-sm` (640px) through `--malix-container-xl` (1280px) |
| **Z-Index** | `--malix-z-dropdown` (100) through `--malix-z-notification` (600) |
| **Shadows** | `--malix-shadow-card-l1` / `l2` / `l3`, `--malix-shadow-overlay`, `--malix-shadow-tooltip` |

## Components

### Atoms
| Component | Description |
|-----------|-------------|
| `Avatar` | User avatar with image or initials fallback |
| `Badge` | Status or count indicator |
| `Divider` | Horizontal or vertical separator |
| `Pill` | Compact label/tag element |
| `StatusDot` | Small colored status indicator |

### Buttons
| Component | Description |
|-----------|-------------|
| `Button` | Primary action button with hierarchy and variant props |

### Form Inputs
| Component | Description |
|-----------|-------------|
| `Checkbox` | Checkbox input with label |
| `DateInput` | Date picker input |
| `Input` | Text input field |
| `InputGroup` | Grouped inputs with shared label/error |
| `Radio` | Radio button input |
| `SearchInput` | Input with built-in search icon |
| `Select` | Dropdown select |
| `SelectGroup` | Grouped select options |
| `Textarea` | Multi-line text input |
| `Toggle` | On/off toggle switch |

### Navigation
| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Breadcrumb trail navigation |
| `FilterTabs` | Horizontal tab filters |
| `FlyoutMenu` | Flyout dropdown navigation menu |
| `Header` | Top-level app header |
| `SidebarItem` | Individual sidebar navigation item |
| `SidebarPanel` | Full sidebar navigation panel |
| `TabBar` | Tab bar with multiple items |

### Layout
| Component | Description |
|-----------|-------------|
| `Card` | Surface container with elevation levels |
| `SectionHeader` | Page section heading with optional action |
| `SplitPane` | Resizable two-panel layout |

### Data Display
| Component | Description |
|-----------|-------------|
| `DataTable` | Sortable data table with columns/rows |
| `FileCard` | File attachment preview card |
| `Pagination` | Page navigation controls |
| `StatCard` | Metric card with change indicator |
| `Stepper` | Multi-step progress tracker |

### Feedback
| Component | Description |
|-----------|-------------|
| `Banner` | Full-width informational banner |
| `EmptyState` | Placeholder for empty content areas |
| `OperationStatus` | Async operation status display |
| `ProgressBar` | Linear progress indicator |
| `Tooltip` | Contextual hover tooltip |
| `ValidationAlert` | Inline form validation message |

### Overlays
| Component | Description |
|-----------|-------------|
| `GlassPopover` | Glassmorphism-styled popover |
| `Modal` | Full-screen modal dialog |
| `OnboardingPopover` | Guided onboarding popover |
| `Overlay` | Backdrop overlay layer |

### Interactive / Composite
| Component | Description |
|-----------|-------------|
| `Accordion` | Collapsible content sections |
| `ChatInput` | Rich chat message input |
| `CreditsIndicator` | Usage credits display |
| `Dropzone` | File drag-and-drop upload area |
| `LanguageSelector` | Locale/language switcher |
| `PricingCard` | Subscription plan pricing card |
| `SegmentedControl` | Multi-option segmented selector |
| `SelectionCard` | Selectable card option |
| `UserProfilePopover` | User profile menu popover |
| `ChatBubble` | AI/user message bubble for chat UIs |
| `AIAssistantPanel` | Full AI chat panel with messages and input |

## TypeScript

All components ship with TypeScript declarations. Named types are also exported for use in your own code:

```ts
import type { ButtonProps, ButtonHierarchy, ButtonVariant } from '@camtomlabs/malix-design-system';
```

## Package Exports

| Import path | Description |
|-------------|-------------|
| `@camtomlabs/malix-design-system` | All components and types |
| `@camtomlabs/malix-design-system/styles.css` | Full component stylesheet |
| `@camtomlabs/malix-design-system/tokens.css` | Design tokens only |
| `@camtomlabs/malix-design-system/tokens.registry.json` | Token registry JSON |

## License

MIT © [Camtom Labs](https://camtomx.com)
