import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Row, Container, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { updateRecipe } from '../../store/actions/recipeActions';
import { IngredientList } from './ingredients/IngredientList';

class RecipeDetails extends Component {
  componentDidMount() {
    const { recipeId } = this.props;
    window.scrollTo(0, 0);
    if (recipeId) {
      // this.props.updateRecipe(recipeId);
    }
  }
  handleClick = (e) => {
    console.log(e.target.value);
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
                <CardImg top width="100%" src="/images/peach-cobbler-photo.jpg" alt="" />
                <div className="recipe-image-caption">Jonny Miller for the New York Times. Food Stylist: Erin Jeanne McDowell.</div>
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
                        { recipe.time &&
                          <Row>
                            <Col xs={2}>
                              <h3>TIME</h3>
                            </Col>
                            <Col xs={10}>
                              <p>{ recipe.time }</p>
                            </Col>
                          </Row>
                        }
                        { recipe.description && <p className="description">{ recipe.description }</p> }
                      </div>
                    </Col>
                  </Row>
                </div>
                <section className="recipe-ingredients">
                  <Row>
                    <Col>
                      <h2>Ingredients</h2>
                    </Col>
                  </Row>
                </section>
                <section className="recipe-preparation">
                  <Row>
                    <Col>
                      <h2>Preparation</h2>
                      <ol className="preparation">
                        <li>
                          <h3>Step 1</h3>
                          <p>Heat oven to 350 degrees. Peel, pit and slice the peaches. Melt 4 tablespoons of butter in a medium saucepan. Add the sliced peaches and 1/2 cup sugar. Stir in 2 tablespoons of flour and simmer for 10 to 15 minutes, until soft and syrupy.</p>
                        </li>
                        <li>
                          <h3>Step 2</h3>
                          <p>Meanwhile, in a medium bowl, combine the remaining 1 cup sugar with the remaining 1 cup flour, baking powder and salt. Stir in the milk until combined.</p>
                        </li>
                         <li>
                          <h3>Step 3</h3>
                          <p>Add 8 tablespoons of butter to a 9-by-13-inch baking pan and place it in the oven. When the butter is melted, reserve 1/3 cup of the batter and set aside. Add the rest of the batter to the pan, using a spatula to spread it out as much as you can. It will not fully cover the bottom of the pan. That’s O.K.</p>
                        </li>
                         <li>
                          <h3>Step 4</h3>
                          <p>Spoon the peach mixture evenly over the top of the batter. Using a clean spoon, dollop small bits of the reserved batter over the peaches, and spread around a bit with the back of the spoon. (It will not fully cover the peaches. Again, that’s O.K.!)</p>
                        </li>
                         <li>
                          <h3>Step 5</h3>
                          <p>Bake for about 1 hour, or until the top is golden brown. Serve warm with vanilla ice cream, if desired.</p>
                        </li>
                      </ol>
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
