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

  onDescriptionClick = (e) => {
    let expanded = e.target.attributes['aria-expanded'].value;
    if ( "false" === expanded ) {
      e.target.attributes['aria-expanded'].value = true;
    } else {
      e.target.attributes['aria-expanded'].value = false;
    }

  }

  // handleIngredientClick = (e, ingredientsGroups, ingredientsGroup) => {
  //    with this information, update the state of the ingredient when clicked
  // }
  render() {
    const { auth, recipe, recipeId } = this.props;
    if (recipe) {
      if ( recipe.disabled ) return <Redirect to='/home' />
      let photoUrl = '',
        photoAlt = '',
        photoCaption = '';
      if ( recipe && recipe.hasOwnProperty('photos') && undefined !== recipe.photos[0] ) {
        if ( recipe.photos[0].hasOwnProperty('source') ) {
          photoUrl = recipe.photos[0].source;
        }
        if ( recipe.photos[0].hasOwnProperty('caption') ) {
          photoCaption = recipe.photos[0].caption;
        }
        if ( recipe.photos[0].hasOwnProperty('alt') ) {
          photoAlt = recipe.photos[0].alt;
        }
      }
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
                <CardImg top width="100%" src={photoUrl} alt={photoAlt} />
               <div className="recipe-image-caption">{photoCaption}</div>
              </div>
              <CardBody>
                <div className="recipe-intro">
                  <Row>
                    <Col>
                      {recipe.title && <h1>{ recipe.title }</h1>}
                      {recipe.author && <p className="author">{recipe.author}</p>}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="overview">
                        <h2 className="sr-only">Overview</h2>
                        { recipe.yield &&
                          <Row>
                            <Col xs={6} sm={2}>
                              <h3>YIELD</h3>
                            </Col>
                            <Col xs={6} sm={10}>
                              <p>{ recipe.yield }</p>
                            </Col>
                          </Row>
                        }
                        { recipe.totalTime &&
                          <Row>
                            <Col xs={6} sm={2}>
                              <h3>TIME</h3>
                            </Col>
                            <Col xs={6} sm={10}>
                              <p>{ recipe.totalTime }</p>
                            </Col>
                          </Row>
                        }
                        { recipe.description &&
                          <p className="description" aria-expanded="false" onClick={this.onDescriptionClick}>{recipe.description} </p>
                        }
                      </div>
                    </Col>
                  </Row>
                </div>
                <section className="recipe-ingredients">
                  <Row>
                    <Col>
                      <h2>Ingredients</h2>
                      { recipe.ingredients &&
                        <IngredientsGroups ingredients={recipe.ingredients} />
                      }
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
