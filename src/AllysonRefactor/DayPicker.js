import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({ handleChange, daysSelected }) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];


  const handleDefaultChecked = (day) => {
      if (daysSelected && daysSelected[day.toLocaleLowerCase()]) {
          return true;
      }

      if (!daysSelected) {
          return undefined
      }
      return false;
  }
  return (
    <FormGroup>
      {daysOfWeek.map((day, idx) => {
        return (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox onChange={handleChange} checked={handleDefaultChecked(day)} name={day.toLowerCase()} />
            }
            label={day}
          />
        );
      })}
    </FormGroup>
  );
}
