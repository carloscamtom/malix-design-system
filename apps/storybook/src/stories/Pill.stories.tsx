import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from '@malix/ui';

const meta = {
  title: 'Malix/Pill',
  component: Pill,
  args: {
    children: 'Label',
    variant: 'default',
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Default', variant: 'default' } };
export const Primary: Story = { args: { children: 'Primary', variant: 'primary' } };
export const Success: Story = { args: { children: 'Success', variant: 'success' } };
export const Error: Story = { args: { children: 'Error', variant: 'error' } };
export const Warning: Story = { args: { children: 'Warning', variant: 'warning' } };
export const Info: Story = { args: { children: 'Info', variant: 'info' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Pill variant="default">Default</Pill>
      <Pill variant="primary">Primary</Pill>
      <Pill variant="success">Success</Pill>
      <Pill variant="error">Error</Pill>
      <Pill variant="warning">Warning</Pill>
      <Pill variant="info">Info</Pill>
    </div>
  ),
};
