import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

import Recipe from '../Recipe'

it('renders correctly', () => {
  const tree = renderer.create(
    <Recipe />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})