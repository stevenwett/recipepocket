import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Welcome extends Component {
  render() {
    return (
      <Container className="view welcome">
        <Row>
          <Col lg={6}>
            <h1 className="greetings-line">Organize your favorite recipes all in one place</h1>
            <p>Recipepocket is a super simple, centralized storage place for your most loved recipes.</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Welcome;
