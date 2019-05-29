import React from 'react';
import { propType } from 'graphql-anywhere';
import { Text } from 'rebass';
import Module from '../Module';
import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDescription = ({ game }) => {
  const { description } = game;

  return (
    <Module title="Description">
      <Text
        fontFamily="raj"
        fontSize={2}
        fontWeight={600}
      >
        {description}
      </Text>
    </Module>
  );
};

GameDescription.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDescription;
