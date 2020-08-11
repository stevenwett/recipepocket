import React, { Component } from 'react';
import { Container, Row, Col, CardBody, Button, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

class MyAccount extends Component {
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
  }
  render() {
    const { auth, signOut, profile } = this.props;
    if (!auth.uid) return <Redirect to='/welcome' />
    return (
      <Container className="view view-card my-account">
        <article className="card">
          <CardBody>
            <Row>
              <Col>
                <h1>My account</h1>
                <h2>Account details</h2>
                <Form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="email">Email
                      <Input disabled type="email" id="email" value={auth.email} />
                    </label>
                  </div>
                  <label htmlFor="firstName">First name
                    <Input type="text" id="firstName" placeholder={profile.firstName} onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="lastName">Last name
                    <Input type="text" id="lastName" placeholder={profile.lastName} onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="password">Password
                    <Input type="password" id="password" onChange={this.handleChange}/>
                  </label>
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
                <h2>Shared set of recipes</h2>
                <ul>
                  <li><Link to="/shared-set/1">Recipe group 1</Link></li>
                  <li><Link to="/shared-set/2">Recipe group 2</Link></li>
                  <li><Link to="/shared-set/3">Recipe group 3</Link></li>
                  <li><Link to="/shared-set">Create shared set</Link></li>
                  <li><Link to="/shared-set/join">Join a shared set</Link></li>
                </ul>
                <h2>General</h2>
                <ul>
                  <li><Link to="/account/units">Units</Link></li>
                  <li><Link to="/account/theme">App theme</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
