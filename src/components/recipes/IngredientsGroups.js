import React from 'react';
import {Row, Col} from 'reactstrap';

import IngredientsList from './IngredientsList';

function IngredientsGroups({ingredients}) {
  let ingredientsGroups = ingredients.map(ingredientsGroup => {
    return (
      <div className="ingredients-group" key={ingredientsGroup.id}>
        { ingredientsGroup &&
          <h3>{ingredientsGroup.heading}</h3>
        }
        <IngredientsList ingredients={ingredientsGroup.list} />
      </div>
    )
  });
  return (
    <div className="ingredients-groups">
      {ingredientsGroups}
    </div>
  )
}

export default IngredientsGroups;
