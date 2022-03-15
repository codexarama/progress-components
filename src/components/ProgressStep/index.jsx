import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

import Form from './Form';

import { Stepper, StepLabel, Step } from '@material-ui/core';

import './progressStep.css';

export default function ProgressStep({ progressStep, close }) {
  const { currentStep, submittedData } = useContext(multiStepContext);

  // function StepComponent() {
  //   return (
  //     <Step>
  //       <StepLabel>hello</StepLabel>
  //     </Step>
  //   );
  // }

  function stepContent() {
    switch (currentStep) {
      case 1:
        return (
          <Form
            id={`step ${currentStep}`}
            step={currentStep}
            type="text"
            inputLabel="Favorite color"
          />
        );
      case 2:
        return (
          <Form
            id={`step ${currentStep}`}
            step={currentStep}
            type="text"
            inputLabel="Favorite number"
          />
        );
      case 3:
        return (
          <Form
            id={`step ${currentStep}`}
            step={currentStep}
            type="text"
            inputLabel="Favorite letter"
          />
        );
      default:
        console.log(`progress : step ${currentStep} / 3`);
    }
  }
  return createPortal(
    <>
      {progressStep ? (
        <main autoFocus className="modal" role="main">
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>
          <h1>Custom Progress Steps</h1>
          <section className="progress_step">
            <Stepper activeStep={currentStep - 1} orientation="horizontal">
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              {/* {Array.from({ length: 3 }, (_, index) => (
                <StepComponent key={index} />
              ))} */}
            </Stepper>
            {stepContent(currentStep)}
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
