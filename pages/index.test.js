import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

test('Index renders & matches snapshot', () => {
  const component = renderer.create(
    <Home />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
