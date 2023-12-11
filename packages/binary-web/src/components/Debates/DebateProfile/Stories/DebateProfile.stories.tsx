import React from 'react'
import { DebateProfile } from '../DebateProfile'
import type { StoryObj } from '@storybook/react'
import { generateRandomDebate } from 'models/Debate'

export default {
  title: 'Debate Profile',
  component: DebateProfile
}

type Story = StoryObj<typeof DebateProfile>

const debate = generateRandomDebate()

export const Primary: Story = {
  render: () => <DebateProfile debate={debate}/>
}
