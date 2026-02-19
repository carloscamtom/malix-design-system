import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPanel, SidebarItem } from '@malix/ui';

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1.08 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1.08H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08Z" />
    </svg>
  );
}

function LogoMark() {
  return (
    <span style={{ fontWeight: 700, fontSize: 18, color: 'var(--malix-text-primary, #fff)' }}>
      Malix
    </span>
  );
}

const sampleNavigation = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <SidebarItem icon={<HomeIcon />} active>Dashboard</SidebarItem>
    <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
    <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
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
