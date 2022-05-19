import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from './Select';
import Checkboxes from './Days';
import DeleteButton from './DeleteButton'

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

export default function BasicModal({open, setOpen, handleAdd, currentDay, handleLocalDelete, currentItem, handlePresetUpdate, handleGlobalDelete}) {
  const [daysSelected, setDaysSelected] = React.useState({});

  const handleClose = () => {
      setOpen(false);
      cleanState()
  }

  const cleanState = () => {
      setDaysSelected({})
  }
  

  const handleUpdate = () => {
      handlePresetUpdate({
          ...currentItem,
          days: Object.keys(daysSelected)
      })

      handleClose();
  }

  const onGlobalDelete = () => {
      handleGlobalDelete(currentItem.id);
      handleClose();
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
    
    React.useEffect(() => {
        
        if (!currentItem.days) return;
        const presetDays = currentItem.days;
        for (let i = 0; i < presetDays.length; i++) {
            setDaysSelected((oldDays) => {
                return {...oldDays, [presetDays[i]]: presetDays[i]}
            })
        }
    }, [currentItem])
    
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
            Update {currentItem.title}
          </Typography>


          <Checkboxes days={currentItem.days} handleChange={handleDayChange}  />
          <Button onClick={handleUpdate}>Update</Button>

          <DeleteButton presetId={currentItem.id} onGlobalDelete={onGlobalDelete} />

        </Box>
      </Modal>
    </div>
  );
}