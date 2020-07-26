import React, { Component } from 'react'
import Activity from './Activity'
import RecipeList from '../recipes/RecipeList'
import RecentRecipes from '../recipes/RecentRecipes'
import CreateRecipe from '../recipes/CreateRecipe'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Dashboard extends Component {
	render() {
		return (
			<Container className="dashboard">
				<Row>
					<Col sm="12" className="mb-2">
						<p className="h1">happy cooking!</p>
					</Col>
					<Col sm="12" lg="8" className="mb-3">
						<section>
							<h1 className="sr-only">recent recipes</h1>
							<RecentRecipes />
						</section>
					</Col>
					<Col sm="12" lg="4" className="mb-4">
						<section>
							<h1>add a recipe</h1>
								<Form>
									<FormGroup>
										<Label for="exampleSearch" className="sr-only">enter the recipe page url</Label>
										<Input
											type="text"
											name="recipeUrl"
											id="recipeUrl"
											placeholder="enter the recipe page url"
										/>
									</FormGroup>
								</Form>
								<p>&mdash; OR &mdash;</p>
							<Button color="primary" size="lg">add your own recipe</Button>
						</section>
					</Col>
					<Col sm="12" className="mb-4">
						<section>
							<h1>your recipe pocket</h1>
							<Form>
									<FormGroup>
										<Label for="exampleSearch">Search</Label>
										<Input
											type="search"
											name="search"
											id="searchRecipes"
											placeholder="search your recipes"
										/>
									</FormGroup>
								</Form>
							<RecipeList />
						</section>
					</Col>
				</Row>
				<section>
					<Row>
						<Col sm="12" className="col-12">
							<h1>family recipes</h1>
						</Col>
						<Col sm="12" lg="8" className="mb-3">
							<section>
								<h2 className="sr-only">shared recipes</h2>
							</section>
						</Col>
						<Col sm="12" lg="4" className="mb-3">
							<section>
								<h2>recent activity</h2>
								<Activity />
							</section>
						</Col>
					</Row>
				</section>
			</Container>
		)
	}
}

export default Dashboard;
