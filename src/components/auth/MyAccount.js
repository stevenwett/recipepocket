import React, { Component } from 'react';
import { Container, Row, Col, CardBody, Button, Form, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import GroupList from '../groups/GroupList';

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
    const { auth, signOut, profile, groups } = this.props;
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
                <h2>Shared recipes</h2>
                <GroupList groups={groups} />
                <ul className="group-actions">
                  <li>
                    <Link to="/group">Create a shared group
                      <p>Share recipes with family and friends</p>
                    </Link>
                  </li>
                  <li><Link to="/group/join">Join a shared group</Link></li>
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
    profile: state.firebase.profile,
    groups: state.firestore.ordered.groups
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'groups', orderBy: ['createdAt', 'desc'] },
  ])
)(MyAccount);
