import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({presetId, onGlobalDelete}) {

  const handleGlobalClick= () => {
      onGlobalDelete(presetId);
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleGlobalClick}>Global Delete</Button>

    </Stack>
  );
}