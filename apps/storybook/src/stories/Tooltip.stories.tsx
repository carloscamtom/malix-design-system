import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@malix/ui';

const meta = {
  title: 'Malix/Tooltip',
  render: () => (
    <Tooltip content="Only outline icons are allowed in Malix.">
      <Button hierarchy="secondary">Hover or focus me</Button>
    </Tooltip>
  )
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
