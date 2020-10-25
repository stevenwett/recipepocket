import React from 'react';
import {Input, Button} from 'reactstrap';

function AddIngredientsList({ingredientsGroup, addIngredient, updateIngredient, deleteIngredient}) {
  const list = ingredientsGroup.list.map(ingredient => {
    return (
      <div className="step input-group" key={ingredient.id}>
        <Input type="text" name="ingredient" onChange={(e) => {updateIngredient(e.currentTarget.value, ingredient.id, ingredientsGroup.id)}}/>
        <Button className="btn remove-ingredient" title="Remove ingredient" onClick={(e) => {deleteIngredient(e, ingredient.id, ingredientsGroup.id)}}>&ndash;</Button>
      </div>
    )
  });
  return (
    <div className="add-ingredients">
      {list}
    </div>
  )
}

export default AddIngredientsList;
