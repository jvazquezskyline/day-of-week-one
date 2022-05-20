import React from "react";
import Preset from "./Preset";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
 

export default function DayPresets (props) {

    const {presets, day} = props;

    // return (
    //     <div>
    //         Day Presets

    //         {presets.map((preset, idx) => {
            
    //             if (!preset[day.toLowerCase()]) return;
    //             return (
    //                 <Preset key={idx} preset={preset} />
    //             )
    //         } )}
    //     </div>
    // )

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
        {presets.map((preset, idx) => {

            if(!preset[day.toLowerCase()]) return null;
            return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={preset.name} secondary="Jan 9, 2014" />
          </ListItem>
            )
        })}
          </List>
      );
}