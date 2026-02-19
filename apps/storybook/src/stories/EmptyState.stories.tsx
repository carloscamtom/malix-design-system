import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, EmptyState } from '@malix/ui';
import { Bell } from 'lucide-react';

const meta = {
  title: 'Malix/EmptyState',
  component: EmptyState,
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you are looking for.',
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    title: 'Nothing here yet',
    description: undefined,
  },
};

export const WithAction: Story = {
  args: {
    title: 'No projects',
    description: 'Get started by creating your first project.',
    action: <Button hierarchy="primary">Create project</Button>,
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: 'No notifications',
    description: 'You are all caught up. Check back later for updates.',
    icon: <Bell size={24} />,
  },
};
