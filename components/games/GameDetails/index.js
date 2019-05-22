import React from 'react';
import { propType } from 'graphql-anywhere';
// import { Text } from 'rebass';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import GameDate from '../GameDate';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDetails = ({ game }) => (
  <GameDate game={game} />
);

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
