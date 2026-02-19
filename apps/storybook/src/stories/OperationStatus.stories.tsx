import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OperationStatus } from '@malix/ui';

const meta = {
  title: 'Malix/OperationStatus',
  component: OperationStatus,
  args: {
    status: 'active',
  },
} satisfies Meta<typeof OperationStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: { status: 'active' },
};

export const Completed: Story = {
  args: { status: 'completed' },
};

export const Failed: Story = {
  args: { status: 'failed' },
};

export const Pending: Story = {
  args: { status: 'pending' },
};

export const CustomLabel: Story = {
  args: { status: 'active', label: 'Processing...' },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <OperationStatus status="active" />
      <OperationStatus status="completed" />
      <OperationStatus status="failed" />
      <OperationStatus status="pending" />
    </div>
  ),
};
