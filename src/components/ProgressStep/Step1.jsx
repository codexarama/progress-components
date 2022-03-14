import { Button, TextField } from '@material-ui/core';

export default function Step1() {
  return (
    <>
      <TextField label="First name" margin="normal" variant="outlined" />
      <TextField label="Last name" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary">Next</Button>
    </>
  );
}
