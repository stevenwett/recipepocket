import React from 'react'
import { Row, Col } from 'reactstrap';

const RecentRecipes = () => {
	return (
		<Row className="recent-recipe-list no-gutters">
			<Col xs="6" sm="6" className="mb-3 pr-3">
				<article>
					<Row className="recent-recipe no-gutters rounded">
						<Col xs="3" sm="3" className="preview">
							&nbsp;
						</Col>
						<Col xs="7" sm="7" className="text">
							<div className="text-inner">
								<h2>Turky and Bean Chili</h2>
							</div>
						</Col>
					</Row>
				</article>
			</Col>
			<Col xs="6" sm="6" className="mb-3 pr-3">
				<article>
					<Row className="recent-recipe no-gutters rounded">
						<Col xs="3" sm="3" className="preview">
							&nbsp;
						</Col>
						<Col xs="7" sm="7" className="text">
							<div className="text-inner">
								<h2>Best-ever Grilled Cheese</h2>
							</div>
						</Col>
					</Row>
				</article>
			</Col>
			<Col xs="6" sm="6" className="mb-3 pr-3">
				<article>
					<Row className="recent-recipe no-gutters rounded">
						<Col xs="3" sm="3" className="preview">
							&nbsp;
						</Col>
						<Col xs="7" sm="7" className="text">
							<div className="text-inner">
								<h2>Queso, Not From a Jar</h2>
							</div>
						</Col>
					</Row>
				</article>
			</Col>
			<Col xs="6" sm="6" className="mb-3 pr-3">
				<article>
					<Row className="recent-recipe no-gutters rounded">
						<Col xs="3" sm="3" className="preview">
							&nbsp;
						</Col>
						<Col xs="7" sm="7" className="text">
							<div className="text-inner">
								<h2>Brussels Sprouts Gratin</h2>
							</div>
						</Col>
					</Row>
				</article>
			</Col>
		</Row>
	) 
}

export default RecentRecipes;
