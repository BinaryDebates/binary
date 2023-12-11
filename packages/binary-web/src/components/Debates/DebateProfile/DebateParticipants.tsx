import { CheckCircleIcon } from '@chakra-ui/icons'
import { Heading, Text, Avatar, Center, VStack, Box, HStack } from '@chakra-ui/react'
import { type Participant } from 'models/Debate'
import React from 'react'

export interface DebateParticipantsProps {
  participants: Participant[]
}

export const DebateParticipants = ({ participants }: DebateParticipantsProps): React.JSX.Element => {
  return (
    <Box w='100%'>
      <Heading>Participants</Heading>
      <HStack justifyContent={'space-evenly'} w="100%">{participants.map((participant) => <DebateParticipant key={participant.id} {...participant}/>)}</HStack>
    </Box>
  )
}

export interface DebateParticipantProps {
  name: string
  imgRoute: string
  role: string
  accepted: boolean
}

export const DebateParticipant = ({ name, imgRoute, role, accepted }: DebateParticipantProps): React.JSX.Element => {
  return (
    <Center><VStack>
      <Avatar size="lg" name={name} src={imgRoute} />
      <Heading>{name}</Heading>
      {/* TODO: onhover a desctiption for the circle icon */}
      <Text>{role} {accepted ? <CheckCircleIcon /> : ''}</Text>
      </VStack></Center>
  )
}
