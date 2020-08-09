import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Form, Container, Row, Col, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

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
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <Container className="user-auth user-sign-in">
        <Row className="justify-content-center">
          <Col sm="12" md="10" lg="8">
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
