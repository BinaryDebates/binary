import React, { useState } from 'react'
import UserSettings from '../UserSettings'
import type { StoryObj } from '@storybook/react'
import { generateRandomUser } from '../../../models/User'

export default {
  title: 'UserSettings',
  component: UserSettings
}

type Story = StoryObj<typeof UserSettings>
export const Primary: Story = {
  render: () => {
    const [isSaved, setIsSaved] = useState(false)
    return (<UserSettings
      isSaved={isSaved}
      onSave={function () { setIsSaved(!isSaved) }}
      user={generateRandomUser()}
    />)
  }
}
