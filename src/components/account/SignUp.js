import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Form, Container, Row, Col, Input, Button, CardBody, Label, FormGroup } from 'reactstrap';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
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
    const { auth } = this.props;
    if (auth.uid ) return <Redirect to='/home' />

    return (
      <Container className="view account-sign-up">
        <Row className="get-started">
          <Col lg={6}>
            <h1 className="greetings-line">It's Easy to Get Started</h1>
            <ol>
              <li>
                <h2>Create an Account</h2>
                <p>Creating an account is easy and won’t ever cost you a thing. Your information is securely stored and will never be shared without your consent.</p>
              </li>
              <li>
                <h2>Start Adding Recipes</h2>
                <p>Add your favorite recipes to Recipepocket, a simple, organized way to store your favorite recipes from any device.</p>
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="justify-content-center create-account">
          <Col sm={10} md={8} lg={6}>
            <article className="card">
              <CardBody>
                <h1>Create an account</h1>
                <h2>Enter Your Details</h2>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Input type="text" id="firstName" placeholder="" onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="lastName">Last name</Label>
                        <Input type="text" id="lastName" placeholder="" onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="" />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button color="primary" block>Create New Account</Button>
                  <Link to="/signin" className="already-have-account">Already Have an Account?</Link>
                </Form>
              </CardBody>
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
