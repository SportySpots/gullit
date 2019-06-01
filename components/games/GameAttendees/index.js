import React from 'react';
import { propType } from 'graphql-anywhere';
import Module from '../Module';
import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import Attendees from '../Attendees';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameAttendees = ({ game }) => (
  <Module title={`Attendees (${Attendees.getLength({ game })})`}>
    <Attendees game={game} />
  </Module>
);

GameAttendees.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameAttendees;
