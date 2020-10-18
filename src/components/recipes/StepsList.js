import React from 'react';

function StepsList({steps}) {
  const stepsList = steps.map((step, index) => {
    const stepNumber = index + 1;
    return (
      <li className="step" key={step.id} data-active={step.active}>
        <h3>Step {stepNumber}</h3>
        <p>{step.text}</p>
      </li>
    )
  })
  return (
    <ol className="preparation">
      {stepsList}
    </ol>
  )
}

export default StepsList;
