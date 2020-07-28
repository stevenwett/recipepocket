import React, { Component } from 'react';
import { Form, Container, Row, Col, Input, Button } from 'reactstrap';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      <Container className="user-auth user-sign-up">
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="10" lg="8">
            <article>
              <h1>Create an account</h1>
              <Form className="mt-3" onSubmit={this.handleSubmit}>
                <label className="d-block my-2" htmlFor="firstName">First name
                  <Input className="mt-1" type="text" id="firstName" onChange={this.handleChange}/>
                </label>
                <label className="d-block my-2" htmlFor="lastName">Last name
                  <Input className="mt-1" type="text" id="lastName" onChange={this.handleChange}/>
                </label>
                <label className="d-block my-2" htmlFor="email">Email
                  <Input className="mt-1" type="email" id="email" onChange={this.handleChange}/>
                </label>
                <label className="d-block my-2" htmlFor="password">Password
                  <Input className="mt-1" type="password" id="password" onChange={this.handleChange}/>
                </label>
                <label className="d-block my-2" htmlFor="confirmPassword">Confirm password
                  <Input className="mt-1" type="password" id="confirmPassword" onChange={this.handleChange}/>
                </label>
                <Button className="my-3">Create account</Button>
              </Form>
            </article>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignUp
