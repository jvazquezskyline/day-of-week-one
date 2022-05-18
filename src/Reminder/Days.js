import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({days, handleChange}) {

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox  onChange={handleChange} defaultChecked={days.includes('Monday')} name="Monday"/>} label="Monday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Tuesday" defaultChecked={days.includes('Tuesday')}  />} label="Tuesday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Wednesday" defaultChecked={days.includes('Wednesday')}  />} label="Wednesday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Thursday" defaultChecked={days.includes('Thursday')}  />} label="Thursday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Friday" defaultChecked={days.includes('Friday')}  />} label="Friday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Saturday" defaultChecked={days.includes('Saturday')}  />} label="Saturday" />
      <FormControlLabel control={<Checkbox onChange={handleChange} name="Sunday" defaultChecked={days.includes('Sunday')}  />} label="Sunday" />
    </FormGroup>
  );
}