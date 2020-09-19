import React from 'react'
import { Row } from 'reactstrap';

import RecipeSummary from './RecipeSummary'

const RecipeList = ({recipes}) => {
  return (
    <Row className="recipe-list justify-content-center">
      { recipes && recipes.map(recipe => {
        if (!recipe.disabled) {
          return (
            <RecipeSummary recipe={recipe} key={recipe.id}/>
          )
        } else {
          return false;
        }
      })}
    </Row>
  )
}

export default RecipeList;
