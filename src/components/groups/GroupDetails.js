import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment';
import { Col, Row, Container } from 'reactstrap';

const GroupDetails = (props) => {
  const { group, profile } = props;
  if (group) {
    return (
      <Container className="view group-details">
        <Row>
          <Col md="12" lg="12">
            <h1 className="greeting">{group.name}</h1>
          </Col>
          <Col md="10" lg="8">
            <p>Created { moment(group.createdAt.toDate()).calendar() }</p>
          </Col>
          <Col md="12" lg="4">
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <p>Loading group...</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const groups = state.firestore.data.groups;
  const group = groups ? groups[id] : null
  return {
    group: group,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'groups' }
  ])
)(GroupDetails)
