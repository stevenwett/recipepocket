import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Label, Container, Row, Col, CardBody, Button, Form, Input, FormGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { signOut } from '../../store/actions/authActions';

class Account extends Component {
  state = {
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
      <Container className="view account">
        <Breadcrumb className="breadcrumb-nav">
          <BreadcrumbItem><a href="/dashboard">Dashboard</a></BreadcrumbItem>
          <BreadcrumbItem active>Account</BreadcrumbItem>
        </Breadcrumb>
        <div className="view-card">
          <Link to="/dashboard" className="btn btn-outline-secondary btn-card-cancel">Dashboard</Link>
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
                          <Input type="text" id="firstName" placeholder={profile.firstName} onChange={this.handleChange}/>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="lastName">Last name</Label>
                          <Input type="text" id="lastName" placeholder={profile.lastName} onChange={this.handleChange}/>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input type="email" id="email" placeholder={auth.email} />
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
                    <li><Link className="settings-item" to="/account/terms-conditions">Terms &amp; conditions</Link></li>
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
        </div>
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
