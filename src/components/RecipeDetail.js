import React from 'react';
import classNames from 'classnames';

const RecipeDetail = (props) => {
if (!props.recipe) {
    return (
    <p 
    style={props.style}
    className={`classNames('h3 p2 bg-white italic center'), props.className)`}
    >  
    Please select a recipe to see the detail.
    </p>
    )
}
    return (<div 
            style={props.style}
            className="p2 bg-white">
        <h2 className="h2">{props.recipe.name}</h2>
        <img className="fit" src={props.recipe.image} />
        <div>
            <span>{props.recipe.category}</span>
            <span>{props.recipe.calories}</span>
        </div>
        <h3>Ingredients:</h3>
        <ul>
            {props.recipe.ingredients.map(ingredient => (
            <li key={ingredient}>
               {ingredient}
            </li>
            ))}
        </ul>
        <h3>Steps:</h3>
        <ol>
        {props.recipe.steps.map(step => (
            <li key={step}>
               {step}
            </li>
            ))}
        <li>Heat oil in a nonstick skillet over medium-high heat until shimmering. Add potatoes, onion, garlic powder, and onion powder to one side of the skillet and season with salt and pepper. Add chorizo sausage on the other side of the skillet and saute, breaking up with the back of a spoon, until browned, about 5 minutes. Turn over the potatoes after a couple of minutes so they get brown on both sides.</li>
         </ol>
   </div>
);
        }
export default RecipeDetail