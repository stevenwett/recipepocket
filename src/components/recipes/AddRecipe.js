import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createRecipe } from '../../store/actions/recipeActions'
import { Form, Container, Row, Col, Input, Label, FormGroup, Button, CardBody } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class AddRecipe extends Component {
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
    this.props.createRecipe(this.state);
  }
  render() {
    const { auth } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <Container className="view view-card add-recipe">
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1>Create a recipe</h1>
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
