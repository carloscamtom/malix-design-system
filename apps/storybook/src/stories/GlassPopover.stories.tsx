import type { Meta, StoryObj } from '@storybook/react';
import { GlassPopover } from '@malix/ui';

const meta = {
  title: 'Malix/GlassPopover',
  component: GlassPopover,
  args: {
    title: 'Glass Overlay',
    onClose: () => {},
    children: 'Glassmorphism overlay with translucent white background, blur effect, and Level 3 elevation.',
  },
} satisfies Meta<typeof GlassPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
