import React from 'react';
import {Input, Button, Row, Col} from 'reactstrap';

function AddStepsList({steps, deleteStep, updateStep}) {
  if ( ! steps ) {
    return (
      <div></div>
    )
  }
  const stepList = steps.map((step, index) => {
    return (
      <div className="step" key={step.id}>
        <Row>
          <Col>
            <p className="h4 step-title">Step {index + 1}</p>
          </Col>
          <Col className="text-right">
            <Button className="btn delete-step" onClick={(e) => {deleteStep(e, step.id)}}>Remove Step {index + 1}</Button>
          </Col>
        </Row>
        <div className="input-group">
          <Input type="textarea" name="step" rows={5} onChange={ (e) =>( updateStep(step.id, e.currentTarget.value) ) }/>
        </div>
      </div>
    )
  })
  return (
    <div className="steps-list">
      {stepList}
    </div>
  )
}

export default AddStepsList;
