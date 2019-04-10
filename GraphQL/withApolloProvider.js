import React from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './ApolloClient';

export default WrappedComponent => props => (
  <ApolloProvider
    id="apollo"
    client={client}
  >
    <WrappedComponent {...props} />
  </ApolloProvider>
);
