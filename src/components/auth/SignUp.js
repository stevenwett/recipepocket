import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Form, Container, Row, Col, Input, Button } from 'reactstrap';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
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
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid ) return <Redirect to='/' />
    return (
      <Container className="user-auth user-sign-up">
        <Row className="justify-content-center">
          <Col sm="12" md="10" lg="8">
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
                <Button className="my-3">create account</Button>
              </Form>
              <div className="authentication-error">
                { authError ? <p className="text-red">{ authError }</p> : null }
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
