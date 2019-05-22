import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const httpLink = createHttpLink({ uri: publicRuntimeConfig.seedorfGraphQLUrl, fetch });

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

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: addErrorHandlers(httpLink),
  cache,
  defaultOptions,
});

export default client;
