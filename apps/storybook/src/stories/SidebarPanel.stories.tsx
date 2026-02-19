import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPanel, SidebarItem } from '@malix/ui';
import { Home, Folder, Settings } from 'lucide-react';

function LogoMark() {
  return (
    <span style={{ fontWeight: 700, fontSize: 18, color: 'var(--malix-text-primary, #fff)' }}>
      Malix
    </span>
  );
}

const sampleNavigation = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <SidebarItem icon={<Home size={20} />} active>Dashboard</SidebarItem>
    <SidebarItem icon={<Folder size={20} />}>Projects</SidebarItem>
    <SidebarItem icon={<Settings size={20} />}>Settings</SidebarItem>
  </div>
);

const sampleFooter = (
  <span style={{ fontSize: 12, opacity: 0.5 }}>v1.0.0</span>
);

const meta = {
  title: 'Malix/SidebarPanel',
  component: SidebarPanel,
  args: {
    logo: <LogoMark />,
    navigation: sampleNavigation,
    footer: sampleFooter,
  },
  decorators: [(Story) => <div style={{ height: 480 }}><Story /></div>],
} satisfies Meta<typeof SidebarPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    onToggleCollapse: () => {},
  },
};

export const WithToggle: Story = {
  args: {
    onToggleCollapse: () => {},
  },
};

export const WithoutFooter: Story = {
  args: {
    footer: undefined,
  },
};

export const FullExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, height: 480 }}>
      <SidebarPanel
        logo={<LogoMark />}
        navigation={sampleNavigation}
        footer={sampleFooter}
        onToggleCollapse={() => {}}
      />
      <SidebarPanel
        logo={<LogoMark />}
        navigation={sampleNavigation}
        footer={sampleFooter}
        collapsed
        onToggleCollapse={() => {}}
      />
    </div>
  ),
};
