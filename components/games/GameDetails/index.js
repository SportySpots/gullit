import React from 'react';
import { propType } from 'graphql-anywhere';
import { Box, Text } from 'rebass';
import styled from 'styled-components';
import { Icon } from 'microicon';
import moment from 'moment';
import getConfig from 'next/config';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import Organizer from '../Organizer';

const { publicRuntimeConfig } = getConfig();

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
    organizer,
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
        <tbody>
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
        </tbody>
      </table>

      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${spot.address.lat},${spot.address.lng}&size=600x300&zoom=13&key=${publicRuntimeConfig.googleMapsKey}`}
        alt="map"
        height={300}
        width="100%"
      />

      <Text
        fontFamily="raj"
        fontSize={2}
        fontWeight={600}
      >
        Hosted by
      </Text>
      <Organizer organizer={organizer} />
    </Container>
  );
};

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
