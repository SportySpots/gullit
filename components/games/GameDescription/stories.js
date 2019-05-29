import { storiesOf } from '@storybook/react';
import React from 'react';
import { Query } from 'react-apollo';
import GET_GAME_DETAILS from '../../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import GameDetails from '.';

storiesOf('games.GameDetails', module)
  .add('GameDetails', () => (
    <Query
      query={GET_GAME_DETAILS}
      variables={{ uuid: 455 }}
    >
      {({ loading, error, data }) => {
        console.log('data', data);
        if (loading || error) return null;

        return <GameDetails game={data.game} />;
      }}
    </Query>
  ));
