import React from 'react'
import UserListItem from '../UserListItem'
import type { StoryObj } from '@storybook/react'
import { generateRandomUser } from '../../../models/User'

export default {
  title: 'UserListItem',
  component: UserListItem
}

type Story = StoryObj<typeof UserListItem>
export const Primary: Story = {
  render: () => <UserListItem user={generateRandomUser()}/>
}
