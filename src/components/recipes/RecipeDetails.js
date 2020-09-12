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
          <Link to="/recipes" className="btn btn-outline-primary">All Recipes</Link>
          <Link to={"/recipes/" + recipeId + "/edit"} className="btn btn-outline-primary">Edit</Link>
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
                    <p className="author">{ recipe.author }</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12">
                    <div className="overview">
                      <table>
                        <tr>
                          <td>YIELD</td>
                          <td>{ recipe.yield }</td>
                        </tr>
                        <tr>
                          <td>TIME</td>
                          <td>{ recipe.time }</td>
                        </tr>
                      </table>
                      <p className="summaryText">{ recipe.summaryText }</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <section className="recipe-ingredients">
                <Row>
                  <Col xs="12" sm="12">
                    <h2>Ingredients</h2>
                    <ul className="ingredients">
                    </ul>
                  </Col>
                </Row>
              </section>
              <section className="recipe-preparation">
                <Row>
                  <Col xs="12" sm="12">
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
