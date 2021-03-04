import React from 'react';
import {Input, Button, Row, Col, Card, CardBody} from 'reactstrap';

function PreparationStepsList({steps, deleteStep, updateStep}) {
  const stepList = steps.map((step, index) => {
    // console.log("PreparationStepsList", steps.length, steps);
    return(
      <Card className="preparation-step" key={step.id}>
        <CardBody>
          <Row>
            <Col>
              <p className="h4 preparation-step-title">Step {index + 1}</p>
            </Col>
            <Col className="text-right">
              <Button className="btn delete-preparation-step" onClick={(e) => {deleteStep(e, step.id)}}>Remove Step {index + 1}</Button>
            </Col>
          </Row>
          <div className="input-group">
            <Input type="textarea" name="step" rows={5} onChange={ (e) =>( updateStep(step.id, e.currentTarget.value) ) }/>
          </div>
        </CardBody>
      </Card>
    )
  });
  if(0 < steps.length) {
    return (
      <div className="steps-list">
        {stepList}
      </div>
    )
  } else {
    return (
      <div className="preparation-steps-list">
        <p>No prepration steps.</p>
      </div>
    )
  }
}

export default PreparationStepsList;
