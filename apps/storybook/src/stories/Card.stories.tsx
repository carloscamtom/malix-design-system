import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@malix/ui';

const meta = {
  title: 'Malix/Card',
  component: Card,
  args: {
    title: 'Card Title',
    description: 'Card description text with more details about this content.',
    level: 1,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    title: 'Elevation Level 1',
    description: 'Subtle shadow for cards resting on the background surface. Default for most content cards.',
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    title: 'Elevation Level 2',
    description: 'Medium shadow for elevated content panels, popovers, and interactive surfaces.',
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    title: 'Elevation Level 3',
    description: 'Strong shadow for modals, flyouts, and glassmorphism overlays. Highest visual prominence.',
    level: 3,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Card level={1} title="Level 1" description="Subtle shadow for content cards." />
      <Card level={2} title="Level 2" description="Medium shadow for elevated panels." />
      <Card level={3} title="Level 3" description="Strong shadow for modals and overlays." />
    </div>
  ),
};
