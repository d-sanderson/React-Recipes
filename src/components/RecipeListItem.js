import React from 'react';
import PropTypes from 'prop-types';


const RecipeListItem = ({
  recipe,
  onClick,
  favorited,
  onFavorited,
}) => (
  <li
    key={recipe.id}
    onClick={() => onClick(recipe.id)}
    className="py2 border-bottom border-bottom-dashed pointer nowrap"
  >
    <span
      className="mr1"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
      role="img"
      aria-label="favorite"
    >
      {favorited ? '😻' : '☠️'}
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

RecipeListItem.defaultProps = {
  recipe: {},
  onClick: () => {},
  onFavorited: () => {},
};

export default RecipeListItem;
