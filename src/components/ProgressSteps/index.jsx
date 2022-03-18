import { useState } from 'react';
import { createPortal } from 'react-dom';

import Stepper from './Stepper';

import './progressSteps.css';

export default function ProgressSteps({ progressSteps, close }) {
  const [currentStep, setCurrentStep] = useState(0);

  const stepLabel = ['Step 1', 'Step 2', 'Step 3', 'Complete'];

  const handleClick = (goTo) => {
    let stepPosition = currentStep;
    goTo === 'next' ? stepPosition ++ : stepPosition --;

    // Check if steps are within the boundary
    if (stepPosition > 0 && stepPosition <= stepLabel.length) {
      setCurrentStep(stepPosition);
    }
  };

  return createPortal(
    <>
      {progressSteps ? (
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
              {currentStep === 0 ? null : (
                <button
                  onClick={() => handleClick()}
                  className="stepper_navigation--previous"
                >
                  {currentStep > 0 ? '⯇' : ''}
                </button>
              )}
              <button
                onClick={() => handleClick('next')}
                className="stepper_navigation--next"
              >
                {currentStep < stepLabel.length ? '⯈' : '✔'}
                {/* {currentStep < stepLabel.length ? '⯈' : '🗹'} */}
              </button>
            </div>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
