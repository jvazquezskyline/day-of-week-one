import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SelectedPresets from './SelectPresets'
import DayPicker from './DayPicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {

  const {isAddModalOpen, onClose, cameraPresets, handleAddTourPreset} = props;  
  const handleClose = () => onClose(false);

  const [cameraPresetSelected, setCamerapPreset] = React.useState({});
  const [time, setTime] = React.useState('');
  const [daysSelected, setDaysSelected] = React.useState({})


  const handleTimeChange = (event) => {
      setTime(event.target.value)
  }

  const handleDayChange = (event) => {

    if (event.target.checked && !daysSelected[event.target.name]) {
        setDaysSelected((days) => {
            return {...days, [event.target.name]: event.target.name}
        })
    }

    if (!event.target.checked && daysSelected[event.target.name]) {
        const cloneDays = {...daysSelected};

        delete cloneDays[event.target.name]

        setDaysSelected(cloneDays)
    }
  }

  const normalizeDays = (days) => {
    const normalizedDays = {};
    for (const key in days) {
        normalizedDays[key] = true
    }

    return normalizedDays;
  }

  /**
   * 
   * @param {string} time 
   */
  const normalizeTime = (time) => {
      const [hour, min] = time.split(':');

      const normalizedTime = {
          hour: Number(hour),
          min: Number(min),
          sec: 0
      }

      return normalizedTime;
  }

  const handleAdd = () => {
      console.log('CAMERA PRESET SELECTED: ', cameraPresetSelected)
      console.log('TIME SELECTED: ', time)
      console.log('DAYS SELECTED: ', daysSelected)


      if (Object.keys(cameraPresetSelected).length === 0) return;
      if (time === '' | !time) return;
      if (Object.keys(daysSelected).length === 0) return;

      const normalizedDays = normalizeDays(daysSelected)
      const normalizedTime = normalizeTime(time);
      const newPreset = {
          ...cameraPresetSelected,
          time: normalizedTime,
          ...normalizedDays
    
      }

      handleAddTourPreset(newPreset)

      handleClose();

      console.log('NEW PRESET: ', newPreset)

  }

  return (
    <div>
      <Modal
        open={isAddModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <SelectedPresets cameraPresets={cameraPresets} onCameraPresetSelect={setCamerapPreset} cameraPresetSelected={cameraPresetSelected} />
          <br />
           <label>Pick a time:</label> <input type="time" onChange={handleTimeChange} />
            
            <br />
            <br />
            <label>Select Days of the Week: </label>
            <DayPicker handleChange={handleDayChange} />


            <Button variant="contained" onClick={handleAdd}>Add Preset</Button>


            
        </Box>
      </Modal>
    </div>
  );
}