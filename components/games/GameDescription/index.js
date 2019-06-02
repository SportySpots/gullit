import React from 'react';
import { propType } from 'graphql-anywhere';

import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import Text from '../../common/Text';
import Module from '../Module';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameDescription = ({ game }) => {
  const { description } = game;

  return (
    <Module title="Description">
      <Text
        fontSize={[4]}
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
