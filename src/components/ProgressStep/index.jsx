import { useState } from 'react';
import { createPortal } from 'react-dom';

import Stepper from './Stepper';

import './progressStep.css';

export default function ProgressStep({ progressStep, close }) {
  const [currentStep, setCurrentStep] = useState(1);

  const stepLabel = ['Step 1', 'Step 2', 'Step 3', 'Complete'];

  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType === 'next' ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepLabel.length) {
      setCurrentStep(newStep);
    }
  };

  return createPortal(
    <>
      {progressStep ? (
        <main autoFocus className="modal" role="main">
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>
          <h1>Custom Progress Steps</h1>
          <section className="progress_steps">
            <div className="stepper">
              <Stepper steps={stepLabel} currentStep={currentStep} />
            </div>
            <div className="stepper_navigation">
              <button
                onClick={() => handleClick()}
                className="stepper_navigation--previous"
                aria-label={currentStep > 1 ? 'previous step' : ''}
              >
                {currentStep > 1 ? '⯇' : ''}
              </button>
              <button
                onClick={() => handleClick('next')}
                className="stepper_navigation--next"
                aria-label={currentStep < stepLabel.length ? 'next step' : 'completed'}
              >
                {currentStep < stepLabel.length ? '⯈' : '🗹'}
              </button>
            </div>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
