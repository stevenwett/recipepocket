import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Row, Container, CardBody, CardImg } from 'reactstrap';

import { updateRecipe } from '../../store/actions/recipeActions'

class RecipeDetails extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    switch(value) {
      case "delete":

      case "delete":
        this.props.updateRecipe(this.props.recipeId, { disabled: true });
      case "favorite":
        break;
      default:
        return false;
        // console.log(action);
    }
  }
  componentDidMount() {
    const { recipeId } = this.props;
    if (recipeId) {
      this.props.updateRecipe(recipeId);
    }
  }
  render() {
    const { auth, recipe, profile, recipeId } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />
    if (recipe) {
      if ( recipe.disabled ) return <Redirect to='/recipes' />
      return (
        <Container className="view view-card recipe-details">
          <article className="card">
            <CardImg top width="100%" src="/images/peach-cobbler-photo.jpg" alt="" />
            <CardBody>
              <Row>
                <Col xs="12" sm="12">

                  <h1>{ recipe.title }</h1>
                  <Link to={'/recipes/' + recipeId + '/edit'}>Edit</Link>
                  <p className="excerpt">{ recipe.excerpt }</p>
                  <p className="author">Original recipe by { recipe.author }</p>
                  <p className="source">from oringinal source: { recipe.source } </p>
                  <p className="owner">Added by { recipe.ownerFirstName } { recipe.ownerLastName }</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <div className="overview">
                    <p className="yield">feeds { recipe.yield }</p>
                    <p className="time">takes about { recipe.timeNumber } { recipe.timeUnit }</p>
                    <p className="summaryText">{ recipe.summaryText }</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <h2>Ingredients</h2>
                  <ul className="ingredients">
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <h2>Preparation</h2>
                  <ol className="preparation">
                  </ol>
                </Col>
              </Row>
            </CardBody>
          </article>
          <nav className="side-navigation">
            <ul>
              <li><Link to="/recipes" title="Back to recipes"><span className="sr-only">Back</span></Link></li>
              {/*<li><button>Share</button></li>*/}
              <li><Link to={'/recipes/' + recipeId + '/edit'}><span className="sr-only">Edit</span></Link></li>
              <li><button onClick={this.handleClick} value="favorite" title="Mark as favorite"></button></li>
              <li><button onClick={this.handleClick} value="delete" title="Delete recipe"></button></li>
            </ul>
          </nav>
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
