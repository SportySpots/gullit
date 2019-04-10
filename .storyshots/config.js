import { configure } from '@storybook/react';
import requireContextNode from './require_context_node';

const req = requireContextNode('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

