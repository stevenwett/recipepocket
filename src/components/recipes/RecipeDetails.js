import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Row, Container, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import IngredientsGroups from './ingredients/IngredientsGroups';
import StepsList from './StepsList';

class RecipeDetails extends Component {
  componentDidMount() {
    const { recipeId } = this.props;
    window.scrollTo(0, 0);
    if (recipeId) {
      // this.props.updateRecipe(recipeId);
    }
  }
  handleIngredientClick = (e, ingredientsGroups, ingredientsGroup) => {
    /* with this information, update the state of the ingredient when clicked */
  }
  render() {
    const { auth, recipe, recipeId } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    if (recipe) {
      if ( recipe.disabled ) return <Redirect to='/home' />
      return (
        <Container className="view recipe-details">
          <Breadcrumb className="breadcrumb-nav">
            <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>{ recipe.title }</BreadcrumbItem>
          </Breadcrumb>
          <div className="view-card">
            <div className="text-right">
              <Link to="/home" className="btn btn-card-cancel float-left">All Recipes</Link>
              <Link to={"/recipes/" + recipeId + "/edit"} className="btn btn-recipe-edit">Edit</Link>
            </div>
            <article className="card">
              <div className="recipe-image">
                { recipe.photos[0].source && <CardImg top width="100%" src={recipe.photos[0].source} alt="" /> }
                { recipe.photos[0].caption && <div className="recipe-image-caption">recipe.photos[0].caption</div> }
              </div>
              <CardBody>
                <div className="recipe-intro">
                  <Row>
                    <Col>
                      { recipe.title && <h1>{ recipe.title }</h1> }
                      { recipe.author && <p className="author">{ recipe.author }</p> }
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="overview">
                        <h2 className="sr-only">Overview</h2>
                        { recipe.yield &&
                          <Row>
                            <Col xs={2}>
                              <h3>YIELD</h3>
                            </Col>
                            <Col xs={10}>
                              <p>{ recipe.yield }</p>
                            </Col>
                          </Row>
                        }
                        { recipe.totalTime &&
                          <Row>
                            <Col xs={2}>
                              <h3>TIME</h3>
                            </Col>
                            <Col xs={10}>
                              <p>{ recipe.totalTime }</p>
                            </Col>
                          </Row>
                        }
                        { recipe.description &&
                          <p className="description">{ recipe.description } </p>
                        }
                      </div>
                    </Col>
                  </Row>
                </div>
                <section className="recipe-ingredients">
                  <Row>
                    <Col>
                      <h2>Ingredients</h2>
                      <IngredientsGroups ingredients={recipe.ingredients} handleIngredientClick={ this.handleIngredientClick } />
                    </Col>
                  </Row>
                </section>
                <section className="recipe-preparation">
                  <Row>
                    <Col>
                      <h2>Preparation</h2>
                      <StepsList steps={recipe.steps}/>
                    </Col>
                  </Row>
                </section>
                  { recipe.tips &&
                    <section className="recipe-tips">
                      <h3>Tips</h3>
                      <p>{recipe.tips}</p>
                    </section>
                  }
              </CardBody>
            </article>
          </div>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)
