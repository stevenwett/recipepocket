import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <Container className="learn">
        <Row>
          <Col>
            <h1>Welcome!</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Welcome;