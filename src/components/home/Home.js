import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import Activity from './Activity';
import RecipeList from '../recipes/RecipeList';
import RecentRecipeList from '../recipes/RecentRecipeList';


class Home extends Component {
  render() {
    const { recipes, auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    let recipeCount = '';
    if ( recipes && 0 < recipes.length ) {
      if ( 1 === recipes.length ) {
        recipeCount = recipes.length + ' recipe';
      }
      recipeCount = recipes.length + ' recipes';
    }

    return (
      <Container className="view dashboard">
        <Row>
          <Col sm="12" md="6">
            <p className="h1 greeting">Happy cooking!</p>
          </Col>
          <Col sm="12" md="6">
            <Link to="/recipes/add" className="btn btn-outline-primary">Add a Recipe</Link>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <section className="home-recipe-list">
              <h1>Saved Recipes</h1>
              <p>{recipeCount}</p>
              <RecipeList recipes={recipes} />
            </section>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.firestore);
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'recipes',
      orderBy: ['title', 'asc']
    }
  ])
)(Home);
