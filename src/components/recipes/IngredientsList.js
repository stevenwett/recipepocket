import React from 'react';

function IngredientsList({ingredients, updateIngredient}) {
  const ingredientList = ingredients.map(ingredient => {
    return (
      <li className="ingredient" key={ingredient.id} data-active={ingredient.active}>
        {ingredient.text}
      </li>
    )
  })
  return (
    <ul className="ingredients">
      {ingredientList}
    </ul>
  )
}

export default IngredientsList;
