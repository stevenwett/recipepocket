import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Col, Row, Container } from 'reactstrap';

const RecipeDetails = (props) => {
  const { recipe, profile } = props;
  if (recipe) {
    return (
      <Container className="view recipe-details">
        <article>
          <Row>
            <Col xs="12" sm="12">

              <h1>{ recipe.title }</h1>
              <p className="excerpt">{ recipe.excerpt }</p>
              <p className="author">Original recipe by { recipe.author }</p>
              <p className="source">from oringinal source: { recipe.source } </p>
              <p className="owner">Added by { recipe.ownerFirstName } { recipe.ownerLastName }</p>
              <figure>
                <picture>
                  <img src={ recipe.photo } alt={ recipe.alt } />
                </picture>
                <figcaption>photo by { recipe.photoSubtitle }</figcaption>
              </figure>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12">
              <div className="overview">
                <p className="yield">feeds { recipe.yield }</p>
                <p className="time">takes about { recipe.timeNumber } { recipe.timeUnit }</p>
                <p className="summaryText">{ recipe.summaryText }</p>
              </div>
              <p>Added by</p>
              <div className="has-cooked-wrapper">
                <p>Mark as cooked</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12">
              <h2>Ingredients</h2>
              <ul className="ingredients">
                <li>ingedient 1</li>
                <li>ingredient 2</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12">
              <h2>Preparation</h2>
              <ol className="preparation">
                <li><strong>Step 1</strong> do this first</li>
              </ol>
            </Col>
          </Row>
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return {
    recipe: recipe,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)
