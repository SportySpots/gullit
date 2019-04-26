//https://github.com/GraphCMS/example_01_nextjs_apollo/blob/master/lib/withData.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import ApolloClient from './ApolloClient';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName (Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithData extends Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps (ctx) {
      let serverState = {}

      // evaluate getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Running all queries in the tree extracting the data
      if (!process.browser) {
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
        Head.rewind()

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

    constructor (props) {
      super(props)
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
