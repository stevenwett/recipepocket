import React from 'react';
import {Input, Button} from 'reactstrap';

function AddIngredientsList({ingredients, addIngredient, updateIngredient}) {
  const list = ingredients.map(ingredient => {
    return (
      <div className="step input-group" key={ingredient.id}>
        <Input type="text" name="ingredient" />
        <Button className="btn remove-ingredient" title="Remove ingredient" onClick={(e) => {e.preventDefault()}}>&ndash;</Button>
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
