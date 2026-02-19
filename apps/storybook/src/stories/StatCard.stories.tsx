import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '@malix/ui';

const meta = {
  title: 'Malix/StatCard',
  component: StatCard,
  args: {
    label: 'Total Revenue',
    value: '$48,200',
    change: '+12.5%',
    changeType: 'positive',
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positive: Story = {
  args: {
    label: 'Active Users',
    value: '1,234',
    change: '+8.2%',
    changeType: 'positive',
  },
};

export const Negative: Story = {
  args: {
    label: 'Churn Rate',
    value: '3.1%',
    change: '-0.5%',
    changeType: 'negative',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Avg. Session',
    value: '4m 32s',
    change: '0%',
    changeType: 'neutral',
  },
};

export const NoChange: Story = {
  args: {
    label: 'Total Projects',
    value: '86',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <StatCard label="Revenue" value="$48,200" change="+12.5%" changeType="positive" />
      <StatCard label="Churn Rate" value="3.1%" change="-0.5%" changeType="negative" />
      <StatCard label="Avg. Session" value="4m 32s" change="0%" changeType="neutral" />
      <StatCard label="Total Projects" value="86" />
    </div>
  ),
};
