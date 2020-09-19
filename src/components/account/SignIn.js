import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Form, Container, Row, Col, Input, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

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
    if (auth.uid) return <Redirect to='/home' />
    return (
      <Container className="view user-auth user-sign-in">
        <div className="view-card">
          <Link to="/" className="btn btn-outline-secondary btn-card-cancel">Cancel</Link>
          <article className="card">
            <CardBody>
              <Row className="justify-content-center">
                <Col>
                  <article>
                    <h1>Sign in</h1>
                    <Form className="mt-3" onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" onChange={this.handleChange}/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" onChange={this.handleChange}/>
                      </FormGroup>
                      <Button color="primary" block>Sign In</Button>
                    </Form>
                    <div className="authentication-error">
                      { authError ? <p className="text-red">{ authError }</p> : null }
                    </div>
                  </article>
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
