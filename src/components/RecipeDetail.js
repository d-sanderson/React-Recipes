import React from 'react';

const RecipeDetail = (props) => {
if (!props.recipe) {
    return (
    <p style={props.style}>  
    Please select a recipe to see the detail
    </p>
    )
}
    return (<div style={props.style}>
        <h2>{props.recipe.name}</h2>
        <img src={props.recipe.image} />
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