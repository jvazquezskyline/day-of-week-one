import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const {cameraPresets, onCameraPresetSelect, cameraPresetSelected} = props;
  const [age, setAge] = React.useState('');


  const [selectValue, setSelectValue] = React.useState('')
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Preset</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          value={selectValue}
          label="Preset"
          onChange={handleChange}
        >
          {cameraPresets?.map((preset, idx) => {
              return (
                  <MenuItem value={preset.name} key={idx} onClick={(e) => onCameraPresetSelect(preset)}>{preset.name}</MenuItem>
              )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}