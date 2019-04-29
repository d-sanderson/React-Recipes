import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe });
      });
  }

  render() {
    const { recipe } = this.state;
    return (
      <div className="px4">
        <h2 className="h2">Recipe</h2>
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};
export default Recipe;
