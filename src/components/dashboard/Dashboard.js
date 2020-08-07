import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Activity from './Activity'
import RecipeList from '../recipes/RecipeList'
import RecentRecipes from '../recipes/RecentRecipes'
import SharedRecipeList from '../recipes/SharedRecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // }
  render() {
    // console.log(this.props)

    const { recipes, auth, activity } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <Container className="dashboard">
        <Row className="my-4">
          <Col sm="12" className="mb-3">
            <p className="h1 greeting">Happy cooking!</p>
          </Col>
          <Col sm="12" lg="8">
            <section>
              <h1 className="sr-only">Recent recipes</h1>
              <RecentRecipes />
            </section>
          </Col>
          <Col sm="12" lg="4">
            <section>
              <h2>Add a recipe</h2>
              <Link className="btn btn-outline-light" to="/add-recipe">add your own recipe</Link>
            </section>
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm="12">
            <section>
              <h1>Your recipes</h1>
              <RecipeList recipes={recipes} />
            </section>
          </Col>
        </Row>
        <section>
          <Row className="my-4">
            <Col sm="12">
              <h1>Family recipes</h1>
            </Col>
            <Col sm="12" lg="8">
              <section>
                <h2 className="sr-only">shared recipes</h2>
                <SharedRecipeList />
              </section>
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
    { collection: 'recipes' },
    { collection: 'activity', limit: 3 }
  ])
)(Dashboard);
