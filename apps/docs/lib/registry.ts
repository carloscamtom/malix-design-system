export type ComponentMeta = {
  name: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
};

export const components: ComponentMeta[] = [
  // Form Inputs
  { name: 'Input', slug: 'input', description: 'Text input field with optional leading icon.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'InputGroup', slug: 'input-group', description: 'Labeled input with helper text and error state.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'SearchInput', slug: 'search-input', description: 'Pre-configured search input variant.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'Textarea', slug: 'textarea', description: 'Multi-line text input with label and validation.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'Select', slug: 'select', description: 'Native dropdown select with custom styling.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'SelectGroup', slug: 'select-group', description: 'Labeled wrapper for Select with helper text.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'DateInput', slug: 'date-input', description: 'Date picker input with native calendar.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'Toggle', slug: 'toggle', description: 'On/off switch control with optional label.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'Checkbox', slug: 'checkbox', description: 'Checkbox with indeterminate state support.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'Radio', slug: 'radio', description: 'Radio button for single-selection groups.', category: 'Form Inputs', categorySlug: 'form-inputs' },
  { name: 'ChatInput', slug: 'chat-input', description: 'Chat message input with send action.', category: 'Form Inputs', categorySlug: 'form-inputs' },

  // Buttons
  { name: 'Button', slug: 'button', description: 'Versatile button with 4 hierarchies and 4 layout variants.', category: 'Buttons', categorySlug: 'buttons' },

  // Navigation
  { name: 'SidebarItem', slug: 'sidebar-item', description: 'Individual sidebar navigation item.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'SidebarPanel', slug: 'sidebar-panel', description: 'Full sidebar panel with collapse support.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'FlyoutMenu', slug: 'flyout-menu', description: 'Dropdown menu with icon and label items.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'TabBar', slug: 'tab-bar', description: 'Horizontal tab navigation.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'FilterTabs', slug: 'filter-tabs', description: 'Tab navigation with count badges.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'Breadcrumb', slug: 'breadcrumb', description: 'Hierarchical page navigation trail.', category: 'Navigation', categorySlug: 'navigation' },
  { name: 'Header', slug: 'header', description: 'Page header with title and action slot.', category: 'Navigation', categorySlug: 'navigation' },

  // Feedback
  { name: 'Banner', slug: 'banner', description: 'Alert banner with semantic variants and dismiss.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'Badge', slug: 'badge', description: 'Small label for categorization and status.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'Pill', slug: 'pill', description: 'Status pill with 6 semantic color variants.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'StatusDot', slug: 'status-dot', description: 'Colored dot indicator with label.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'OperationStatus', slug: 'operation-status', description: 'Status indicator for async operations.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'ValidationAlert', slug: 'validation-alert', description: 'Inline validation message with icon.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'ProgressBar', slug: 'progress-bar', description: 'Progress indicator with label and percentage.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'Tooltip', slug: 'tooltip', description: 'Hover tooltip with 4 placement options.', category: 'Feedback', categorySlug: 'feedback' },
  { name: 'EmptyState', slug: 'empty-state', description: 'Placeholder for empty content areas.', category: 'Feedback', categorySlug: 'feedback' },

  // Layout
  { name: 'Card', slug: 'card', description: 'Content card with 3 elevation levels.', category: 'Layout', categorySlug: 'layout' },
  { name: 'Divider', slug: 'divider', description: 'Horizontal divider line.', category: 'Layout', categorySlug: 'layout' },
  { name: 'SectionHeader', slug: 'section-header', description: 'Section title with description and actions.', category: 'Layout', categorySlug: 'layout' },
  { name: 'SplitPane', slug: 'split-pane', description: 'Resizable split view with draggable handle.', category: 'Layout', categorySlug: 'layout' },

  // Overlays
  { name: 'Modal', slug: 'modal', description: 'Dialog modal with focus trap and actions.', category: 'Overlays', categorySlug: 'overlays' },
  { name: 'Overlay', slug: 'overlay', description: 'Base overlay panel with backdrop.', category: 'Overlays', categorySlug: 'overlays' },
  { name: 'GlassPopover', slug: 'glass-popover', description: 'Glassmorphism popover panel.', category: 'Overlays', categorySlug: 'overlays' },
  { name: 'OnboardingPopover', slug: 'onboarding-popover', description: 'Step-by-step onboarding tooltip.', category: 'Overlays', categorySlug: 'overlays' },

  // Data Display
  { name: 'DataTable', slug: 'data-table', description: 'Data table with custom columns and row actions.', category: 'Data Display', categorySlug: 'data-display' },
  { name: 'Pagination', slug: 'pagination', description: 'Page navigation in full and mini variants.', category: 'Data Display', categorySlug: 'data-display' },
  { name: 'Stepper', slug: 'stepper', description: 'Step progress indicator with status.', category: 'Data Display', categorySlug: 'data-display' },
  { name: 'StatCard', slug: 'stat-card', description: 'Statistics card with trend indicator.', category: 'Data Display', categorySlug: 'data-display' },
  { name: 'FileCard', slug: 'file-card', description: 'File display card with metadata and action.', category: 'Data Display', categorySlug: 'data-display' },
  { name: 'Avatar', slug: 'avatar', description: 'User avatar with initials and custom size.', category: 'Data Display', categorySlug: 'data-display' },

  // Interactive
  { name: 'SegmentedControl', slug: 'segmented-control', description: 'Segmented button group for toggling.', category: 'Interactive', categorySlug: 'interactive' },
  { name: 'Accordion', slug: 'accordion', description: 'Collapsible content section.', category: 'Interactive', categorySlug: 'interactive' },
  { name: 'SelectionCard', slug: 'selection-card', description: 'Selectable card option with active state.', category: 'Interactive', categorySlug: 'interactive' },
  { name: 'PricingCard', slug: 'pricing-card', description: 'Pricing plan card with features and CTA.', category: 'Interactive', categorySlug: 'interactive' },

  // Specialized
  { name: 'UserProfilePopover', slug: 'user-profile-popover', description: 'User profile menu with avatar and actions.', category: 'Specialized', categorySlug: 'specialized' },
  { name: 'CreditsIndicator', slug: 'credits-indicator', description: 'Credits remaining display.', category: 'Specialized', categorySlug: 'specialized' },
  { name: 'LanguageSelector', slug: 'language-selector', description: 'Language picker dropdown.', category: 'Specialized', categorySlug: 'specialized' },

  // Composite
  { name: 'Dropzone', slug: 'dropzone', description: 'File upload with drag and drop.', category: 'Composite', categorySlug: 'composite' },
];

export const categories = [...new Set(components.map((c) => c.category))];

export function getComponentsByCategory() {
  const grouped: Record<string, ComponentMeta[]> = {};
  for (const comp of components) {
    if (!grouped[comp.category]) grouped[comp.category] = [];
    grouped[comp.category].push(comp);
  }
  return grouped;
}
