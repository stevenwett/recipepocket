import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Col, Row, Container } from 'reactstrap';

const RecipeDetails = (props) => {
  const { recipe } = props;
  if (recipe) {
    return (
      <Container className="recipe-details">
        <Row className="my-4">
          <Col xs="12" sm="12">
            <article>
              <h1>{ recipe.title }</h1>
              <p className="introText">{ recipe.excerpt }</p>
              <p className="author">by author name</p>
              <p className="source">from oringinal source: </p>
              <figure>
                <picture>
                  <img src="https://via.placeholder.com/800x400" alt="" />
                </picture>
                <figcaption>photo by</figcaption>
              </figure>
              <div className="overview">
                <p className="yield">feeds 8</p>
                <p className="time">takes about 2 hours</p>
                <p className="summaryText">I love making this when friends come over, it turns our great everytime.</p>
              </div>
              <p>Added by</p>
              <div className="has-cooked-wrapper">
                <p>Mark as cooked</p>
              </div>
              <ul className="ingredients">
                <li>ingedient 1</li>
                <li>ingredient 2</li>
              </ul>
              <ol className="preparation">
                <li><strong>Step 1</strong> do this first</li>
              </ol>
            </article>
          </Col>
        </Row>
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
    recipe: recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)
