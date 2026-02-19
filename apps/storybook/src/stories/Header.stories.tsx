import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, Button } from '@malix/ui';

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
      <Button hierarchy="secondary" variant="leading-icon-text" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}>
        Actividad
      </Button>
    ),
  },
};
