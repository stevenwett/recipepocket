import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

import RecentRecipeSummary from './RecentRecipeSummary'

const RecentRecipeList = ({recipes}) => {
  return (
    <Row className="recipe-list">
      { recipes && recipes.map(recipe => {
        if (!recipe.disabled) {
          return (
            <RecentRecipeSummary recipe={recipe} key={recipe.id}/>
          )
        }
      })}
    </Row>
  )
}

export default RecentRecipeList;
