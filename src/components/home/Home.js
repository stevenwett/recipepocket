import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Activity from './Activity';
import RecipeList from '../recipes/RecipeList';
import RecentRecipes from '../recipes/RecentRecipes';


class Home extends Component {
  render() {
    const { recipes, auth, activity } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <Container className="view dashboard">
        <Row>
          <Col sm="12">
            <p className="h1 greeting">Happy cooking!</p>
          </Col>
          <Col sm="12" lg="8">
            <section>
              <h1 className="sr-only">Recent recipes</h1>
              <RecentRecipes />
            </section>
          </Col>
          <Col sm="12" lg="4">
            <section className="dashboard-add-recipe">
              <h2>Add a recipe</h2>
              <Link className="btn btn-outline-light" to="/recipes/add">add your own recipe</Link>
            </section>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <section>
              <h1>Your recipes</h1>
              <p>Search</p>
              <RecipeList recipes={recipes} />
            </section>
          </Col>
        </Row>
        <section>
          <Row>
            <Col sm="12">
              <h1>Shared sets</h1>
            </Col>
            <Col sm="12" lg="8">
              <p>Here we'll list the shared sets and also a few of the shared recipes</p>
            </Col>
            <Col sm="12" lg="4">
              <Activity activity={activity} />
            </Col>
          </Row>
        </section>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth,
    activity: state.firestore.ordered.activity
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes', orderBy: ['createdAt', 'desc'] },
    { collection: 'activity', limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Home);
