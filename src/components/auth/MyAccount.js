import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

class MyAccount extends Component {
  render() {
    const { auth, signOut, profile } = this.props;
    if (!auth.uid) return <Redirect to='/learn' />
    return (
      <Container className="view my-account">
        <Row>
          <Col>
            <h1>My account</h1>
            <p>Email (disabled), First name, last name, password</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Shared recipe groups</h2>
            <ul>
              <li>Recipe Group 1</li>
              <li>Recipe Group 2</li>
              <li>Recipe Group 3</li>
            </ul>
            <h2>General</h2>
            <ul>
              <li><strong>Units</strong></li>
              <li><strong>App Theme</strong></li>
              <li className="disabled"><strong>Language</strong></li>
              <li><strong>Time format</strong></li>
            </ul>
            <h2>About</h2>
            <ul>
              <li>
                <strong>Version</strong>
                <p>1.0</p>
              </li>
              <li><strong>Terms and Conditions</strong></li>
              <li><strong>Privacy Policy</strong></li>
              <li><strong>Support</strong></li>
            </ul>
            <h2>Other</h2>
            <ul>
              <li>
                <button onClick={signOut}>Log out</button>
                <p>You are logged in as {profile.firstName} {profile.lastName}</p>
              </li>
            </ul>
          </Col>
        </Row>
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
