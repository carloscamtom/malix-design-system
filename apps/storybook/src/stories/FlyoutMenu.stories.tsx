import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutMenu } from '@malix/ui';
import { LayoutDashboard, Folder, Search, Users } from 'lucide-react';

const meta = {
  title: 'Malix/FlyoutMenu',
  component: FlyoutMenu,
  args: {
    items: [
      { icon: <LayoutDashboard size={16} />, label: 'Dashboard', active: true },
      { icon: <Folder size={16} />, label: 'Projects' },
      { icon: <Search size={16} />, label: 'Clasificacion' },
      { icon: <Users size={16} />, label: 'Mis Clientes' },
    ],
  },
} satisfies Meta<typeof FlyoutMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
