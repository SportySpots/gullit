import React from 'react';
import { propType } from 'graphql-anywhere';
import moment from 'moment';
// import { Text } from 'rebass';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import { getSpotImages } from '../../../utils';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const HEIGHT = 192;
const WIDTH = 300;
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
  const formattedStartTime = moment.utc(startTime).local().format('D-MM HH:mm');
  // const cardHeight = (isCanceled ? CARD_HEIGHT_CANCELED : CARD_HEIGHT) + Avatar.size('S');
  // * (!!attendees && attendees.length > 0);

  const imgs = getSpotImages({ // always return an image
    images: spot.images || [],
    height: HEIGHT,
    width: WIDTH,
  });

  return (
    <img
      src={imgs[0]}
      alt={formattedStartTime}
      height={HEIGHT}
      width={WIDTH}
    />
  );
};

GameDate.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDate;
