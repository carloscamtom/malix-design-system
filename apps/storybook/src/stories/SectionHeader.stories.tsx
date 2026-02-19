import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader, Button } from '@malix/ui';

const meta = {
  title: 'Malix/SectionHeader',
  component: SectionHeader,
  args: {
    title: 'Team Members',
    description: 'Manage who has access to this project.',
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    title: 'Settings',
    description: undefined,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Documents',
    description: 'All uploaded files and records.',
    actions: <Button hierarchy="primary">Upload</Button>,
  },
};

export const WithMultipleActions: Story = {
  args: {
    title: 'Integrations',
    description: 'Connect external services to your workspace.',
    actions: (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button hierarchy="secondary">Docs</Button>
        <Button hierarchy="primary">Add New</Button>
      </div>
    ),
  },
};
