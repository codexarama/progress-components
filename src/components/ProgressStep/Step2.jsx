import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

import { Button, TextField } from '@material-ui/core';

export default function Step2() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  function moveToNextStep() {
    setStep(3);
  }

  function moveToPreviousStep() {
    setStep(1);
  }

  return (
    <>
      <TextField label="Last name" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary" onClick={moveToPreviousStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={moveToNextStep}>
        Next
      </Button>
    </>
  );
}
