import React, { useState } from 'react';
import Preset from './Preset';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import EditModal from './EditModal';

export default function DayPresets(props) {
  const { presets, day, updatePreset, handleDeletePreset } = props;

  const [isEditingPreset, toggleEditPreset] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState({});


  const handleDeleteTourPreset = (presetId) => {
      const newPresets = JSON.parse(JSON.stringify(presets))

      let i = 0;
      while (i < newPresets.length) {
        if (newPresets[i].id === presetId) {
          newPresets.splice(i, 1);
        } else {
          ++i;
        }
      }

      handleDeletePreset(newPresets)

  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {isEditingPreset ? (
        <EditModal
          handleClose={() => toggleEditPreset(false)}
          open={isEditingPreset}
          selectedPreset={selectedPreset}
          updatePreset={updatePreset}
          handleDeletePreset={handleDeleteTourPreset}
        />
      ) : null}

      {presets.map((preset, idx) => {
        if (!preset[day.toLowerCase()]) return null;

        const { hour, min } = preset.time;
        return (
          <ListItem
            key={idx}
            className="preset"
            onClick={() => {
              toggleEditPreset(true);
              setSelectedPreset(preset);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={preset.name} secondary={`${hour}:${min}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
