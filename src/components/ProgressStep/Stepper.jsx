import { useState, useEffect, useRef } from 'react';

export default function Stepper({ steps, currentStep }) {

  const [stepperSteps, setStep] = useState([]);
  const stepStateRef = useRef();

  // step infos : label & status
  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepInfos = {};
      stepInfos.label = step;
      stepInfos.completed = false;
      stepInfos.highlighted = index === 0 ? true : false;
      stepInfos.selected = index === 0 ? true : false;
      return stepInfos;
    });
    stepStateRef.current = stepsState;
    const update = updateStep(currentStep - 1, stepsState);
    setStep(update);
  }, [currentStep, steps]);

  // update state status
  useEffect(() => {
    const update = updateStep(currentStep - 1, stepStateRef.current);
    setStep(update);
  }, [currentStep]);

  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;

    while (stepCounter < newSteps.length) {
      //current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // previous step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // next step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }

  const stepsDisplay = stepperSteps.map((step, index) => {
    return (
      <div key={index} className={`stepper_step--${index + 1}`}>
        <div className="step_status">
          <div className={step.selected ? 'selected' : ''}>
            {step.completed ? (
              <span className="confirmed">✓</span>
            ) : (
              index + 1
            )}
          </div>
          <div className={step.highlighted ? 'highlighted' : ''}>
            {step.label}
          </div>
        </div>
      </div>
    );
  });
  return <>{stepsDisplay}</>;
};
