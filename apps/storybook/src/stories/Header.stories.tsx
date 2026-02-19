import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, Button } from '@malix/ui';
import { CircleCheck } from 'lucide-react';

const meta = {
  title: 'Malix/Header',
  component: Header,
  args: {
    pageTitle: 'Dashboard',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    pageTitle: 'Dashboard',
    actions: (
      <Button hierarchy="secondary" variant="leading-icon-text" icon={<CircleCheck size={16} />}>
        Actividad
      </Button>
    ),
  },
};
