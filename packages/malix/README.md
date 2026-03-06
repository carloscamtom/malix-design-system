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
import '@camtomlabs/malix-design-system/styles.css';
```

That's it. All components are styled and ready to use.

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

## Design Tokens

Malix uses a CSS custom-property token system for colors, spacing, typography, and radius. You can also import the tokens stylesheet separately:

```ts
import '@camtomlabs/malix-design-system/tokens.css';
```

Or access the token registry programmatically:

```ts
import { tokenRegistry } from '@camtomlabs/malix-design-system';
```

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
