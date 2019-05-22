import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import Main from '../layouts/Main';
import theme from '../theme';
import client from '../GraphQL/ApolloClient';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Main>
              <Component {...pageProps} />
            </Main>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp;
