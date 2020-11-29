import React from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import { Col, Card, CardBody, CardTitle } from 'reactstrap';

const RecipeSummary = ({recipe}) => {
  // const isNewRecipe = recipe.lastViewed > recipe.createdAt;
  /*<Card style={{backgroundImage: `url(${recipe.photos && recipe.photos[0].source})`}}>*/
  return (
    <Col xs={12} sm={10} md={6} lg={4} key={recipe.id}>
      <Link to={'/recipes/' + recipe.id}>
        <article className="recipe-summary">
          <Card>
            <CardBody>
              <CardTitle>
                <h2>{recipe.title}</h2>
              </CardTitle>
            </CardBody>
          </Card>
        </article>
      </Link>
    </Col>
  )
}

export default RecipeSummary
