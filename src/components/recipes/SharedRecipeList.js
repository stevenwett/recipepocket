import React from 'react'
import { Col, Row } from 'reactstrap';
import RecipeSummary from './RecipeSummary'

const SharedRecipeList = () => {
	return (
		<Row className="recipe-list">
			<Col sm="12" md="6">
				<RecipeSummary />
			</Col>
			<Col sm="12" md="6">
				<RecipeSummary />
			</Col>
			<Col sm="12" md="6">
				<RecipeSummary />
			</Col>
			<Col sm="12" md="6">
				<RecipeSummary />
			</Col>
		</Row>
	)
}

export default SharedRecipeList;
