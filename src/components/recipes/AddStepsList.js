import React from 'react';
import {Input} from 'reactstrap';

function AddStepsList({steps, deleteStep, updateStep}) {
  const stepList = steps.map(step => {
    return (
      <div className="step input-group" key={step.id}>
        <Input type="textarea" name="step" rows="6" onChange={ (e) =>( updateStep(step.id, e.currentTarget.value) ) }/>
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
