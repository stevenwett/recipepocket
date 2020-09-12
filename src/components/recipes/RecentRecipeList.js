import React from 'react'
import { Row } from 'reactstrap';

import RecentRecipeSummary from './RecentRecipeSummary'

const RecentRecipeList = ({recipes}) => {
  return (
    <Row className="recipe-list">
      { recipes && recipes.map(recipe => {
        if (!recipe.disabled) {
          return (
            <RecentRecipeSummary recipe={recipe} key={recipe.id}/>
          )
        } else {
          return false;
        }
      })}
    </Row>
  )
}

export default RecentRecipeList;
