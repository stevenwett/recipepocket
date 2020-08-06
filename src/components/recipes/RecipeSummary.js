import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from 'reactstrap';

const RecipeSummary = ({recipe}) => {
  return (
    <Col sm="12" md="6" lg="4">
      <Link to={'/recipe/' + recipe.id}>
        <article className="recipe-summary">
          <Card>
            <CardImg top width="100%" src={recipe.img} alt={recipe.imgAlt} />
            <CardBody>
              <CardTitle>
                <h2>{recipe.title}</h2>
              </CardTitle>
              <CardText>{recipe.excerpt}</CardText>
            </CardBody>
            <CardFooter className="text-muted">
              <p>Saved on { moment(recipe.createdAt.toDate()).calendar() }</p>
            </CardFooter>
          </Card>
        </article>
      </Link>
    </Col>
  )
}

export default RecipeSummary
