import { storiesOf } from '@storybook/react';
import React from 'react';
import { Query } from 'react-apollo';
import GET_GAME_DETAILS from '../../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import GameAttendees from '.';

storiesOf('games.GameAttendees', module)
  .add('GameAttendees', () => (
    <Query
      query={GET_GAME_DETAILS}
      variables={{ uuid: 455 }}
    >
      {({ loading, error, data }) => {
        console.log('data', data);
        if (loading || error) return null;

        return <GameAttendees game={data.game} />;
      }}
    </Query>
  ));
