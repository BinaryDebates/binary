import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { generateRandomDebate, totalPledges } from 'models/Debate';
import DebateListItem from './DebateListItem';

const debates = [...Array(7)].map(() => {
  return generateRandomDebate();
});

export const Debates = (): React.JSX.Element => {
  return (
    <Flex direction="column" w="62.5%" marginX="auto" gap="40px">
      <Box>
        <Heading>Requests for Debates</Heading>
        <Text>Vote on the matchups you want to see</Text>
      </Box>
      {debates.map((debate) => {
        return <DebateListItem {...debate} pledgeAmount={totalPledges(debate)} link="/debateProfile" key={debate.id} />;
      })}
    </Flex>
  );
};
