/**
 * Malix Design System — Tailwind CSS Preset
 *
 * Usage:
 *   // tailwind.config.ts
 *   import malixPreset from '@camtomlabs/malix-design-system/tailwind.preset';
 *   export default { presets: [malixPreset], ... }
 *
 * All colors reference CSS custom properties so they adapt
 * automatically to light/dark mode via .dark or [data-theme="dark"].
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        malix: {
          /* Backgrounds / surfaces */
          bg: 'var(--malix-background-main)',
          surface: {
            DEFAULT: 'var(--malix-surface)',
            secondary: 'var(--malix-surface-secondary)',
            elevated: 'var(--malix-surface-elevated)',
            hover: 'var(--malix-surface-hover)',
            active: 'var(--malix-surface-active)',
            disabled: 'var(--malix-surface-disabled)',
          },

          /* Input */
          input: {
            bg: 'var(--malix-input-bg)',
            'autofill-bg': 'var(--malix-input-autofill-bg)',
          },

          /* Foreground / text */
          fg: {
            DEFAULT: 'var(--malix-foreground)',
            secondary: 'var(--malix-foreground-secondary)',
            tertiary: 'var(--malix-foreground-tertiary)',
            disabled: 'var(--malix-foreground-disabled)',
          },
          placeholder: 'var(--malix-placeholder)',

          /* Borders */
          border: {
            DEFAULT: 'var(--malix-border)',
            strong: 'var(--malix-border-strong)',
            focus: 'var(--malix-border-focus)',
            disabled: 'var(--malix-border-disabled)',
          },

          /* Primary */
          primary: {
            DEFAULT: 'var(--malix-primary)',
            hover: 'var(--malix-primary-hover)',
            active: 'var(--malix-primary-active)',
            foreground: 'var(--malix-primary-foreground)',
            light: 'var(--malix-primary-light)',
          },

          /* Semantic */
          success: {
            DEFAULT: 'var(--malix-success)',
            light: 'var(--malix-success-light)',
            foreground: 'var(--malix-success-foreground)',
          },
          warning: {
            DEFAULT: 'var(--malix-warning)',
            light: 'var(--malix-warning-light)',
            foreground: 'var(--malix-warning-foreground)',
          },
          error: {
            DEFAULT: 'var(--malix-error)',
            light: 'var(--malix-error-light)',
            foreground: 'var(--malix-error-foreground)',
          },
          info: {
            DEFAULT: 'var(--malix-info)',
            light: 'var(--malix-info-light)',
            foreground: 'var(--malix-info-foreground)',
          },

          /* Table */
          table: {
            'header-bg': 'var(--malix-table-header-bg)',
            'row-hover': 'var(--malix-table-row-hover)',
            border: 'var(--malix-table-border)',
          },

          /* Sidebar */
          sidebar: {
            bg: 'var(--malix-sidebar-bg)',
            hover: 'var(--malix-sidebar-hover-bg)',
            active: 'var(--malix-sidebar-active-bg)',
          },

          /* Glass */
          glass: {
            bg: 'var(--malix-glass-bg)',
            border: 'var(--malix-glass-border)',
          },

          overlay: 'var(--malix-overlay)',
          'overlay-backdrop': 'var(--malix-overlay-backdrop)',
        },
      },

      fontFamily: {
        malix: 'var(--malix-font-body)',
        'malix-heading': 'var(--malix-font-heading)',
      },

      fontSize: {
        'malix-xs': 'var(--malix-text-xs)',
        'malix-sm': 'var(--malix-text-sm)',
        'malix-base': 'var(--malix-text-base)',
        'malix-lg': 'var(--malix-text-lg)',
        'malix-xl': 'var(--malix-text-xl)',
        'malix-2xl': 'var(--malix-text-2xl)',
      },

      fontWeight: {
        'malix-normal': 'var(--malix-weight-normal)',
        'malix-medium': 'var(--malix-weight-medium)',
        'malix-semibold': 'var(--malix-weight-semibold)',
        'malix-bold': 'var(--malix-weight-bold)',
      },

      spacing: {
        'malix-xs': 'var(--malix-space-xs)',
        'malix-sm': 'var(--malix-space-sm)',
        'malix-md': 'var(--malix-space-md)',
        'malix-lg': 'var(--malix-space-lg)',
        'malix-xl': 'var(--malix-space-xl)',
        'malix-2xl': 'var(--malix-space-2xl)',
        'malix-3xl': 'var(--malix-space-3xl)',
      },

      borderRadius: {
        'malix-sm': 'var(--malix-radius-sm)',
        'malix-md': 'var(--malix-radius-md)',
        'malix-lg': 'var(--malix-radius-lg)',
        'malix-xl': 'var(--malix-radius-xl)',
        'malix-pill': 'var(--malix-radius-pill)',
      },

      boxShadow: {
        'malix-btn-primary': 'var(--malix-shadow-btn-primary)',
        'malix-btn-secondary': 'var(--malix-shadow-btn-secondary)',
        'malix-input': 'var(--malix-shadow-input)',
        'malix-depth': 'var(--malix-shadow-depth)',
        'malix-card': 'var(--malix-shadow-card-l1)',
        'malix-card-l2': 'var(--malix-shadow-card-l2)',
        'malix-card-l3': 'var(--malix-shadow-card-l3)',
        'malix-overlay': 'var(--malix-shadow-overlay)',
        'malix-tooltip': 'var(--malix-shadow-tooltip)',
        'malix-sidebar': 'var(--malix-shadow-sidebar)',
        'malix-header': 'var(--malix-shadow-header)',
        'malix-focus': 'var(--malix-focus-ring)',
      },

      zIndex: {
        'malix-dropdown': 'var(--malix-z-dropdown)',
        'malix-sticky': 'var(--malix-z-sticky)',
        'malix-overlay': 'var(--malix-z-overlay)',
        'malix-modal': 'var(--malix-z-modal)',
        'malix-tooltip': 'var(--malix-z-tooltip)',
        'malix-notification': 'var(--malix-z-notification)',
      },
    },
  },
};
