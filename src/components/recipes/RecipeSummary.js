import React from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import { Col, Card, CardBody, CardTitle } from 'reactstrap';

const RecipeSummary = ({recipe}) => {
  // const isNewRecipe = recipe.lastViewed > recipe.createdAt;
  /*<Card style={{backgroundImage: `url(${recipe.photos && recipe.photos[0].source})`}}>*/
  let photoUrl = '';
  if ( recipe && recipe.hasOwnProperty('photos') && undefined !== recipe.photos[0] ) {
    if ( recipe.photos[0].hasOwnProperty('source') ) {
      photoUrl = recipe.photos[0].source;
    }
  }
  if ( '' === photoUrl ) {
    photoUrl = '/images/recipe-placeholder.svg';
  }
  return (
    <Col xs={12} sm={10} md={6} lg={4} key={recipe.id}>
      <Link to={'/recipes/' + recipe.id}>
        <article className="recipe-summary">
          <Card style={{backgroundImage: `url(${photoUrl})`}}>
            <CardBody>
              <CardTitle>
                {recipe.title &&
                  <h2>{recipe.title}</h2>
                }
              </CardTitle>
            </CardBody>
          </Card>
        </article>
      </Link>
    </Col>
  )
}

export default RecipeSummary
