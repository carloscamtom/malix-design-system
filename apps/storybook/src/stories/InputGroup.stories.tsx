import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from '@malix/ui';

const meta = {
  title: 'Malix/InputGroup',
  component: InputGroup,
  args: {
    label: 'Label',
    placeholder: 'Placeholder text...',
    helperText: 'Helper text goes here',
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Invalid email address',
    error: true,
  },
};

export const WithoutHelper: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    helperText: undefined,
  },
};
