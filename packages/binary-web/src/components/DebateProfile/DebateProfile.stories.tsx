import { DebateProfile } from "./DebateProfile";
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Debate Profile',
  component: DebateProfile,
}

type Story = StoryObj<typeof DebateProfile>;

export const Primary: Story = {
  render: () => <DebateProfile />,
};