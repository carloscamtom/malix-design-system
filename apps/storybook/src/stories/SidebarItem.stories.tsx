import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from '@malix/ui';
import { Home, Folder, FileText } from 'lucide-react';

const meta = {
  title: 'Malix/SidebarItem',
  component: SidebarItem,
  args: {
    children: 'Home',
    icon: <Home size={20} />,
  },
  decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: { active: true },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 240 }}>
      <SidebarItem icon={<Home size={20} />} active>Dashboard</SidebarItem>
      <SidebarItem icon={<Folder size={20} />}>Projects</SidebarItem>
      <SidebarItem icon={<FileText size={20} />}>DocExtract</SidebarItem>
    </div>
  ),
};
