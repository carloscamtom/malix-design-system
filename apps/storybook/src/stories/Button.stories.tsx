import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@malix/ui';

const meta = {
  title: 'Malix/Button',
  component: Button,
  args: {
    children: 'Create project'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    hierarchy: 'primary'
  }
};

export const LeadingIconText: Story = {
  args: {
    variant: 'leading-icon-text',
    hierarchy: 'secondary',
    icon: '🔍',
    children: 'Search docs'
  }
};

export const IconOnly: Story = {
  args: {
    variant: 'icon-only',
    hierarchy: 'ghost',
    icon: '⚙️',
    label: 'Open settings'
  }
};

export const IconWithBadge: Story = {
  args: {
    variant: 'icon-badge',
    hierarchy: 'primary',
    icon: '🔔',
    badge: '3',
    children: 'Notifications'
  }
};

export const Disabled: Story = {
  args: {
    hierarchy: 'primary',
    disabled: true,
    children: 'Disabled state'
  }
};

export const Loading: Story = {
  args: {
    hierarchy: 'primary',
    loading: true,
    children: 'Saving'
  }
};
