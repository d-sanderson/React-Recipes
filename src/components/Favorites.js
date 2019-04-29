import React from 'react';
import RecipeList from './RecipeList';

const Favorites = ({ state, favorites, toggleFavorite }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorite={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

export default Favorites;
