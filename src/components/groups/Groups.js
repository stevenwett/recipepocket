import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, CardBody } from 'reactstrap';

import GroupList from './GroupList';

class Groups extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createGroup(this.state);
  }
  render() {
    const { auth, groups } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <Container className="view view-card groups">
        <article className="card">
          <CardBody>
            <Row className="justify-content-center">
              <Col>
                <h1 className="greeting">Shared recpies</h1>
                <GroupList groups={groups} />
                <ul className="group-actions">
                  <li>
                    <Link to="/groups/create">Create a shared group
                      <p>Share recipes with family and friends</p>
                    </Link>
                  </li>
                  <li><Link to="/groups/join">Join a shared group</Link></li>
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
    groups: state.firestore.ordered.groups
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'groups', orderBy: ['createdAt', 'desc'] },
  ])
)(Groups);
