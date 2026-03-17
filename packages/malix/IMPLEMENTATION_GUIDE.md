# Malix Design System — Implementation Guide

## Quick Start

### 1. Install

```bash
npm install @camtomlabs/malix-design-system
# or
pnpm add @camtomlabs/malix-design-system
```

### 2. Import CSS (single import — includes tokens)

```tsx
// app/layout.tsx or main entry point
import '@camtomlabs/malix-design-system/css';
```

This single import loads both **tokens** (CSS custom properties) and **component styles**.

> **Do NOT import `tokens.css` separately** — `styles.css` already includes it via `@import`.

### 3. Import components

```tsx
import { Button, Input, Card, DataTable, Modal } from '@camtomlabs/malix-design-system';
```

### 4. (Optional) Tailwind integration

```ts
// tailwind.config.ts
import malixPreset from '@camtomlabs/malix-design-system/tailwind.preset';

export default {
  presets: [malixPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

Now you can use Malix tokens as Tailwind utilities:

```html
<div class="bg-malix-surface text-malix-fg border border-malix-border rounded-malix-md p-malix-lg">
  <p class="text-malix-fg-secondary text-malix-sm">Hello</p>
</div>
```

---

## Dark Mode

Add `.dark` class to `<html>` or use `[data-theme="dark"]`:

```html
<html class="dark">
```

All tokens auto-switch. No extra imports needed.

### Autofill fix for dark mode

Use the `--malix-input-autofill-bg` token to fix browser autofill backgrounds:

```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px var(--malix-input-autofill-bg) inset !important;
  -webkit-text-fill-color: var(--malix-foreground) !important;
}
```

---

## Token Reference

### Surfaces & Backgrounds

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--malix-background-main` | Page background | `#ffffff` | `#010510` |
| `--malix-surface` | Card/panel fill | `#ffffff` | `#000413` |
| `--malix-surface-secondary` | Subtle bg (section bg, alternating rows) | `#f9fafb` | `#1c232d` |
| `--malix-surface-elevated` | Floating elements (modals, popovers) | `#ffffff` | `#0f172a` |
| `--malix-surface-hover` | Hover state for interactive surfaces | `#f3f4f6` | `#475569` |
| `--malix-surface-active` | Active/pressed state | `#f3f4f6` | `#475569` |
| `--malix-surface-disabled` | Disabled backgrounds | `#f9fafb` | `#1c232d` |
| `--malix-input-bg` | Input fields | `#ffffff` | `#0f172a` |

### Text & Foreground

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--malix-foreground` | Primary text | `#111827` | `#F9FAFB` |
| `--malix-foreground-secondary` | Secondary text, descriptions | `#6b7280` | `#dfdfdf` |
| `--malix-foreground-tertiary` | Icons, helper text | `#9ca3af` | `#6B7280` |
| `--malix-foreground-disabled` | Disabled text | `#d1d5db` | `#475569` |
| `--malix-placeholder` | Input placeholder text | `#9ca3af` | `#6B7280` |

### Primary & Brand

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--malix-primary` | Links, active tabs, sidebar active, spinners, primary actions | `#004a7c` | `#005ce8` |
| `--malix-primary-hover` | Hover on primary elements | `#003a63` | `#0351cf` |
| `--malix-primary-active` | Active/pressed on primary | `#002e4f` | `#1037a3` |
| `--malix-primary-foreground` | Text on primary background | `#ffffff` | `#FFFFFF` |
| `--malix-primary-light` | Subtle primary bg (badges, pills, sidebar active) | `#e6f0f7` | `#082b59` |

> `--malix-cta-primary-bg` still works (references `--malix-primary`) but prefer `--malix-primary`.

### Semantic Colors

Each semantic color has three tokens: `base`, `-light` (background), `-foreground` (text on light bg).

| Set | Base | Light bg | Foreground |
|---|---|---|---|
| Success | `--malix-success` | `--malix-success-light` | `--malix-success-foreground` |
| Warning | `--malix-warning` | `--malix-warning-light` | `--malix-warning-foreground` |
| Error | `--malix-error` | `--malix-error-light` | `--malix-error-foreground` |
| Info | `--malix-info` | `--malix-info-light` | `--malix-info-foreground` |

Example — semantic badge:
```html
<span style="background: var(--malix-success-light); color: var(--malix-success-foreground)">
  Active
</span>
```

Or use the `Pill` component:
```tsx
<Pill variant="success">Active</Pill>
<Pill variant="error">Expired</Pill>
<Pill variant="warning">Pending</Pill>
<Pill variant="info">Beta</Pill>
```

### Borders

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--malix-border` | Default borders (cards, dividers, inputs) | `#e5e7eb` | `#334155` |
| `--malix-border-strong` | Emphasized borders | `#d1d5db` | `#475569` |
| `--malix-border-focus` | Focus ring border color | `#004a7c` | `#60A5FA` |
| `--malix-border-disabled` | Disabled state borders | `#e5e7eb` | `#334155` |
| `--malix-focus-ring` | Focus ring box-shadow (use with `box-shadow`) | — | — |

### Table

| Token | Use for |
|---|---|
| `--malix-table-header-bg` | Table header row background |
| `--malix-table-row-hover` | Row hover background |
| `--malix-table-border` | Row divider borders |

### Overlays

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--malix-overlay` | Semi-transparent overlay for general use | `#00000066` | `#00000099` |
| `--malix-overlay-backdrop` | Modal/dialog backdrop | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.6)` |

### Z-Index Scale

Use these instead of arbitrary numbers:

| Token | Value | Use for |
|---|---|---|
| `--malix-z-dropdown` | 100 | Dropdown menus, selects |
| `--malix-z-sticky` | 200 | Sticky headers, sidebars |
| `--malix-z-overlay` | 300 | Overlay backdrops |
| `--malix-z-modal` | 400 | Modal dialogs |
| `--malix-z-tooltip` | 500 | Tooltips |
| `--malix-z-notification` | 600 | Toast notifications |

With Tailwind preset: `z-malix-modal`, `z-malix-tooltip`, etc.

### Spacing

| Token | Value |
|---|---|
| `--malix-space-xs` | 4px |
| `--malix-space-sm` | 8px |
| `--malix-space-md` | 12px |
| `--malix-space-lg` | 16px |
| `--malix-space-xl` | 24px |
| `--malix-space-2xl` | 32px |
| `--malix-space-3xl` | 48px |

### Border Radius

| Token | Value | Use for |
|---|---|---|
| `--malix-radius-sm` | 4px | Small elements, tags |
| `--malix-radius-md` | 8px | Inputs, buttons, cards |
| `--malix-radius-lg` | 12px | Cards, panels |
| `--malix-radius-xl` | 16px | Large cards, modals |
| `--malix-radius-pill` | 9999px | Pills, full-round buttons |

### Typography

| Token | Value |
|---|---|
| `--malix-text-xs` | 12px |
| `--malix-text-sm` | 13px |
| `--malix-text-base` | 14px |
| `--malix-text-lg` | 16px |
| `--malix-text-xl` | 20px |
| `--malix-text-2xl` | 24px |
| `--malix-font-body` | Geist, sans-serif |
| `--malix-font-heading` | Geist, sans-serif |
| `--malix-weight-normal` | 400 |
| `--malix-weight-medium` | 500 |
| `--malix-weight-semibold` | 600 |
| `--malix-weight-bold` | 700 |

### Shadows

| Token | Use for |
|---|---|
| `--malix-shadow-card-l1` | Subtle card (default) |
| `--malix-shadow-card-l2` | Medium elevation |
| `--malix-shadow-card-l3` | High elevation (modals) |
| `--malix-shadow-overlay` | Overlay panels |
| `--malix-shadow-tooltip` | Tooltips |
| `--malix-shadow-depth` | General depth effect |
| `--malix-shadow-btn-primary` | Primary button |
| `--malix-shadow-header` | Sticky header |
| `--malix-shadow-sidebar` | Sidebar edge |

---

## Components

### All available components

| Component | Import | Key props |
|---|---|---|
| `Button` | `{ Button }` | `hierarchy`, `variant`, `size`, `icon`, `loading` |
| `Input` | `{ Input }` | `leadingIcon`, all native input props |
| `SearchInput` | `{ SearchInput }` | Preconfigured search input |
| `InputGroup` | `{ InputGroup }` | `label`, `error`, `helper`, `icon` |
| `Select` | `{ Select }` | `options`, `value`, `onChange` |
| `SelectGroup` | `{ SelectGroup }` | Labeled select wrapper |
| `Textarea` | `{ Textarea }` | Textarea with label and validation |
| `DateInput` | `{ DateInput }` | Date picker input |
| `Checkbox` | `{ Checkbox }` | `checked`, `onChange`, `label` |
| `Radio` | `{ Radio }` | `checked`, `onChange`, `label` |
| `Toggle` | `{ Toggle }` | `checked`, `onChange`, `label` |
| `Card` | `{ Card }` | `level` (1/2/3 for shadow depth) |
| `DataTable` | `{ DataTable }` | `columns`, `data`, `onRowClick` |
| `Pagination` | `{ Pagination }` | Page navigation |
| `Pill` | `{ Pill }` | `variant`: default/primary/success/error/warning/info |
| `Badge` | `{ Badge }` | Semantic badge with variants |
| `StatusDot` | `{ StatusDot }` | Small status indicator |
| `Modal` | `{ Modal }` | `open`, `title`, `onClose`, `onConfirm` |
| `ConfirmDialog` | `{ ConfirmDialog }` | `variant`: default/danger/warning/info |
| `Overlay` | `{ Overlay }` | Full-screen overlay |
| `GlassPopover` | `{ GlassPopover }` | Glassmorphism popover |
| `Tooltip` | `{ Tooltip }` | `placement`: top/bottom/left/right |
| `Accordion` | `{ Accordion }` | Collapsible content |
| `Banner` | `{ Banner }` | Full-width notification banner |
| `ValidationAlert` | `{ ValidationAlert }` | Inline validation message |
| `OperationStatus` | `{ OperationStatus }` | Status indicator for operations |
| `Divider` | `{ Divider }` | Horizontal rule |
| `Avatar` | `{ Avatar }` | User avatar with initials |
| `Header` | `{ Header }` | Page header bar |
| `SidebarPanel` | `{ SidebarPanel }` | Sidebar layout container |
| `SidebarItem` | `{ SidebarItem }` | Sidebar navigation item |
| `FlyoutMenu` | `{ FlyoutMenu }` | Dropdown menu |
| `Breadcrumb` | `{ Breadcrumb }` | Breadcrumb navigation |
| `TabBar` | `{ TabBar }` | Tab navigation |
| `FilterTabs` | `{ FilterTabs }` | Filter toggle tabs |
| `SegmentedControl` | `{ SegmentedControl }` | Segmented toggle |
| `SectionHeader` | `{ SectionHeader }` | Section title with optional action |
| `Stepper` | `{ Stepper }` | Multi-step progress |
| `ProgressBar` | `{ ProgressBar }` | Progress indicator |
| `EmptyState` | `{ EmptyState }` | Empty data placeholder |
| `StatCard` | `{ StatCard }` | Metric display card |
| `FileCard` | `{ FileCard }` | File display card |
| `Dropzone` | `{ Dropzone }` | File upload area |
| `SelectionCard` | `{ SelectionCard }` | Selectable option card |
| `PricingCard` | `{ PricingCard }` | Pricing tier card |
| `SplitPane` | `{ SplitPane }` | Resizable split layout |
| `ChatInput` | `{ ChatInput }` | Chat message input |
| `ChatBubble` | `{ ChatBubble }` | Chat message bubble |
| `AIAssistantPanel` | `{ AIAssistantPanel }` | AI chat panel |
| `OnboardingPopover` | `{ OnboardingPopover }` | Onboarding tooltip |
| `UserProfilePopover` | `{ UserProfilePopover }` | User menu popover |
| `CreditsIndicator` | `{ CreditsIndicator }` | Usage credits display |
| `LanguageSelector` | `{ LanguageSelector }` | Language picker |

---

## Common Patterns

### Button

```tsx
// Primary (default)
<Button>Save</Button>

// Secondary with icon
<Button hierarchy="secondary" icon={<IconPlus />}>Add Item</Button>

// Danger action
<Button hierarchy="danger">Delete</Button>

// Outline
<Button hierarchy="outline">View Details</Button>

// Ghost (minimal)
<Button hierarchy="ghost" variant="icon-only" icon={<IconX />} label="Close" />

// Pill shape
<Button variant="pill" hierarchy="primary">Subscribe</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Loading
<Button loading>Saving...</Button>
```

### Confirm Dialog (replaces custom modals)

```tsx
<ConfirmDialog
  open={showDelete}
  variant="danger"
  title="Delete organization?"
  description="This action cannot be undone. All data will be permanently removed."
  confirmLabel="Delete"
  cancelLabel="Cancel"
  onConfirm={handleDelete}
  onCancel={() => setShowDelete(false)}
  icon={<TrashIcon />}
/>
```

Variants: `default`, `danger`, `warning`, `info`

### Data Table

```tsx
<DataTable
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status', render: (val) => <Pill variant={val === 'active' ? 'success' : 'error'}>{val}</Pill> },
    { key: 'plan', header: 'Plan', render: (val) => <Pill variant="info">{val}</Pill> },
  ]}
  data={organizations}
  onRowClick={(row) => navigate(`/org/${row.id}`)}
/>
```

### Form Inputs

```tsx
<InputGroup
  label="Email"
  helper="We'll never share your email"
  error={errors.email}
>
  <Input type="email" placeholder="name@company.com" />
</InputGroup>

<SelectGroup label="Country">
  <Select options={countries} value={country} onChange={setCountry} />
</SelectGroup>

<Toggle label="Enable notifications" checked={notifs} onChange={setNotifs} />
```

### Card with elevation

```tsx
<Card level={1}>  {/* Subtle shadow */}
  <Card level={2}>  {/* Medium */}
    <Card level={3}>  {/* High — use for focused content */}
```

---

## Tailwind Utility Mapping

When using the Tailwind preset, these utilities become available:

| CSS Token | Tailwind class |
|---|---|
| `--malix-primary` | `bg-malix-primary`, `text-malix-primary` |
| `--malix-surface` | `bg-malix-surface` |
| `--malix-surface-secondary` | `bg-malix-surface-secondary` |
| `--malix-foreground` | `text-malix-fg` |
| `--malix-foreground-secondary` | `text-malix-fg-secondary` |
| `--malix-border` | `border-malix-border` |
| `--malix-error` | `text-malix-error`, `bg-malix-error` |
| `--malix-success-light` | `bg-malix-success-light` |
| `--malix-radius-md` | `rounded-malix-md` |
| `--malix-space-lg` | `p-malix-lg`, `gap-malix-lg` |
| `--malix-shadow-card-l1` | `shadow-malix-card` |
| `--malix-z-modal` | `z-malix-modal` |
| `--malix-input-bg` | `bg-malix-input-bg` |
| `--malix-table-header-bg` | `bg-malix-table-header-bg` |
| `--malix-placeholder` | `text-malix-placeholder` |

---

## Stylelint Config

Malix ships an exportable Stylelint config that enforces token usage and prevents common issues:

```bash
pnpm add -D stylelint
```

Create or extend your `.stylelintrc.cjs`:

```js
module.exports = {
  extends: ['@camtomlabs/malix-design-system/stylelint.config'],
};
```

### What it enforces

| Rule | What it catches | Severity |
|---|---|---|
| `declaration-no-important` | `!important` usage (except documented overrides) | Warning |
| `color-no-hex` | Hardcoded hex colors instead of `var(--malix-*)` | Warning |
| `z-index allowed list` | Arbitrary z-index values instead of `--malix-z-*` tokens | Warning |

All rules are set to `warning` so they won't block builds during migration — but they will surface in editor and CI output.

---

## Rules

1. **Never hardcode hex colors** — always use `var(--malix-*)` or Tailwind malix utilities
2. **Never use arbitrary z-index** — use `--malix-z-*` scale
3. **Never use `var(--token, #fallback)`** — if the token doesn't load, the CSS import is missing
4. **One CSS import** — `@camtomlabs/malix-design-system/css` includes everything
5. **Use semantic tokens** — `--malix-primary` for any brand-colored element (not just buttons)
6. **Dark mode is free** — if you use tokens, dark mode works automatically
