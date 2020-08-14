import React from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Col, Row, Container } from 'reactstrap';

const GroupDetails = (props) => {
  const { group, profile } = props;
  if (group) {
    return (
      <Container className="view group-details">
        <article>
          <Row>
            <Col>
              <h1>Shared Recipe Group: {group.name}</h1>
              <p>Created { moment(group.createdAt.toDate()).calendar() }</p>
            </Col>
          </Row>
        </article>
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
