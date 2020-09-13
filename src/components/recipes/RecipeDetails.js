import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Row, Container, CardBody, CardImg } from 'reactstrap';

import { updateRecipe } from '../../store/actions/recipeActions'

class RecipeDetails extends Component {
  componentDidMount() {
    const { recipeId } = this.props;
    if (recipeId) {
      this.props.updateRecipe(recipeId);
    }
  }
  render() {
    const { auth, recipe, recipeId } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    if (recipe) {
      if ( recipe.disabled ) return <Redirect to='/recipes' />
      return (
        <Container className="view view-card recipe-details">
          <div className="text-right">
            <Link to="/home" className="btn btn-outline-secondary btn-card-cancel">All Recipes</Link>
            <Link to={"/recipes/" + recipeId + "/edit"} className="btn btn-outline-secondary btn-recipe-edit">Edit</Link>
          </div>
          <article className="card">
            <div className="recipe-image">
              <CardImg top width="100%" src="/images/peach-cobbler-photo.jpg" alt="" />
              <div className="recipe-image-caption">Image caption</div>
            </div>
            <CardBody>
              <div className="recipe-intro">
                <Row>
                  <Col>
                    <h1>{ recipe.title }</h1>
                    { recipe.author && <p className="author">{ recipe.author }</p> }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="overview">
                      <h2 className="sr-only">Overview</h2>
                      <Row>
                        <Col lg={4}>
                          <h3>YIELD</h3>
                        </Col>
                        <Col lg={8}>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4}>
                          <h3>TIME</h3>
                        </Col>
                        <Col lg={8}>
                        </Col>
                      </Row>
                      { recipe.description && <p className="description">{ recipe.description }</p>
                    }
                    </div>
                  </Col>
                </Row>
              </div>
              <section className="recipe-ingredients">
                <Row>
                  <Col>
                    <h2>Ingredients</h2>
                    <ul className="ingredients">
                    </ul>
                  </Col>
                </Row>
              </section>
              <section className="recipe-preparation">
                <Row>
                  <Col>
                    <h2>Preparation</h2>
                    <ol className="preparation">
                    </ol>
                  </Col>
                </Row>
              </section>
              <section className="recipe-tips">
                <h3>Tips</h3>
                {recipe.tips}
              </section>
            </CardBody>
          </article>
        </Container>
      )
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <p>Loading recipe...</p>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return {
    recipeId: id,
    recipe: recipe,
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecipe: (recipeId, recipe = null) => dispatch(updateRecipe(recipeId, recipe))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)
