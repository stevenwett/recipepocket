import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Form, Container, Row, Col, Input, Label, FormGroup, Button, CardBody } from 'reactstrap';

import { createGroup } from '../../store/actions/groupActions'

class CreateGroup extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createGroup(this.state);
  }
  render() {
    const { auth } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <Container className="view view-card create-group">
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1>Create a Shared Set</h1>
                <Form className="mt-3" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="title">Name</Label>
                    <Input type="text" name="name" id="name" onChange={this.handleChange} />
                  </FormGroup>
                  <Button>Create</Button>
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
    createGroup: (group) => dispatch(createGroup(group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup)
