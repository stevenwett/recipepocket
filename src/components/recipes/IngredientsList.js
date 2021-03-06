import React from 'react';
import {Row, Col} from 'reactstrap';

function IngredientsList({ingredients}) {
  let ingredientsList = ingredients.map(ingredient => {
    return (
      <li className="ingredient" key={ingredient.id}>
        <Row>
          <Col sm={11} className="text">{ingredient.text}</Col>
        </Row>
      </li>
    )
  });
  return (
    <ul className="ingredients">
      {ingredientsList}
    </ul>
  )
}

export default IngredientsList;
