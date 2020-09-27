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
            <CardBody>
              <CardTitle>
                {/*<Link className="btn-recipe-card-edit" to={'/recipes/' + recipe.id + '/edit'} title="Edit"><span className="sr-only">Edit</span></Link>
                */}
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
