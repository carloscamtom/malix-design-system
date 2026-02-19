import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@malix/ui';

const meta = {
  title: 'Malix/Breadcrumb',
  component: Breadcrumb,
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Malix Design System' },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Settings' },
    ],
  },
};

export const DeepNesting: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Item Details' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Profile' },
    ],
    separator: <span>/</span>,
  },
};
