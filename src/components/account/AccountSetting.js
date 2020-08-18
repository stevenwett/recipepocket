import React from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';

const AccountSetting = (props) => {
  console.log(props);
  let title = '';
  switch(props.match.params.id) {
    case 'terms-conditions':
      title = 'Terms & Conditions';
      break;
    case 'privacy-policy':
      title = 'Privacy Policy';
      break;
    case 'support':
      title = 'Support';
      break;
    default:
      console.log(props);
  }

  return (
    <Container className="view view-card account-setting">
      <article className="card">
        <CardBody>
          <Row className="justify-content-center">
            <Col>
              <h1>{title}</h1>
            </Col>
          </Row>
        </CardBody>
      </article>
    </Container>
  )
}

export default AccountSetting;
