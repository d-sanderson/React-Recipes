import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Test Recipe',
    category: 'Test Category',
  },
  {
    id: 2,
    name: 'Test Recipe 2',
    category: 'Test Category 2',
  },
];

describe('<RecipeList />', () => {
  test('Should not break when no recipe is passed', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<RecipeList recipse={testRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state correctly', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipes} favorited={true} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
