import { storiesOf } from '@storybook/react';
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import GET_GAME_DETAILS from '../../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import GameCard from '.';

const Container = ({ mutate }) => (
  <div>
    <Query
      query={GET_GAME_DETAILS}
      variables={{ uuid: 455 }}
    >
      {({ loading, error, data }) => {
        console.log('data', data);
        if (loading || error) return null;

        return <GameCard game={mutate(data.game)} />;
      }}
    </Query>
  </div>
);

Container.propTypes = {
  mutate: PropTypes.func,
};

Container.defaultProps = {
  mutate: g => g,
};

storiesOf('games.GameCard', module)
  .add('GameCard PLANNED', () => (
    <Container mutate={g => Object.assign({}, g, { status: 'PLANNED' })} />
  ))
  .add('GameCard PLANNED long title/name', () => (
    <Container mutate={g => Object.assign({}, g, { status: 'PLANNED', name: 'Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name' })} />
  ))
  .add('GameCard CANCELED', () => (
    <Container mutate={g => Object.assign({}, g, { status: 'CANCELED' })} />
  ))
  .add('GameCard PLANNED short title/name', () => (
    <Container mutate={g => Object.assign({}, g, { status: 'PLANNED', name: 'Some Short Name' })} />
  ))
  .add('GameCard CANCELED long title/name', () => (
    <Container mutate={g => Object.assign({}, g, { status: 'CANCELED', name: 'Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name Some Looooong Title/Name' })} />
  ));
