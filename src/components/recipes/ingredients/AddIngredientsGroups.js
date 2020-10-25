import React from 'react';
import {Input, Button} from 'reactstrap';
import AddIngredientsList from './AddIngredientsList';

function AddIngredientsGroups({ingredientsGroups, addIngredientsGroup, deleteIngredientsGroup, addIngredient, updateIngredient, deleteIngredient}) {
  const ingredientsGroupsList = ingredientsGroups.map(ingredientsGroup => {
    return (
      <div className="ingredients-group" key={ingredientsGroup.id}>
        <Input type="text" name="ingredientHeading" className="group-heading" placeholder="(Optional Heading)" />
        <AddIngredientsList ingredientsGroup={ingredientsGroup} addIngredient={addIngredient} updateIngredient={updateIngredient} deleteIngredient={deleteIngredient}/>
        <div className="text-right ingredients-group-footer">
          <Button color="secondary" outline className="btn delete-ingredient-group" onClick={(e) => {deleteIngredientsGroup(e, ingredientsGroup.id)}}>Remove Group</Button>
          <Button color="secondary" outline className="btn add-ingredient add" onClick={(e) => {e.preventDefault()}}>Add Another Ingredient</Button>
        </div>
      </div>
    )
  });
  return (
    <div className="ingredients-groups">
      <h3>Ingredients</h3>
      {ingredientsGroupsList}
      <div className="text-right">
        <Button color="secondary" className="btn add-ingredients-group" onClick={(e) => {addIngredientsGroup(e)}}>+ Add Group</Button>
      </div>
    </div>
  )
}

export default AddIngredientsGroups;
