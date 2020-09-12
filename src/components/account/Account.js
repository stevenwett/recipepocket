import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Label, CustomInput, Container, Row, Col, CardBody, Button, Form, Input, FormGroup } from 'reactstrap';

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
    return (
      <Container className="view view-card my-account">
        <article className="card">
          <CardBody>
            <Row>
              <Col>
                <h1 className="greeting">Account</h1>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col>
                      <label htmlFor="firstName">First name
                        <Input type="text" id="firstName" placeholder={profile.firstName} onChange={this.handleChange}/>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="lastName">Last name
                        <Input type="text" id="lastName" placeholder={profile.lastName} onChange={this.handleChange}/>
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label htmlFor="email">Email
                        <Input type="email" id="email" placeholder={auth.email} />
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="password">Password
                        <Input type="password" id="password" onChange={this.handleChange}/>
                      </label>
                    </Col>
                  </Row>
                  <div>
                    <Button>update my details</Button>
                  </div>
                </Form>
                <div className="authentication-error">
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>General</h2>
                <ul>
                  {/*<li><Link to="/account/units">Units</Link></li>*/}
                  <li>
                    <FormGroup>
                      <Label className="settings-item" for="appThemeSwitch">App theme</Label>
                      <div>
                        <CustomInput type="switch" id="appThemeSwitch" name="appTheme" label="Light theme" onChange={this.handleSwitch} />
                      </div>
                    </FormGroup>
                  </li>
                </ul>
                <h2>About</h2>
                <ul>
                  <li>
                    <div className="settings-item">
                      Version
                      <p>1.0</p>
                    </div>
                  </li>
                  <li><Link to="/account/terms-conditions">Terms and conditions</Link></li>
                  <li><Link to="/account/privacy-policy">Privacy policy</Link></li>
                  <li><Link to="/account/support">Support</Link></li>
                </ul>
                <h2>Other</h2>
                <ul>
                  <li>
                    <button className="settings-item" onClick={signOut}>
                      Log Out
                      <p>You are logged in as {profile.firstName} {profile.lastName}</p>
                    </button>
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
