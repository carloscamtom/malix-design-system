import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@malix/ui';

const meta = {
  title: 'Malix/Tooltip',
  component: Tooltip,
  args: {
    content: 'Only outline icons are allowed in Malix.',
    placement: 'top',
  },
  render: (args) => (
    <div style={{ padding: 80, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button hierarchy="secondary">Hover or focus me</Button>
      </Tooltip>
    </div>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: { placement: 'top' },
};

export const Bottom: Story = {
  args: { placement: 'bottom' },
};

export const Left: Story = {
  args: { placement: 'left' },
};

export const Right: Story = {
  args: { placement: 'right' },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ padding: 100, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button hierarchy="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button hierarchy="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button hierarchy="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button hierarchy="secondary">Right</Button>
      </Tooltip>
    </div>
  ),
};
