import { Text, Heading, Box } from '@chakra-ui/react'
import React from 'react'

export interface TermsProps {
  fundsUse: string
  timeline: string
  fundingGoal: string
  refunds: string
  note: string
}

export default function Terms ({ fundsUse, timeline, fundingGoal, refunds, note }: TermsProps): React.JSX.Element {
  return (
    <Box w='100%'>
      <Heading>Terms</Heading>
      <Text>
        <b>💰 Use of funds:</b> {fundsUse} <br /><br />
        <b>⏳ Timeline:</b> {timeline} <br /><br />
        <b>🎯 Funding Goal:</b> {fundingGoal}  <br /><br />
        <b>💳 Refunds:</b> {refunds} <br /><br />
        <b>📝 Note</b> {note}
      </Text>
    </Box>
  )
}
