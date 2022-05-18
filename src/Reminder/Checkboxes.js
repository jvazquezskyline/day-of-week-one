import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({handleChange}) {



  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox  onChange={handleChange} name="Monday"/>} label="Monday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Tuesday" />} label="Tuesday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Wednesday" />} label="Wednesday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Thursday" />} label="Thursday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Friday" />} label="Friday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Saturday" />} label="Saturday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Sunday" />} label="Sunday" />





    </FormGroup>
  );
}