import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Col, Row } from 'reactstrap';

const RecentRecipeSummary = ({recipe}) => {
  return (
    <Col xs="12" sm="6" className="mb-3 pr-3">
      <Link to={'/recipes/' + recipe.id}>
        <article>
          <Row className="recent-recipe no-gutters rounded">
            <Col xs="3" sm="3" className="preview">
              &nbsp;
            </Col>
            <Col xs="7" sm="7" className="text">
              <div className="text-inner">
                <h2>{recipe.title}</h2>
              </div>
            </Col>
          </Row>
        </article>
      </Link>
    </Col>
  )
}

export default RecentRecipeSummary
