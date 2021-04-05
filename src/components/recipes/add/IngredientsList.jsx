import React from 'react';
import {Row, Col, Input, Button} from 'reactstrap';

function IngredientsList({
  ingredients,
  ingredientsGroupId,
  removeIngredient,
  updateIngredient
}) {

  let ingredientsList = ingredients.map(ingredient => {
    if(ingredient) {
      return (
        <Row className="no-gutters add-ingredients-item" key={ingredient.id}>
          <Col xs={11} className="text">
            <Input
              onChange={(e) => {
                e.preventDefault();
                updateIngredient(
                  'text',
                  ingredient.id,
                  e.target.value,
                  ingredientsGroupId
                );
            }}/>
          </Col>
          <Col xs={1} className="text-right">
            <Button
              color="secondary"
              outline className="remove-ingredient"
              title="Remove ingredient"
              onClick={(e) => {
                e.preventDefault();
                removeIngredient(ingredientsGroupId, ingredient.id);
              }}>–</Button>
          </Col>
        </Row>
      )
    } else {
      return false;
    }
  });
  if ( 0 === ingredientsList.length ) {
    return (
      <div className="add-ingredients-list">
        <p>No ingredients.</p>
      </div>
    )
  } else {
    return (
      <div className="add-ingredients-list">
        {ingredientsList}
      </div>
    )
  }
}

export default IngredientsList;
