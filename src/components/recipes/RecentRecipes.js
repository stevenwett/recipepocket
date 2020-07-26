import React from 'react'
import { Row, Col } from 'reactstrap';

const RecentRecipes = () => {
	return (
		<Row className="recent-recipe-list no-gutters">
			<Col sm="6" className="mb-3 pr-3">
				<Row className="no-gutters bg-light rounded">
					<Col sm="2" className="bg-dark">
						&nbsp;
					</Col>
					<Col sm="8" className="px-3 py-1">
						<h2>Turky and Bean Chili</h2>
					</Col>
				</Row>
			</Col>
			<Col sm="6" className="mb-3 pr-3">
				<Row className="no-gutters bg-light rounded">
					<Col sm="2" className="bg-dark">
						&nbsp;
					</Col>
					<Col sm="8" className="px-3 py-1">
						<h2>Best-ever Grilled Cheese</h2>
					</Col>
				</Row>
			</Col>
			<Col sm="6" className="mb-3 pr-3">
				<Row className="no-gutters bg-light rounded">
					<Col sm="2" className="bg-dark">
						&nbsp;
					</Col>
					<Col sm="8" className="px-3 py-1">
						<h2>Queso, Not From a Jar</h2>
					</Col>
				</Row>
			</Col>
			<Col sm="6" className="mb-3 pr-3">
				<Row className="no-gutters bg-light rounded">
					<Col sm="2" className="bg-dark">
						&nbsp;
					</Col>
					<Col sm="8" className="px-3 py-1">
						<h2>Brussels Sprouts Gratin</h2>
					</Col>
				</Row>
			</Col>
		</Row>
	) 
}

export default RecentRecipes;
