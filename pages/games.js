import React from 'react';
import { Query } from 'react-apollo';
import { Flex, Text } from 'rebass';
import moment from 'moment';

import withApolloProvider from '../GraphQL/withApolloProvider';
import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST';
import GameCard from '../components/games/GameCard';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
export const CITIES = [
  {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    coords: {
      latitude: 52.3547321,
      longitude: 4.8284118,
    },
  },
  {
    id: 'enschede',
    city: 'Enschede',
    country: 'Netherlands',
    coords: {
      latitude: 52.2233632,
      longitude: 6.7983365,
    },
  },
  {
    id: 'rotterdam',
    city: 'Rotterdam',
    country: 'Netherlands',
    coords: {
      latitude: 51.9280572,
      longitude: 4.420195,
    },
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    country: 'Spain',
    coords: {
      latitude: 41.3948975,
      longitude: 2.0785562,
    },
  },
  {
    id: 'buenosAires',
    city: 'Buenos Aires',
    country: 'Argentina',
    coords: {
      latitude: -34.6156624,
      longitude: -58.50351,
    },
  },
];
//------------------------------------------------------------------------------
const maxDistance = 20;

const { coords } = CITIES[0];

const variables = {
  offset: 0,
  limit: 10,
  ordering: 'start_time',
  start_time__gte: moment().startOf('day').toISOString(),
  distance: `${parseInt(1000 * maxDistance, 10)}:${coords.latitude}:${coords.longitude}`,
};
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Games = () => (
  <Query
    query={GET_GAMES_LIST}
    variables={variables}
    // fetchPolicy="cache-and-network"
  >
    {({
      loading,
      error,
      data,
      // refetch,
      // fetchMore,
    }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) {
        console.log(error);
        return <Text>Something went wrong</Text>;
      }

      return (
        <Flex
          justifyContent="center"
          flexWrap="wrap"
        >
          {data.games.map(game => <GameCard key={game.uuid} game={game} />)}
        </Flex>
      );
    }}
  </Query>
);

export default withApolloProvider(Games);
