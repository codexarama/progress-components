import { createPortal } from 'react-dom';

import { Stepper, StepLabel, Step } from '@material-ui/core';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './progressStep.css';

export default function ProgressStep({ progressStep, close }) {
  function stepContent(step) {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
        default: console.log(`progress : step ${step} / 3`);
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
            <Stepper activeStep={1} orientation="horizontal">
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
            {stepContent(1)}
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
