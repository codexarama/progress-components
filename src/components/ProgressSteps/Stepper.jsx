import { useState, useEffect, useRef } from 'react';

export default function Stepper({ steps, currentStep }) {
  const [stepperSteps, setStep] = useState([]);
  const stepStateRef = useRef();

  useEffect(() => {
    // step infos : label & status
    const stepsState = steps.map((step, index) => {
      const stepInfos = {};
      stepInfos.label = step;
      stepInfos.completed = false;
      stepInfos.highlighted = index === 0 ? true : false;
      stepInfos.selected = index === 0 ? true : false;
      return stepInfos;
    });

    // update state status
    stepStateRef.current = stepsState;
    const update = updateStep(currentStep - 1, stepsState);
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
