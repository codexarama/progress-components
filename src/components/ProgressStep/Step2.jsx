import { Button, TextField } from '@material-ui/core';

export default function Step2() {
  return (
    <>
      <TextField label="City" margin="normal" variant="outlined" />
      <TextField label="Country" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary">Next</Button>
    </>
  );
}
