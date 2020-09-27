import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

// import Activity from './Activity';
import RecipeList from '../recipes/RecipeList';

class Home extends Component {
  render() {
    const { recipes, auth, profile } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    let recipeCount = '';
    if ( recipes && 0 < recipes.length ) {
      if ( 1 === recipes.length ) {
        recipeCount = recipes.length + ' recipe';
      }
      recipeCount = recipes.length + ' recipes';
    }

    return (
      <Container className="view home">
        <Breadcrumb className="breadcrumb-nav">
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Row className="justify-content-center">
            <Col xs={12} sm={10} md={12} className="home-intro">
              <p className="h1 greeting">Happy cooking!</p>
              <Link to="/recipes/add" className="btn btn-outline-primary btn-add-recipe add">Add a Recipe</Link>
            </Col>
        </Row>
        <Row className="home-recipe-list justify-content-center">
          <Col sm={10} md={12} className="home-recipe-list-intro">
            { profile.firstName ? <h1>{profile.firstName}&rsquo;s Recipes</h1> : null }
            { recipeCount ? <p>{recipeCount} saved</p> : null }
          </Col>
        </Row>
        <RecipeList recipes={recipes} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.firestore);
  return {
    recipes: state.firestore.ordered.recipes,
    profile: state.firebase.profile,
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
