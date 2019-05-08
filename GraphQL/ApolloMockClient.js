import ApolloClient from 'apollo-client';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { buildClientSchema } from 'graphql';
import { onError } from 'apollo-link-error';
import { addMockFunctionsToSchema } from 'graphql-tools';
import React from 'react';
import PropTypes from 'prop-types';
// import { addErrorHandlers, cache } from './ApolloClient';
import mocks from './mocks';

// Read schema from file
const schema = buildClientSchema(require('../schema.graphql.json'));

// Add mocked resolvers
addMockFunctionsToSchema({ schema, mocks, preserveResolvers: false });


export const addErrorHandlers = link => ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  link,
]);

export const cache = new InMemoryCache({ dataIdFromObject: object => object.uuid || null });

const mockClient = new ApolloClient({
  link: addErrorHandlers(new SchemaLink({ schema })),
  cache,
});

export default mockClient;

export const ApolloMockProvider = ({ children }) => (
  <ApolloProvider client={mockClient}>
    {children}
  </ApolloProvider>
);

ApolloMockProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export const withApolloMockProvider = (Component) => {
  const ApolloComponent = props => (
    <ApolloMockProvider>
      <Component {...props} />
    </ApolloMockProvider>
  );

  return ApolloComponent;
};
