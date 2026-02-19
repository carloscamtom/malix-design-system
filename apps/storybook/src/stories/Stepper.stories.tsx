import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@malix/ui';

const meta = {
  title: 'Malix/Stepper',
  component: Stepper,
  args: {
    steps: [
      { label: 'Account', status: 'completed' },
      { label: 'Profile', status: 'active' },
      { label: 'Review', status: 'pending' },
    ],
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllCompleted: Story = {
  args: {
    steps: [
      { label: 'Account', status: 'completed' },
      { label: 'Profile', status: 'completed' },
      { label: 'Review', status: 'completed' },
    ],
  },
};

export const AllPending: Story = {
  args: {
    steps: [
      { label: 'Account', status: 'pending' },
      { label: 'Profile', status: 'pending' },
      { label: 'Review', status: 'pending' },
    ],
  },
};

export const FourSteps: Story = {
  args: {
    steps: [
      { label: 'Details', status: 'completed' },
      { label: 'Address', status: 'completed' },
      { label: 'Payment', status: 'active' },
      { label: 'Confirm', status: 'pending' },
    ],
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Stepper
        steps={[
          { label: 'Step 1', status: 'completed' },
          { label: 'Step 2', status: 'completed' },
          { label: 'Step 3', status: 'completed' },
        ]}
      />
      <Stepper
        steps={[
          { label: 'Step 1', status: 'completed' },
          { label: 'Step 2', status: 'active' },
          { label: 'Step 3', status: 'pending' },
        ]}
      />
      <Stepper
        steps={[
          { label: 'Step 1', status: 'pending' },
          { label: 'Step 2', status: 'pending' },
          { label: 'Step 3', status: 'pending' },
        ]}
      />
    </div>
  ),
};
