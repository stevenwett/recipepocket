import React from 'react';
import {Row, Col} from 'reactstrap';

function IngredientsList({ingredients}) {
  let ingredientsList = ingredients.map(ingredient => {
    return (
      <li key={ingredient.id}>
        <strong>{ingredient.quantity}</strong> {ingredient.text}
      </li>
    )
  });
  return (
    <ul className="ingredients">
      {ingredientsList}
    </ul>
  )
}

export default IngredientsList;
