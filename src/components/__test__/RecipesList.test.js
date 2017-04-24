import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

import RecipesList from '../RecipesList'

it('renders correctly', () => {
  const tree = renderer.create(
    <RecipesList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})