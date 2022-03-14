import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

import { Button, TextField } from '@material-ui/core';

export default function Step1() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  function moveToNextStep() {
    setStep(2);
  }

  return (
    <>
      <TextField label="First name" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary" onClick={moveToNextStep}>
        Next
      </Button>
    </>
  );
}
