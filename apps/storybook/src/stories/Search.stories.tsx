import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '@malix/ui';

const meta = {
  title: 'Malix/Search',
  component: SearchInput,
  args: {
    placeholder: 'Search projects',
    leadingIcon: '🔎'
  }
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
