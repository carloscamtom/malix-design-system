import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@malix/ui';

const meta = {
  title: 'Malix/Avatar',
  component: Avatar,
  args: {
    initials: 'PR',
    size: 40,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { initials: 'PR', size: 32 },
};

export const Large: Story = {
  args: { initials: 'CG', size: 48 },
};
