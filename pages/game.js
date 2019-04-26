import React from 'react';

import Link from 'next/link';

import { ApolloProvider, Query } from 'react-apollo';

import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST';
import client from '../GraphQL/ApolloClient';


const GamesComponent = ({ games }) => (
  !games ? null : games.map(game => (
    <div key={game.uuid}>
      <Link as={`/game?uuid=${game.uuid}`} href={`/game/${game.uuid}`}>
        <a>{JSON.stringify(game)}</a>
      </Link>
    </div>
  ))
);

class Games extends React.Component {
  static async getInitialProps({ query }) {
    console.log('QUERY', query);
    return {};
  }



  render() {
    return (
      <ApolloProvider
        id="apollo"
        client={client}
      >
        <Query
          query={GET_GAMES_LIST}
          // variables={variables}
          // fetchPolicy="cache-and-network"
        >
          {({
            // loading,
            data,
            // refetch,
            // fetchMore,
          }) => (
            <GamesComponent games={data.games}/>
          )}
        </Query>
      </ApolloProvider>
    );
  }
}

export default Games;
