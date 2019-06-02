import { configure, addDecorator } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { setConfig } from 'next/config';

import mockClient from '../GraphQL/ApolloMockClient';
import theme from '../theme';
import { publicRuntimeConfig } from '../next.config'

// Make sure you can use 'publicRuntimeConfig/ within tests.
// See: https://github.com/zeit/next.js/issues/4024
setConfig({ publicRuntimeConfig })

const req = require.context('../components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={mockClient}>
      {story()}
    </ApolloProvider>
  </ThemeProvider>
));

configure(loadStories, module);

