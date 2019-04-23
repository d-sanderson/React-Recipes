import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Cupcakes</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Eclair Pie</span>
                <span>Desert</span></li>
            <li>
                <span>Ramen Pot Roast</span>
                <span>Dinner</span>
            </li>
            <li>
                <span>Chicken Pot Pie</span>
                <span>Dinner</span>
            </li>
            <li>
                <span>Chorizo Breakfast Tacos</span>
                <span>Dinner</span>
            </li>
        </ul>
    </div>
)
export default RecipeList