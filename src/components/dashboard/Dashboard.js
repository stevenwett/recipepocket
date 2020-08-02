import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Activity from './Activity'
import RecipeList from '../recipes/RecipeList'
import RecentRecipes from '../recipes/RecentRecipes'
import SharedRecipeList from '../recipes/SharedRecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    // console.log(this.props)

    const { recipes } = this.props;

    return (
      <Container className="dashboard">
        <Row className="my-4">
          <Col sm="12" className="mb-3">
            <p className="h1 greeting">Happy cooking!</p>
          </Col>
          <Col sm="12" lg="8">
            <section>
              <h1 className="sr-only">Recent recipes</h1>
              <RecentRecipes />
            </section>
          </Col>
          <Col sm="12" lg="4">
            <section>
              <h2>Add a recipe</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleSearch" className="sr-only">enter the recipe page url</Label>
                    <Input type="text" name="recipeUrl" id="recipeUrl" placeholder="enter the recipe page url" onChange={this.handleChange} />
                  </FormGroup>
                </Form>
                <p>&mdash; OR &mdash;</p>
              <Link className="btn btn-outline-light" to="/add-recipe">add your own recipe</Link>
            </section>
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm="12">
            <section>
              <h1>Your recipes</h1>
              <Row className="my-3">
                <Col sm="12" lg="6">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="searchRecipes" className="sr-only">Search your recipes</Label>
                      <Input type="search" name="search" id="searchRecipes" placeholder="search your recipes" onChange={this.handleChange} />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <RecipeList recipes={recipes} />
            </section>
          </Col>
        </Row>
        <section>
          <Row className="my-4">
            <Col sm="12">
              <h1>Family recipes</h1>
              <Row className="my-3">
                <Col sm="12" lg="6">
                  <Form>
                    <FormGroup>
                      <Label for="searchSharedRecipes" className="sr-only">Search shared recipes</Label>
                      <Input
                        type="search"
                        name="search"
                        id="searchSharedRecipes"
                        placeholder="search your shared recipes"
                      />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="8">
              <section>
                <h2 className="sr-only">shared recipes</h2>
                <SharedRecipeList />
              </section>
            </Col>
            <Col sm="12" lg="4">
              <section>
                <h2>Recent activity</h2>
                <Activity />
              </section>
            </Col>
          </Row>
        </section>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Dashboard);
