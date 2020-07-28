import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from 'reactstrap';

const RecipeSummary = () => {
  return (
    <article className="recipe-summary">
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="" />
        <CardBody>
          <CardTitle>
            <h2>Roaster Peppers with Parm Breadcrumbs</h2>
          </CardTitle>
          <CardText>Recipe summary text</CardText>
        </CardBody>
        <CardFooter className="text-muted">
          <p>Saved on July 26</p>
        </CardFooter>
      </Card>
    </article>
  )
}

export default RecipeSummary
