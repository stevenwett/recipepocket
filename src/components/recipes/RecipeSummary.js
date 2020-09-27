import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Col, Card, CardBody, CardImg, CardTitle, CardFooter, Button } from 'reactstrap';

const RecipeSummary = ({recipe}) => {
  // const isNewRecipe = recipe.lastViewed > recipe.createdAt;
  return (
    <Col xs={12} sm={10} md={6} lg={4}>
      <Link to={'/recipes/' + recipe.id}>
        <article className="recipe-summary">
          <Card>
            <CardImg top width="100%" src="/images/peach-cobbler-photo.jpg" alt={recipe.imgAlt} />
            <CardBody>
              <Link className="btn-recipe-card-edit" to={'/recipes/' + recipe.id + '/edit'}><span className="sr-only">Edit</span></Link>
              <CardTitle>
                <h2>{recipe.title}</h2>
              </CardTitle>
              <div className="card-text">
                <div className="author">{recipe.author}</div>
                <div className="excerpt">{recipe.excerpt}</div>
              </div>
            </CardBody>
            <CardFooter>
              {'Created ' + moment(recipe.createdAt.toDate()).calendar()}
            </CardFooter>
          </Card>
        </article>
      </Link>
    </Col>
  )
}

export default RecipeSummary
