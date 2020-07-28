import React from 'react'
import { Col, Row, Container } from 'reactstrap';

const RecipeDetails = (props) => {
  // const id = props.match.params.id;
  return (
    <Container className="recipe-details">
      <Row className="my-4">
        <Col xs="12" sm="12">
          <article>
            <h1>Roaster Peppers with Parm Breadcrumbs</h1>
            <p>Example summary text</p>
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
              <p className="summary">I love making this when friends come over, it turns our great everytime.</p>
            </div>
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
}

export default RecipeDetails
