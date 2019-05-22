import React from 'react';
import { propType } from 'graphql-anywhere';
import { Text } from 'rebass';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDetails = ({ game }) => (
  <Text>{JSON.stringify(game)}</Text>
);

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
