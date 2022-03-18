import { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

/**
 * Stepper Component
 *
 * @param   {object}      props
 * @param   {object}      props.steps               [step settings]
 * @param   {number}      props.currentStep         [step number]
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Stepper({ steps, currentStep }) {
  const [stepperSteps, setStep] = useState([]);
  const stepStateRef = useRef();

    // step infos : label & status
    useEffect(() => {
      const stepSettings = steps.map((step, index) => {
        const current = {};
        current.label = step;
        current.completed = false;
        current.highlighted = index === 0 ? true : false;
        current.selected = index === 0 ? true : false;
        return current;
      });

      stepStateRef.current = stepSettings;
      const update = updateStep(currentStep - 1, stepSettings);
      setStep(update);

    }, [currentStep, steps]);

  // manage state settings for each status
  function updateStep(stepNumber, steps) {
    const newStatus = [...steps];
    let stepCounter = 0;

    while (stepCounter < newStatus.length) {
      //current step
      if (stepCounter === stepNumber) {
        newStatus[stepCounter] = {
          ...newStatus[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // previous step
      else if (stepCounter < stepNumber) {
        newStatus[stepCounter] = {
          ...newStatus[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // next step
      else {
        newStatus[stepCounter] = {
          ...newStatus[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newStatus;
  }

  const stepsDisplay = stepperSteps.map((step, index) => {
    return (
      <div key={index} className={`step step_${index + 1}`}>
        <div className={`step_number ${step.selected ? 'selected' : ''}`}>
          {step.completed ? <span className="confirmed">✓</span> : index + 1}
        </div>
        <div className={`step_label ${step.highlighted ? 'highlighted' : ''}`}>
          {step.label}
        </div>
      </div>
    );
  });

  return <>{stepsDisplay}</>;
}

/**
 * Stepper PROPTYPES
 */
Stepper.propTypes = {
  current: PropTypes.shape({
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    highlighted: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
  }),
  currentStep: PropTypes.number.isRequired,
};
