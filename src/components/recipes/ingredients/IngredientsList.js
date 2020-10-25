import React from 'react';

function IngredientsList({ingredientsGroup, handleIngredientClick}) {
  const list = ingredientsGroup.list.map(ingredient => {
      return (
        <li className="ingredient" key={ingredient.id} data-active={ingredient.active} onClick={(e)=>{handleIngredientClick(e, null, ingredientsGroup)}}>
          {ingredient.text}
        </li>
      )
  });
  return (
    <div className="ingredients-group">
      <h3>{ingredientsGroup.heading}</h3>
      <ul className="ingredients">
        {list}
      </ul>
    </div>
  )
}

export default IngredientsList
