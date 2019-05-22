import React from 'react';
import { propType } from 'graphql-anywhere';
import { Box, Text } from 'rebass';
import styled from 'styled-components';
import { Icon } from 'microicon';
import moment from 'moment';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Box)`
  border-radius: 8px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDetails = ({ game }) => {
  const {
    spot,
    start_time: startTime,
    sport,
    name,
  } = game;

  const formattedStartTime = moment.utc(startTime).local().format('D-MM HH:mm');

  return (
    <Container
      bg="white"
      p={3}
    >
      <Text
        fontFamily="raj"
        fontSize={4}
        fontWeight={900}
      >
        {name}
      </Text>
      <table>
        <tr>
          <td><Icon name="label" size={24} color="black" /></td>
          <td><Text fontFamily="raj">{sport.name}</Text></td>
        </tr>
        <tr>
          <td><Icon name="watch_later" size={24} color="black" /></td>
          <td><Text fontFamily="raj">{formattedStartTime}</Text></td>
        </tr>
        <tr>
          <td><Icon name="place" size={24} color="black" /></td>
          <td><Text fontFamily="raj">{spot.name}</Text></td>
        </tr>
      </table>
    </Container>
  );
};

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
