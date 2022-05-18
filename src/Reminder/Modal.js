import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from './Select';
import Checkboxes from './Checkboxes';

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

export default function BasicModal({open, setOpen, handleAdd}) {
  const [presetValue, setPresetValue] = React.useState('');
  const [daysSelected, setDaysSelected] = React.useState({});

  const handleClose = () => {
      setOpen(false);
      cleanState();
  }

  const cleanState = () => {
      setPresetValue('');
      setDaysSelected({});
  }

  const handleSelectChange = (event) => {
    setPresetValue(event.target.value);
  };

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


  const handleConfirm = () => {
    const days = Object.keys(daysSelected);

    if (days.length === 0) return;

    if (!presetValue) return;

    const newPreset = {
        title: presetValue,
        id: Math.floor(Math.random() * (100 - 5 + 1) + 5),
        days: days,
        startTime: 1,
    }

    handleAdd(newPreset)
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Tour
          </Typography>

          <Select presetValue={presetValue} handleSelectChange={handleSelectChange} />

          <Checkboxes handleChange={handleDayChange} />
          <Button onClick={handleConfirm}>Confirm</Button>

        </Box>
      </Modal>
    </div>
  );
}