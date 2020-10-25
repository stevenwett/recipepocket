import React from 'react';
import IngredientsList from './IngredientsList';

function IngredientsGroups({ingredients, handleIngredientClick}) {
  const ingredientGroupList = ingredients.map(ingredientsGroup => {
    return (
      <IngredientsList ingredientsGroup={ ingredientsGroup } key={ingredientsGroup.id} handleIngredientClick={(e) => {handleIngredientClick(e, ingredients, ingredientsGroup) }} />
    )
  })
  return(
    <div className="ingredients-groups">
      {ingredientGroupList}
    </div>
  )
}

export default IngredientsGroups
