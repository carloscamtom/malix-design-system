import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@malix/ui';

const meta = {
  title: 'Malix/Textarea',
  component: Textarea,
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    helperText: 'Keep it under 500 characters.',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Write your bio...',
    error: true,
    errorMessage: 'Bio is required.',
  },
};

export const WithoutHelper: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Add notes...',
    helperText: undefined,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Comments are closed.',
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Feedback',
    defaultValue: 'This product has been working great so far.',
    helperText: 'Share your experience with the team.',
  },
};
