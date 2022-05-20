import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  const { selectedPreset, handleClose, open, updatePreset } = props;

  const [daysSelected, setDaysSelected] = React.useState({});
  const [time, setTime] = React.useState('');

  const handleDayChange = (event) => {
    if (event.target.checked && !daysSelected[event.target.name]) {
      setDaysSelected((days) => {
        return { ...days, [event.target.name]: true };
      });
    }

    if (!event.target.checked && daysSelected[event.target.name]) {
      const cloneDays = { ...daysSelected };

      delete cloneDays[event.target.name];

      setDaysSelected(cloneDays);
    }
  };

  const mountExistingDays = () => {
    const daysToMount = {};
    if (selectedPreset.monday) {
      daysToMount.monday = true;
    }
    if (selectedPreset.tuesday) {
      daysToMount.tuesday = true;
    }
    if (selectedPreset.wednesday) {
      daysToMount.wednesday = true;
    }
    if (selectedPreset.thursday) {
      daysToMount.thursday = true;
    }
    if (selectedPreset.friday) {
      daysToMount.friday = true;
    }
    if (selectedPreset.saturday) {
      daysToMount.saturday = true;
    }
    if (selectedPreset.sunday) {
      daysToMount.sunday = true;
    }

    return daysToMount;
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const mountTime = () => {
    const { hour, min } = selectedPreset.time;

    setTime(`${hour}:${min}`);
  };

  const normalizeTime = () => {
    const [hour, min] = time.split(':');

    return {
      hour,
      min,
      sec: 0,
    };
  };
  const handleConfirmUpdate = () => {
    try {
      if (Object.keys(daysSelected).length === 0) {
        throw new Error('Must selected at least one day');
      }
    } catch (error) {
      console.log(error);
      return;
    }

    try {
      if (time.length === 0) {
        throw new Error('Must selected a time');
      }
    } catch (error) {
      console.log(error);
      return;
    }

    const updatedPreset = { ...selectedPreset, ...daysSelected };

    // @todo: revise the handling of deleting or making days false when they are deselected
    if (!daysSelected.monday && updatedPreset.monday) {
      delete updatedPreset.monday;
    }
    if (!daysSelected.tuesday && updatedPreset.tuesday) {
      delete updatedPreset.tuesday;
    }
    if (!daysSelected.wednesday && updatedPreset.wednesday) {
      delete updatedPreset.wednesday;
    }
    if (!daysSelected.thursday && updatedPreset.thursday) {
      delete updatedPreset.thursday;
    }
    if (!daysSelected.friday && updatedPreset.friday) {
      delete updatedPreset.friday;
    }
    if (!daysSelected.saturday && updatedPreset.saturday) {
      delete updatedPreset.saturday;
    }
    if (!daysSelected.sunday && updatedPreset.sunday) {
      delete updatedPreset.sunday;
    }

    const normalizedPreset = normalizeTime();

    updatedPreset.time = normalizedPreset;

    updatePreset(updatedPreset);
    handleClose();
  };

  React.useEffect(() => {
    const days = mountExistingDays();

    setDaysSelected(days);
    mountTime();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant="outlined" onClick={handleClose}>
            x
          </Button>
          <hr />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Preset: {selectedPreset.name ?? ''}
          </Typography>

          <DayPicker
            handleChange={handleDayChange}
            daysSelected={daysSelected}
          />

          <input
            type="time"
            defaultValue={`${selectedPreset.time.hour}:${selectedPreset.time.min}`}
            onChange={handleTimeChange}
          />

          <hr />

          <Button variant="contained" onClick={handleConfirmUpdate}>
            Confirm Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
