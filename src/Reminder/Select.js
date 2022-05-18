import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({handleSelectChange, presetValue}) {


  const fakePresets = ['Door', 'Server', 'Tilted Camera', 'Room 202', 'Office']
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Presets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={presetValue}
          label="Presets"
          onChange={handleSelectChange}
        >

          {fakePresets.map((preset, idx) => {
              return (<MenuItem key={idx} value={preset}>{preset}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </Box>
  );
}