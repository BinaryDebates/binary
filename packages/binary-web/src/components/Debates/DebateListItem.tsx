import React from 'react'

import { Image, Text, Heading, Flex, Link, Spacer, Center, Box } from '@chakra-ui/react'

export interface DebateListItemProps {
  imgRoute: string
  name: string
  subtitle: string
  pledgeAmount: number
  link: string
}

export default function DebateListItem ({ imgRoute, name, subtitle, pledgeAmount, link }: DebateListItemProps): React.JSX.Element {
  return (
    <Link href={link}>
      <Flex gap='20px'>
        <Image src={imgRoute} alt={name} boxSize='80px' borderRadius='8px'/>
        <Flex direction='column'>
          <Heading>{name}</Heading>
          <Text>{subtitle}</Text>
        </Flex>
        <Spacer />
        <Box bg='ButtonShadow' boxSize='80px'>
          <Flex direction='column'>
            <Center>
            <Heading>{pledgeAmount}</Heading>
            </Center>
            <Center>
            <Text>Pledged</Text>
            </Center>
          </Flex>
        </Box>
      </Flex>
    </Link>
  )
}
