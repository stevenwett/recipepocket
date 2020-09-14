import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Label, Container, Row, Col, CardBody, Button, Form, Input, FormGroup } from 'reactstrap';

import { signOut } from '../../store/actions/authActions';

class Account extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSwitch = (e) => {
    e.target.checked ? (
      console.log('Dark theme')
    ) : (
      console.log('Light theme')
    )
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { auth, signOut, profile } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    {/*
      * Add in code to force the screen to the top.
    */}

    return (
      <Container className="view view-card account">
        <Link to="/home" className="btn btn-outline-secondary btn-card-cancel">All Recipes</Link>
        <article className="card">
          <CardBody>
            <Row>
              <Col>
                <h1>Account</h1>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Input type="text" id="firstName" value={profile.firstName} onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="lastName">Last name</Label>
                        <Input type="text" id="lastName" value={profile.lastName} onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" value={auth.email} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" placeholder="(hidden)" onChange={this.handleChange}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button outline block disabled>Update My Details</Button>
                </Form>
                <div className="authentication-error">
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>About</h2>
                <ul>
                  <li>
                    <div className="settings-item">
                      Version
                      <p>1.0</p>
                    </div>
                  </li>
                  <li><Link className="settings-item" to="/account/terms-conditions">Terms and conditions</Link></li>
                  <li><Link className="settings-item" to="/account/privacy-policy">Privacy policy</Link></li>
                </ul>
                <h2>Other</h2>
                <ul>
                  <li>
                    <div role="button" className="settings-item" onClick={signOut}>
                      Log Out
                      <p>You are logged in as {profile.firstName} {profile.lastName}</p>
                    </div>
                  </li>
                </ul>
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
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
