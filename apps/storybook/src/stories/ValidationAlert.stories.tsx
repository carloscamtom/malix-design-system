import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ValidationAlert } from '@malix/ui';

const meta = {
  title: 'Malix/ValidationAlert',
  component: ValidationAlert,
  args: {
    title: 'Validation error',
    message: 'Please correct the highlighted fields before submitting.',
    variant: 'error',
  },
} satisfies Meta<typeof ValidationAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    message: 'Your session will expire in 5 minutes.',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    title: 'Information',
    message: 'Your changes have been saved automatically.',
    variant: 'info',
  },
};

export const WithClose: Story = {
  args: {
    title: 'Dismissible alert',
    message: 'Click the close button to dismiss this alert.',
    variant: 'warning',
    onClose: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      <ValidationAlert variant="error" title="Error" message="Something went wrong. Please try again later." />
      <ValidationAlert variant="warning" title="Warning" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <ValidationAlert variant="info" title="Information" message="Your changes have been saved automatically." />
    </div>
  ),
};
