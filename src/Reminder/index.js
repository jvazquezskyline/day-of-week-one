import React from "react";

import Reminder from "./Reminder"

import Modal from './Modal'

import DeleteButton from './DeleteButton';
import UpdateModal from './UpdateModal';


export default function Main () {
    
    const [open, setOpen] = React.useState(false);
    const [isUpdateOpen, setUpdateOpen] = React.useState(false);
    const [currentDay, setCurrentDay] = React.useState({});
    const [currentItem, setCurrentItem] = React.useState({});


    const handleOpen = () => setOpen(true);
    
    const handleGlobalDelete = (presetId) => {
        setMockPresets((oldSet) => {
            let newSet = [...oldSet]
            let i = 0;
            while (i < newSet.length) {
              if (newSet[i].id === presetId) {
                newSet.splice(i, 1);
              } else {
                ++i;
              }
            }
            return newSet
        });
    }

    const handleLocalDelete = (day) => {
        setMockPresets((oldSet) => {
            let newSet = [...oldSet]

            // console.log('DAY TO DELETE: ', day)
            // console.log('CURRENT DAY FROM DELTE: ', currentDay)
            // console.log('CURRENT ITEM FROM DELETE : ', currentItem)
    
            for (let i = 0; i < newSet.length; i++) {
                if (newSet[i].id === currentItem.id && newSet[i].days.includes(day)) {
                    let j = 0;
                    while (j < newSet[i].days.length) {
                        if (newSet[i].days[j] === day) {
                            newSet[i].days.splice(j, 1)
                        }
                        else {
                            ++j;
                        }
                    }
                } 
            }


            return newSet
        })
    }
    const [mockPresets, setMockPresets] = React.useState([
        {
            title: 'Preset One',
            startTime: 12,
            days: ['Monday', 'Wednesday'],
            id: 1,

        },
        {
            title: 'Preset Two',
            startTime: 11,
            days: ['Monday', 'Wednesday'],
            id: 2,

        },
        {
            title: 'Preset Three',
            startTime: 12,
            days: ['Monday', 'Tuesday'],
            id: 3,
        },
    ])

    const handleItemClick = (day, item) => {
        setUpdateOpen(true);
        setCurrentDay(day);

        // console.log('ITEM:::::: ', item)
        setCurrentItem(item)

    }
    // console.log('PRESETS:::: ', mockPresets)
    const handleAdd = (preset) => {
        setMockPresets((presets) => {
            return [...presets, {...preset}]
        })
    }


    const handlePresetUpdate = (update) => {

        setMockPresets((oldSet) => {
            let newSet = [...oldSet]
            let i = 0;
            while (i < newSet.length) {
              if (newSet[i].id === update.id) {
                newSet.splice(i, 1);
              } else {
                ++i;
              }
            }

            newSet.push(update)
            return newSet
        });    }

    return (
        <div>
            <Modal open={open} setOpen={setOpen} handleAdd={handleAdd} />
            <Reminder presets={mockPresets} handleOpen={handleOpen} onItemClick={handleItemClick}/>
            <UpdateModal 
                open={isUpdateOpen} setOpen={setUpdateOpen} 
                currentDay={currentDay} handleLocalDelete={handleLocalDelete} 
                currentItem={currentItem} handlePresetUpdate={handlePresetUpdate}
                handleGlobalDelete={handleGlobalDelete}
            />
        </div>
    )
}