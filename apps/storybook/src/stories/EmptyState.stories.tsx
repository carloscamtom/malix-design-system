import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, EmptyState } from '@malix/ui';

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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};
