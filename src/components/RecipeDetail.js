import React from 'react';

const RecipeDetail = (props) => (
   <div style={props.style}>
        <h2>Chorizo Breakfast Tacos with Potato Hash and Eggs</h2>
        <img src={'https://images.media-allrecipes.com/userphotos/560x315/4520890.jpg'} />
        <div>
            <span>Breakfast</span>
            <span>1200 cal</span>
        </div>
        <h3>Ingredients:</h3>
        <ul>
            <li>
                2 tablespoons vegetable oil
            </li>
            <li>
                2 baked potatoes, peeled and cubed
            </li>
            <li>
                1/2 cup chopped onion
            </li>
            <li>
                1/2 teaspoon garlic powder
            </li>
            <li>
                1/2 teaspoon onion powdersalt and freshly ground black pepper
            </li>
            <li>
                7 ounces chorizo sausage, removed from casings
            </li>
        </ul>
        <h3>Steps:</h3>
        <ol>
        <li>Heat oil in a nonstick skillet over medium-high heat until shimmering. Add potatoes, onion, garlic powder, and onion powder to one side of the skillet and season with salt and pepper. Add chorizo sausage on the other side of the skillet and saute, breaking up with the back of a spoon, until browned, about 5 minutes. Turn over the potatoes after a couple of minutes so they get brown on both sides.</li>
        <li>Combine eggs, milk, 1 tablespoon cilantro, salt, and pepper in a bowl. Reduce heat and pour egg mixture into the skillet. Stir eggs until they are very softly set, about 3 minutes. Remove from heat.</li>
        <li>Spread out warmed tortillas and divide potato, chorizo, and egg mixture among them. Sprinkle with remaining 2 tablespoons cilantro. Top with Cheddar cheese and salsa.</li>
        </ol>
   </div>
)
export default RecipeDetail