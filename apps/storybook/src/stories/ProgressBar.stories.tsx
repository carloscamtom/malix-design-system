import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '@malix/ui';

const meta = {
  title: 'Malix/ProgressBar',
  component: ProgressBar,
  args: {
    value: 60,
    label: 'Upload progress',
    showPercent: true,
    variant: 'default',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    value: 0,
    label: 'Not started',
  },
};

export const Half: Story = {
  args: {
    value: 50,
    label: 'Halfway there',
  },
};

export const Full: Story = {
  args: {
    value: 100,
    label: 'Complete',
    variant: 'success',
  },
};

export const Success: Story = {
  args: {
    value: 75,
    label: 'Processing',
    variant: 'success',
  },
};

export const NoLabel: Story = {
  args: {
    value: 45,
  },
};

export const NoPercent: Story = {
  args: {
    value: 70,
    label: 'Syncing files',
    showPercent: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <ProgressBar value={0} label="Not started" />
      <ProgressBar value={25} label="Getting started" />
      <ProgressBar value={50} label="Halfway" />
      <ProgressBar value={75} label="Almost done" />
      <ProgressBar value={100} label="Complete" variant="success" />
    </div>
  ),
};
