import React from 'react'
import { Row } from 'reactstrap';
import RecipeSummary from './RecipeSummary'

const RecipeList = ({recipes}) => {
  return (
    <Row className="recipe-list">
      { recipes && recipes.map(recipe => {
        return (
          <RecipeSummary recipe={recipe} key={recipe.id}/>
        )
      })}
    </Row>
  )
}

export default RecipeList;
