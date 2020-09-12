import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Col, Card, CardBody, CardImg, CardTitle, CardFooter } from 'reactstrap';

const RecipeSummary = ({recipe}) => {
  // const isNewRecipe = recipe.lastViewed > recipe.createdAt;
  return (
    <Col sm="12" md="6" lg="4">
      <Link to={'/recipes/' + recipe.id}>
        <article className="recipe-summary">
          <Card>
            <CardImg top width="100%" src="/images/peach-cobbler-photo.jpg" alt={recipe.imgAlt} />
            <CardBody>
              <CardTitle>
                <h2>{recipe.title}</h2>
              </CardTitle>
              <div className="card-text">
                <div className="author">{recipe.author}</div>
                <div className="excerpt">{recipe.excerpt}</div>
              </div>
            </CardBody>
            <CardFooter className="text-muted">
              <p>{'Created ' + moment(recipe.createdAt.toDate()).calendar()}</p>
            </CardFooter>
          </Card>
        </article>
      </Link>
    </Col>
  )
}

export default RecipeSummary
