import React from 'react'
import { Col, Row } from 'reactstrap';
import RecipeSummary from './RecipeSummary'

const RecipeList = () => {
  return (
    <Row className="recipe-list">
      <Col sm="12" md="6" lg="4">
        <RecipeSummary />
      </Col>
      <Col sm="12" md="6" lg="4">
        <RecipeSummary />
      </Col>
      <Col sm="12" md="6" lg="4">
        <RecipeSummary />
      </Col>
      <Col sm="12" md="6" lg="4">
        <RecipeSummary />
      </Col>
    </Row>
  )
}

export default RecipeList;
