import { Button, TextField } from '@material-ui/core';

export default function Step3() {
  return (
    <>
      <TextField label="Favorite color" margin="normal" variant="outlined" />
      <TextField label="Favorite fruit" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary">Next</Button>
    </>
  );
}
