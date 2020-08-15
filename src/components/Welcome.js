import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Welcome extends Component {
  render() {
    return (
      <Container className="view welcome">
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
