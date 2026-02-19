import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileCard } from '@malix/ui';

const meta = {
  title: 'Malix/FileCard',
  component: FileCard,
  args: {
    fileName: 'report-q4-2025.pdf',
    meta: '2.4 MB',
  },
} satisfies Meta<typeof FileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    fileName: 'design-system-tokens.json',
    meta: '18 KB',
    onAction: () => {},
  },
};

export const NoMeta: Story = {
  args: {
    fileName: 'notes.txt',
    meta: undefined,
  },
};

export const MultipleFiles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 360 }}>
      <FileCard fileName="presentation.pptx" meta="5.1 MB" onAction={() => {}} />
      <FileCard fileName="budget-2026.xlsx" meta="340 KB" onAction={() => {}} />
      <FileCard fileName="meeting-notes.md" meta="12 KB" onAction={() => {}} />
    </div>
  ),
};
