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
        <div>
          <Link to="/recipes" className="btn btn-outline-primary btn-card-cancel">Cancel</Link>
        </div>
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1>Add a Recipe</h1>
                <div className="add-recipe-form">
                  <h2>Add Your Own Recipe</h2>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="title">
                        <h3>Recipe title</h3>
                        <Input type="text" name="title" id="title" onChange={this.handleChange} />
                      </Label>
                      <Label for="author">
                        <h3>Recipe Author</h3>
                        <Input type="text" name="author" id="author" onChange={this.handleChange} />
                      </Label>
                      <Label for="yield">
                        <h3>Yield</h3>
                        <Input type="text" name="yield" id="yield" placeholder="e.g. One 8-inch pie" onChange={this.handleChange} />
                      </Label>
                      <Label for="time">
                        <h3>Time</h3>
                        <Input type="text" name="time" id="time" placeholder="e.g. 1 1/2 hours, plus cooling" onChange={this.handleChange} />
                      </Label>
                      <Label for="description">
                        <h3>Description</h3>
                        <Input type="textarea" name="description" id="description" onChange={this.handleChange} />
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label for="photo" className="upload-photo">
                        <h3>Recipe Photo</h3>
                        <Input type="file" name="photo" id="photo" onChange={this.handleChange} />
                      </Label>
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <h3>Ingredients</h3>
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
                      <Button className="btn btn-outline-secondary add-ingredient">Add Another Ingredient</Button>
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <h3>Preparation Steps</h3>
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
                      <Button className="btn btn-outline-secondary add-ingredient">Add Another Step</Button>
                    </FormGroup>

                    <FormGroup>
                      <Label for="tips">
                        <h3>Recipe Tips</h3>
                        <Input type="textarea" name="tips" id="tips" onChange={this.handleChange} />
                      </Label>
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
