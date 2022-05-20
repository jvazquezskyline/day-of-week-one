import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({handleChange}) {

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <FormGroup>

        {daysOfWeek.map((day, idx) => {
            return (
                <FormControlLabel key={idx} control={<Checkbox onChange={handleChange} name={day.toLowerCase()}  />} label={day} />
            )
        })}
    </FormGroup>
  );
}