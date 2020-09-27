import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { Form, Container, Row, Col, Input, InputGroup, Label, FormGroup, Button, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { createRecipe } from '../../store/actions/recipeActions'

class AddRecipe extends Component {
  state = {
    title: '',
    author: '',
    yield: '',
    time: '',
    description: '',
    photo: {
      url: '',
      alt: '',
      caption: ''
    },
    ingredients: [],
    steps: [],
    tips: ''
  }
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
  }
  render() {
    const { auth } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />

    {/*
      * Add in code to force the screen to the top.
    */}

    return (
      <Container className="view add-recipe">
        <Breadcrumb className="breadcrumb-nav">
          <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Add a Recipe</BreadcrumbItem>
        </Breadcrumb>
        <div className="view-card">
          <Link to="/home" className="btn btn-outline-secondary btn-card-cancel">Cancel</Link>
          <article className="card">
            <CardBody>
              <Row className="justify-content-center">
                <Col>
                  <h1>Add a Recipe</h1>
                  <div className="add-recipe-form">
                    <h2>Add Your Own Recipe</h2>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="title"><h3>Recipe title</h3></Label>
                        <Input type="text" name="title" id="title" onChange={this.handleChange} required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="author"><h3>Recipe Author</h3></Label>
                        <Input type="text" name="author" id="author" onChange={this.handleChange} required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="yield"><h3>Yield</h3></Label>
                        <Input type="text" name="yield" id="yield" placeholder="e.g. One 8-inch pie" onChange={this.handleChange} required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="totalTime"><h3>Total Time</h3></Label>
                        <Input type="text" name="totalTime" id="totalTime" placeholder="e.g. 1 1/2 hours, plus cooling" onChange={this.handleChange} required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="description"><h3>Description</h3></Label>
                          <Input type="textarea" name="description" id="description" onChange={this.handleChange} required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="photo" className="upload-photo"><h3>Recipe Photo</h3></Label>
                        <Input type="file" name="photo" id="photo" onChange={this.handleChange} />
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
                        <Button className="btn btn-outline-secondary add-ingredient btn-add-recipe add">Add Another Step</Button>
                      </FormGroup>
                      <FormGroup>
                        <Label for="tips"><h3>Recipe Tips</h3></Label>
                        <Input type="textarea" name="tips" id="tips" onChange={this.handleChange} />
                      </FormGroup>
                      <div className="add-recipe-footer">
                        <Button color="primary" block>Save Recipe</Button>
                        <Link to="/home" className="btn btn-outline-secondary">Don't Save and Cancel</Link>
                      </div>

                    </Form>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </article>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
