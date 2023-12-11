import React from 'react'
import Terms from '../Terms'
import type { StoryObj } from '@storybook/react'
import { generateRandomTerms } from 'models/Debate'

export default {
  title: 'Terms',
  component: Terms
}

type Story = StoryObj<typeof Terms>

export const Primary: Story = {
  render: () => <Terms {...generateRandomTerms()}/>
}
