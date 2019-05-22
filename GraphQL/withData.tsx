//https://github.com/GraphCMS/example_01_nextjs_apollo/blob/master/lib/withData.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import ApolloClient from './ApolloClient';
import { NextComponentClass, NextContext } from 'next';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName (Component: React.ComponentClass<any>) {
  return Component.displayName || Component.name || 'Unknown';
}

export default <T extends object>(ComposedComponent: NextComponentClass<T>) => {
  return class WithData extends Component<T> {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;
    static propTypes = {
      serverState: PropTypes.object.isRequired
    };

    static async getInitialProps (ctx: NextContext) {
      let serverState = {};

      // evaluate getInitialProps()
      let composedInitialProps: any = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Running all queries in the tree extracting the data
      if (!(process as any).browser) {
        // const apollo = initApollo()
        // url prop if any of our queries needs it
        // const url = { query: ctx.query, pathname: ctx.pathname }

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={ApolloClient}>
              <ComposedComponent {...composedInitialProps} />
            </ApolloProvider>
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
          console.log('error', JSON.stringify(error));
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();

        // Extract query data from the Apollo store
        serverState = {
          apollo: {
            data: ApolloClient.cache.extract()
          }
        }
      }

      // console.log('d', serverState);

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor (props: T) {
      super(props);
    }

    render () {
      console.log('rerrnn');
      return (
        <ApolloProvider client={ApolloClient}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
