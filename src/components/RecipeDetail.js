import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = ({ recipe, style }) => {
  if (!recipe) {
    return (
      <p
        style={style}
        className={
          "classNames('h3 p2 bg-white italic center'), props.className)"
        }
      >
        Please select a recipe to see the detail.
      </p>
    );
  }
  return (
    <div style={style} className="p2 bg-white">
      <h2 className="h2">{recipe.name}</h2>
      <img alt={recipe.name} className="fit" src={recipe.image} />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories}</span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};
export default RecipeDetail;
