import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Form, Container, Row, Col, Input, Label, FormGroup, Button, CardBody } from 'reactstrap';

import { updateRecipe } from '../../store/actions/recipeActions'

class EditRecipe extends Component {
  state = {
    title: '',
    excerpt: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { recipe, profile, auth, recipeId } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    if (recipe) {
      return (
        <Container className="view view-card add-recipe">
          <article className="card">
            <CardBody>
              <Row className="justify-content-center">
                <Col>
                  <h1>{recipe.title}</h1>
                  <Link to={'/recipes/' + recipeId}>Cancel</Link>
                  <Form className="mt-3" onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="title">Recipe title</Label>
                      <Input type="text" name="title" id="title" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="excerpt">Brief summary</Label>
                      <Input type="textarea" name="excerpt" id="excerpt" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="author">Author name</Label>
                      <Input type="text" name="author" id="author" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="source">Source</Label>
                      <Input type="text" name="source" id="source" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="photo">Photo</Label>
                      <Input type="file" name="photo" id="photo" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="photoSubtitle">Photo subtitle</Label>
                      <Input type="text" name="photoSubtitle" id="photoSubtitle" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="yield">Yield</Label>
                      <Input type="text" name="yield" id="yield" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col sm="6">
                          <Label for="timeNumber">Number</Label>
                          <Input type="number" name="number" id="timeNumber" onChange={this.handleChange} />
                        </Col>
                        <Col sm="6">
                          <Label for="timeUnit">Units</Label>
                          <Input type="select" name="timeUnit" id="timeUnit" onChange={this.handleChange}>
                            <option>minutes</option>
                            <option>hours</option>
                            <option>days</option>
                          </Input>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Label for="fullSummary">Full summary</Label>
                      <Input type="textarea" name="fullSummary" id="fullSummary" onChange={this.handleChange} />
                    </FormGroup>
                    <Button>Add to your recipes</Button>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </article>
        </Container>
      )
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <p>Loading recipe...</p>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return {
    recipeId: id,
    recipe: recipe,
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecipe: (recipe) => dispatch(updateRecipe(recipe))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(EditRecipe)
