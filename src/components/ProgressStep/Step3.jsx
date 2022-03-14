import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

import { Button, TextField } from '@material-ui/core';

export default function Step3() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  function moveToPreviousStep() {
    setStep(2);
  }

  return (
    <>
      <TextField label="City" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary" onClick={moveToPreviousStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={submitData}>
        Submit
      </Button>
    </>
  );
}
