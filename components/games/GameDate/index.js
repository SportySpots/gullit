import React from 'react';
import { propType } from 'graphql-anywhere';
import moment from 'moment';
import styled from 'styled-components';
import { Box, Text, Flex } from 'rebass';

import { APP_WIDTH } from '../../../constants';
import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import { getSpotImages } from '../../../utils';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const HEIGHT = 192;
const WIDTH = APP_WIDTH; // 300; // App width
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Relative = styled(Box)`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;
//------------------------------------------------------------------------------
const AbsoluteDate = styled(Flex)`
  position: absolute;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
//------------------------------------------------------------------------------
const Img = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: ${WIDTH}px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDate = ({ game }) => {
  const {
    spot,
    start_time: startTime,
    // status,
    // organizer,
    // sport,
    // name,
  } = game;

  console.log('game', game);

  // const isCanceled = status === 'CANCELED';
  // const attendees = getAttendees(game.attendees);
  const day = moment.utc(startTime).local().format('D');
  const month = moment.utc(startTime).local().format('MMMM');
  // const cardHeight = (isCanceled ? CARD_HEIGHT_CANCELED : CARD_HEIGHT) + Avatar.size('S');
  // * (!!attendees && attendees.length > 0);

  const imgs = getSpotImages({ // always return an image
    images: spot.images || [],
    height: HEIGHT,
    width: WIDTH,
  });

  return (
    <Relative>
      <AbsoluteDate
        flexDirection="column"
        alignItems="center"
        bg="actionYellow"
        p={3}
      >
        <Text
          fontFamily="raj"
          fontSize={3}
          fontWeight="900"
          color="white"
        >
          {day}
        </Text>
        <Text
          fontFamily="raj"
          fontWeight="900"
          color="white"
        >
          {month}
        </Text>
      </AbsoluteDate>
      <Img
        src={imgs[0]}
        alt={spot.name}
        height={HEIGHT}
        // width={WIDTH}
      />
    </Relative>
  );
};

GameDate.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDate;
