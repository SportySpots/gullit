import { configure, addDecorator } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import mockClient from '../GraphQL/ApolloMockClient';
import theme from '../theme';

const req = require.context('../', true, /stories\.tsx?$/);

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
