import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { Form, Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, FormGroup, Button, CardBody } from 'reactstrap';

import { createRecipe } from '../../store/actions/recipeActions'

class AddRecipe extends Component {
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
    this.props.createRecipe(this.state);
  }
  render() {
    const { auth } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <Container className="view view-card add-recipe">
        <Link to="/recipes" className="btn btn-outline-primary">Cancel</Link>
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1>Add a Recipe</h1>
                <h2>Add Your Own Recipe</h2>
                <Form className="mt-3" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="title">Recipe title</Label>
                    <Input type="text" name="title" id="title" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="author">Recipe Author</Label>
                    <Input type="text" name="author" id="author" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="yield">Yield</Label>
                    <Input type="text" name="yield" id="yield" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="time">Time</Label>
                    <Input type="text" name="time" id="time" onChange={this.handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" onChange={this.handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="photo">Recipe Photo</Label>
                    <Input type="file" name="photo" id="photo" onChange={this.handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Ingredients
                      <InputGroup>
                        <Input placeholder="" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>=</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <InputGroup>
                        <Input placeholder="" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>=</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Label>
                    <Button className="btn btn-outline-primary add-ingredient">Add Another Ingredient</Button>
                  </FormGroup>

                  <FormGroup>
                    <Label>Preparation Steps
                      <InputGroup>
                        <Input type="textarea" placeholder="" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>=</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <InputGroup>
                        <Input type="textarea" placeholder="" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>=</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Label>
                    <Button className="btn btn-outline-primary add-ingredient">Add Another Step</Button>
                  </FormGroup>

                  <FormGroup>
                    <Label for="tips">Recipe Tips</Label>
                    <Input type="textarea" name="tips" id="tips" onChange={this.handleChange} />
                  </FormGroup>

                  <Button>Save Recipe</Button>
                  <Link to="/recipes" className="btn btn-outline-primary">Don't Save and Cancel</Link>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </article>
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
