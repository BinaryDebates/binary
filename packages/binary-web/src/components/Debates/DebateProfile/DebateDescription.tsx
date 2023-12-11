import React from 'react'
import { Button, ButtonGroup, Heading, Text, Image, Box, Flex, Spacer } from '@chakra-ui/react'

export interface DebateDescriptionProps {
  imgRoute: string
  name: string
  subtitle: string
  description: string
  progress: number
}

export default function DebateDescription ({ imgRoute, name, subtitle, description, progress }: DebateDescriptionProps): React.JSX.Element {
  return (
    <Flex direction='column' w='100%'>
      <Image src={imgRoute} alt={name} boxSize='80px' borderRadius='8px'/>
      <Flex w="100%" justifyContent='space-between'>
        <Box w='100%'>
         <Heading size='2xl'>{name}</Heading>
          <Text>{subtitle}</Text>
        </Box>
        <Spacer />
        <ButtonGroup size='lg'>
          <Button>Share</Button>
          <Button>${progress} Pledged</Button>
        </ButtonGroup>
      </Flex>
      <Text>{description}</Text>
    </Flex>
  )
}
