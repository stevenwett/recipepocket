import React from 'react';
import { Container, Row, Col, CardBody, Breadcrumb, BreadcrumbItem }  from 'reactstrap';

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
    <Container className="view account-setting">
      <Breadcrumb className="breadcrumb-nav">
        <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/account">Account</a></BreadcrumbItem>
        <BreadcrumbItem active>{title}</BreadcrumbItem>
      </Breadcrumb>
      <div className="view-card">
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1>{title}</h1>
              </Col>
            </Row>
          </CardBody>
        </article>
      </div>
    </Container>
  )
}

export default AccountSetting;
