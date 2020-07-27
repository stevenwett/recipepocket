import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, CardFooter, Col, Row } from 'reactstrap';

const SharedRecipeList = () => {
	return (
		<Row className="recipe-list">
			<Col sm="12" md="6">
				<article className="recipe-summary">
					<Card>
						<CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="" />
						<CardBody>
							<CardTitle>
								<h2>Roaster Peppers with Parm Breadcrumbs</h2>
							</CardTitle>
							<CardText>Recipe summary text</CardText>
						</CardBody>
						<CardFooter className="text-muted">
							<p>Added on July 26 by Steven</p>
						</CardFooter>
					</Card>
				</article>
			</Col>
			<Col sm="12" md="6">
				<article className="recipe-summary">
					<Card>
						<CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="" />
						<CardBody>
							<CardTitle>
								<h2>Pork and Asparagus Stir-fry</h2>
							</CardTitle>
							<CardText>Recipe sumamry text</CardText>
						</CardBody>
						<CardFooter className="text-muted">
						</CardFooter>
					</Card>
				</article>
			</Col>
			<Col sm="12" md="6">
				<article className="recipe-summary">
					<Card>
						<CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="" />
						<CardBody>
							<CardTitle>
								<h2>Honey-chipotle Shrimp Tacos</h2>
							</CardTitle>
							<CardText>Recipe sumamry text</CardText>
						</CardBody>
						<CardFooter className="text-muted">
						</CardFooter>
					</Card>
				</article>
			</Col>
			<Col sm="12" md="6">
				<article className="recipe-summary">
					<Card>
						<CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="" />
						<CardBody>
							<CardTitle>
								<h2>Mojo Meatballs</h2>
							</CardTitle>
							<CardText>Recipe sumamry text</CardText>
						</CardBody>
						<CardFooter className="text-muted">
						</CardFooter>
					</Card>
				</article>
			</Col>
		</Row>
	) 
}

export default SharedRecipeList;
