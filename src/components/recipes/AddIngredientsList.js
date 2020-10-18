import React from 'react';
import {Input} from 'reactstrap';

function AddIngredientsList({ingredients, deleteIngredient, updateIngredient}) {
  const ingredientList = ingredients.map(ingredient => {
    return (
      <div className="step input-group" key={ingredient.id}>
        <Input type="text" name="ingredient" onChange={ (e) =>( updateIngredient(ingredient.id, e.currentTarget.value) ) } />
      </div>
    )
  })
  return (
    <div className="ingredient-list">
      {ingredientList}
    </div>
  )
}

export default AddIngredientsList;
