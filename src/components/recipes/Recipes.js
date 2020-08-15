import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import RecipeList from '../recipes/RecipeList';

class Recipes extends Component {
  render() {
    const { auth, recipes } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <Container className="view">
        <Row>
          <Col>
            <h2>Add a recipe</h2>
            <Link className="btn btn-outline-light" to="/recipes/add">add your own recipe</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <RecipeList recipes={recipes} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes', orderBy: ['createdAt', 'desc'] }
  ])
)(Recipes);
