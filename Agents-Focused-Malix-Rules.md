# Agents Focused Malix Rules

## Objective
Build UI in this repository using only Malix tokens and Malix components.
No surprise tokens. No surprise components.

## Hard Rules
- Use only tokens defined in `@malix/tokens/tokens.registry.json`.
- Do not use raw hex colors, ad-hoc box-shadows, or arbitrary spacing/radius values.
- Use components from `@malix/ui` for button/input/tooltip/modal-like primitives.
- If a token/component is missing, propose and centralize it first.

## Accessibility
- Keyboard navigation required.
- Visible focus states required.
- Icon-only buttons require `aria-label`.
- Tooltips must work on hover and focus.
- Modals/popovers close on ESC and trap focus.
