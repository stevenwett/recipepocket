import React, { Component } from 'react';
import { Form, Container, Row, Col, Input, Button } from 'reactstrap';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
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
    return (
      <Container className="user-auth user-sign-in">
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="10" lg="8">
            <article>
              <h1>Sign in</h1>
              <Form className="mt-3" onSubmit={this.handleSubmit}>
                <label className="d-block my-2" htmlFor="email">Email
                  <Input className="mt-1" type="email" id="email" onChange={this.handleChange}/>
                </label>
                <label className="d-block my-2" htmlFor="password">Password
                  <Input className="mt-1" type="password" id="password" onChange={this.handleChange}/>
                </label>
                <Button className="my-3">Log in</Button>
              </Form>
            </article>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignIn
