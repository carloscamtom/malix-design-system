import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@malix/ui';
import { Plus, Settings, Bell, Download, ArrowRight } from 'lucide-react';

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
    icon: <Download size={16} />,
    children: 'Download'
  }
};

export const IconOnly: Story = {
  args: {
    variant: 'icon-only',
    hierarchy: 'ghost',
    icon: <Settings size={16} />,
    label: 'Open settings'
  }
};

export const IconWithBadge: Story = {
  args: {
    variant: 'icon-badge',
    hierarchy: 'primary',
    icon: <Bell size={16} />,
    badge: '3',
    children: 'Notifications'
  }
};

export const Primary: Story = {
  args: {
    variant: 'leading-icon-text',
    hierarchy: 'primary',
    icon: <Plus size={16} />,
    children: 'Create project'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'leading-icon-text',
    hierarchy: 'secondary',
    icon: <Download size={16} />,
    children: 'Download report'
  }
};

export const Tertiary: Story = {
  args: {
    variant: 'leading-icon-text',
    hierarchy: 'tertiary',
    icon: <Settings size={16} />,
    children: 'Settings'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'leading-icon-text',
    hierarchy: 'ghost',
    icon: <ArrowRight size={16} />,
    children: 'Continue'
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
