import { storiesOf } from '@storybook/react';
import React from 'react';
import { Query } from 'react-apollo';
import GET_GAME_DETAILS from '../../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import Avatar from '.';

storiesOf('Common.Avatar', module)
  .add('Avatar with USER', () => (
    <Query
      query={GET_GAME_DETAILS}
      variables={{ uuid: '455' }}
    >
      {({ loading, error, data }) => {
        console.log('data', data);
        if (loading || error) { return null; }
        return <Avatar size="S" user={data.game.organizer} />;
      }}
    </Query>
  ))
  .add('Avatar with TEXT size L', () => (
    <Avatar size="L" text="FR" />
  ))
  .add('Avatar no props size S', () => (
    <Avatar size="S" />
  ));
