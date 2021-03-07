import React from 'react';
import {Row, Col, Card, CardBody, Input, Button} from 'reactstrap';

import IngredientsList from './IngredientsList';

function IngredientsGroups({
  ingredients,
  addIngredientsGroup,
  removeIngredientsGroup,
  updateIngredientsGroupHeading,
  addIngredient,
  removeIngredient,
  updateIngredient
}) {

  const ingredientsGroups = ingredients.map((ingredientsGroup, index) => {
    return (
      <Card className="ingredients-group" key={ingredientsGroup.id}>
        <CardBody>
          <Row className="no-gutters">
            <Col xs={12} sm={8} className="ingredients-group-heading-column">
              <Input
                type="text"
                name="ingredientHeading"
                className="ingredients-group-heading"
                placeholder="Optional Group Heading"
                onChange={(e) => {
                  e.preventDefault();
                  updateIngredientsGroupHeading(
                    ingredientsGroup.id,
                    e.target.value
                  );
                }}/>
            </Col>
            <Col xs={12} sm={4} className="remove-ingredient-group-column text-right">
              <Button
                color="secondary"
                outline
                className="remove-ingredient-group"
                title="Remove ingredients group"
                onClick={(e) => {
                  e.preventDefault();
                  removeIngredientsGroup(ingredientsGroup.id);
                }}>Remove Group {index + 1}</Button>
            </Col>
          </Row>
          <Row className="no-gutters" className="add-ingredients-header">
            <Col xs={4} sm={3}>
              <p className="h4">Quantity</p>
            </Col>
            <Col xs={8} sm={9}>
              <p className="h4">Ingredient</p>
            </Col>
          </Row>
          { ingredientsGroup.list &&
            <IngredientsList
              ingredients={ingredientsGroup.list}
              ingredientsGroupId={ingredientsGroup.id}
              removeIngredient={removeIngredient}
              updateIngredient={updateIngredient}/>
          }
          <div className="no-gutters ingredients-group-footer">
            <Row className="no-gutters">
              <Col className="text-right">
                <Button
                  color="secondary"
                  outline
                  className="btn add-ingredient add"
                  onClick={(e) => {
                    e.preventDefault();
                    addIngredient(ingredientsGroup.id);
                  }}>Add Ingredient</Button>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    )
  });
  if ( 0 === ingredients.length ) {
    return (
      <>
        <h3>Ingredients Groups</h3>
        <p>There are currently no groups of ingredients. Please add one.</p>
        <Button
          color="secondary"
          outline className="btn add-ingredients-group"
          onClick={(e) => {
            e.preventDefault();
            addIngredientsGroup();
          }}>Add Ingredients Group</Button>
      </>
    )
  } else {
    return (
      <>
        <h3>Ingredients Groups</h3>
        {ingredientsGroups}
        <Button
          color="secondary"
          outline className="btn add-ingredients-group"
          onClick={(e) => {
            e.preventDefault();
            addIngredientsGroup();
          }}>Add Ingredients Group</Button>
      </>
    )
  }
}

export default IngredientsGroups;
