import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from '@malix/ui';

const defaultItems = [
  { label: 'Overview', value: 'overview' },
  { label: 'Activity', value: 'activity' },
  { label: 'Settings', value: 'settings' },
];

function TabBarExample({ items = defaultItems }: { items?: { label: string; value: string }[] }) {
  const [value, setValue] = useState(items[0]?.value ?? '');
  return <TabBar items={items} value={value} onChange={setValue} />;
}

const meta = {
  title: 'Malix/TabBar',
  component: TabBarExample,
} satisfies Meta<typeof TabBarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoTabs: Story = {
  args: {
    items: [
      { label: 'Inbox', value: 'inbox' },
      { label: 'Sent', value: 'sent' },
    ],
  },
};

export const FiveTabs: Story = {
  args: {
    items: [
      { label: 'Home', value: 'home' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
      { label: 'Reports', value: 'reports' },
      { label: 'Settings', value: 'settings' },
    ],
  },
};
