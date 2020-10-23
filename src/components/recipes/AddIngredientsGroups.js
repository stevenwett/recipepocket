import React from 'react';
import {Input, Button} from 'reactstrap';

function AddIngredientsGroups({ingredientsGroups, deleteIngredient, updateIngredient}) {
  // const ingredientList = ingredientGroup.list.map(ingredient => {
  //   return (
  //     <div>
  //       <Input type="text" name="ingredientHeading" placeholder="Group Heading" />
  //         <div className="step input-group" key={ingredient.id}>
  //           <Input type="text" name="ingredient" onChange={ (e) =>( updateIngredient(ingredient.id, e.currentTarget.value) ) } />
  //         </div>
  //     </div>
  //   )
  // })
  const ingredientsGroupsList = ingredientsGroups.map(ingredientsGroup => {
    return (
      <div className="ingredients-group" key={ingredientsGroup.id}>
        <Input type="text" name="ingredientHeading" className="group-heading" placeholder="(Optional Heading)" />
        <div className="ingredient-list">
          <div className="step input-group">
            <Input type="text" name="ingredient" />
            <Button className="btn remove-ingredient" title="Remove ingredient">&ndash;</Button>
          </div>
          <div className="step input-group">
            <Input type="text" name="ingredient" />
            <Button className="btn remove-ingredient" title="Remove ingredient">&ndash;</Button>
          </div>
          <div className="step input-group">
            <Input type="text" name="ingredient" />
            <Button className="btn remove-ingredient" title="Remove ingredient">&ndash;</Button>
          </div>
          <div className="text-right">
            <Button color="secondary" outline className="btn add-ingredient add" id="ingredient">Add Another Ingredient</Button>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="ingredients-groups">
      <h3>Ingredients</h3>
      {ingredientsGroupsList}
      <div className="text-right">
        <Button color="secondary" className="btn add-ingredients-group">+ Add Group</Button>
      </div>
    </div>
  )
}

export default AddIngredientsGroups;
