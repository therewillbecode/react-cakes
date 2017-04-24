import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

import RecipesListContainer from '../RecipesListContainer'
it('renders correctly', () => {
  const tree = renderer.create(
    <RecipesListContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});