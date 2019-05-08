import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import requireContext from 'require-context.macro';
import theme from '../theme';
// import requireContextNode from './require_context_node';

// See https://github.com/storybooks/storybook/pull/5015
const req = requireContext('../', true, /stories\.(js)$/);
// const req = requireContext('../layouts', true, /stories\.(js)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);

