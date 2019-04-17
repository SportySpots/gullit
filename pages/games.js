import React from 'react';
import { Query } from 'react-apollo';

import withApolloProvider from '../GraphQL/withApolloProvider';
import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST';


const Games = () => (
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
      <div>{JSON.stringify(data)}</div>
    )
    }
  </Query>
);

export default withApolloProvider(Games);
