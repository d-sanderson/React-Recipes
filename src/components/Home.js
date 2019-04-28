import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then((recipes) => {
        this.setState({ recipes });
      });
  }

    onRecipeClick = id => {
      fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then((recipe) => {
          this.setState({ currentRecipe: recipe });
        });
    }

    render() {
      const { currentRecipe } = this.state;
      const { toggleFavorite, state } = this.props;
      const { recipes, favorites } = state;
      
      return (
        <div>
          <main className="px4 flex">
            <div style={{ flex: 3 }}>
              <RecipeList
                favorites={favorites}
                recipes={recipes}
                onClick={this.onRecipeClick}
                style={{ flex: 3 }}
                onFavorited={toggleFavorite}
              />
            </div>
            <RecipeDetail
              className="ml4"
              recipe={currentRecipe}
              style={{ flex: 5 }}
            />
          </main>
        </div>
      );
    }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
