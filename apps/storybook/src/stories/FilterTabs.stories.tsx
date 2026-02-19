import type { Meta, StoryObj } from '@storybook/react';
import { FilterTabs } from '@malix/ui';

const meta = {
  title: 'Malix/FilterTabs',
  component: FilterTabs,
  args: {
    items: [
      { label: 'All', value: 'all', count: 42 },
      { label: 'Active', value: 'active', count: 28 },
      { label: 'Archived', value: 'archived', count: 14 },
    ],
    value: 'all',
    onChange: () => {},
  },
} satisfies Meta<typeof FilterTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabActive: Story = {
  args: {
    value: 'active',
  },
};

export const WithoutCounts: Story = {
  args: {
    items: [
      { label: 'Overview', value: 'overview' },
      { label: 'Analytics', value: 'analytics' },
      { label: 'Settings', value: 'settings' },
    ],
    value: 'overview',
  },
};

export const ManyTabs: Story = {
  args: {
    items: [
      { label: 'All', value: 'all', count: 120 },
      { label: 'Pending', value: 'pending', count: 34 },
      { label: 'In Progress', value: 'in-progress', count: 45 },
      { label: 'Completed', value: 'completed', count: 38 },
      { label: 'Cancelled', value: 'cancelled', count: 3 },
    ],
    value: 'all',
  },
};
