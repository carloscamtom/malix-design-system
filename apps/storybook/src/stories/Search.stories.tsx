import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '@malix/ui';
import { Search } from 'lucide-react';

const meta = {
  title: 'Malix/Search',
  component: SearchInput,
  args: {
    placeholder: 'Search projects',
    leadingIcon: <Search size={16} />
  }
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
