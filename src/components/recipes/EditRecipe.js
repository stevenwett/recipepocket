import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Form, Container, Row, Col, Input, InputGroup, Label, FormGroup, FormText, Button, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';

import { updateRecipe, deleteRecipe } from '../../store/actions/recipeActions'

class EditRecipe extends Component {
  state = {
    title: '',
    excerpt: ''
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateRecipe(this.props.recipeId, this.state);
  }
  handleDelete = (e) => {
    this.props.deleteRecipe(this.props.recipeId);
  }
  render() {
    const { auth, recipe, recipeId } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />

    {/*
      * Add in code to force the screen to the top.
    */}
    if (recipe) {
      if ( recipe.disabled ) return <Redirect to='/home' />
      return (
        <Container className="view add-recipe">
          <Breadcrumb className="breadcrumb-nav">
            <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href={"/recipes/" + recipeId}>{ recipe.title }</a></BreadcrumbItem>
            <BreadcrumbItem active>Edit</BreadcrumbItem>
          </Breadcrumb>
          <div className="view-card">
            <Link to={"/recipes/" + recipeId} className="btn btn-card-cancel">Cancel</Link>
            <article className="card">
              <CardBody>
                <Row className="justify-content-center">
                  <Col>
                    <h1>{recipe.title}</h1>
                    <Form className="mt-3" onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="title"><h3>Recipe title</h3></Label>
                        <Input type="text" name="title" id="title" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="author"><h3>Recipe Author</h3></Label>
                        <Input type="text" name="author" id="author" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="yield"><h3>Yield</h3></Label>
                        <Input type="text" name="yield" id="yield" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="totalTime"><h3>Total Time</h3></Label>
                        <Input type="text" name="totalTime" id="totalTime" onChange={this.handleChange} />
                      </FormGroup>

                      <FormGroup>
                        <Label for="description"><h3>Description</h3></Label>
                        <Input type="textarea" name="description" id="description" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="photo"><h3>Recipe Photo</h3></Label>
                        <Input type="file" name="photo" id="photo" onChange={this.handleChange} />
                        <FormText color="muted">
                          Upload a photo of your final masterpiece!
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <Label><h3>Ingredients</h3></Label>
                        <InputGroup className="step">
                          <Input placeholder="" name="ingredient" />
                        </InputGroup>
                        <InputGroup className="step">
                          <Input placeholder="" name="ingredient" />
                        </InputGroup>
                        <Button className="btn btn-outline-secondary add-ingredient add">Add Another Ingredient</Button>
                      </FormGroup>
                      <FormGroup>
                        <Label><h3>Preparation Steps</h3></Label>
                        <InputGroup className="step">
                          <Input type="textarea" placeholder="" />
                        </InputGroup>
                        <InputGroup className="step">
                          <Input type="textarea" placeholder="" />
                        </InputGroup>
                        <Button className="btn btn-outline-secondary add-ingredient add">Add Another Step</Button>
                      </FormGroup>
                      <FormGroup>
                        <Label for="tips"><h3>Recipe Tips</h3></Label>
                        <Input type="textarea" name="tips" id="tips" onChange={this.handleChange} />
                      </FormGroup>
                      <div className="add-recipe-footer">
                        <Button color="primary" block>Update Recipe</Button>
                        <Link to={"/recipes/" + recipeId} className="btn btn-outline-primary">Cancel</Link>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </article>
          </div>
          <div className="text-center">
            <Button className="btn btn-recipe-delete" onClick={this.handleDelete}>Delete Recipe</Button>
          </div>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecipe: (recipeId, recipe) => dispatch(updateRecipe(recipeId, recipe)),
    deleteRecipe: (recipeId, recipe) => dispatch(deleteRecipe(recipeId, recipe))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(EditRecipe)
