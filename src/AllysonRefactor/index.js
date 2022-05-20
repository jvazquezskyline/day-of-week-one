import React, { useEffect, useState } from "react";
import DayHeader from "./DayHeader";
import Week from "./Week";
import AddButton from './AddButton'
import AddModal from './AddModal'


export default function Main( ) {

    const [tour, setTour] = useState({});

    const [isAddModalOpen, openAddModal] = useState(false)
    
    const [cameraPresets, setCameraPresets] = useState([])
    
    useEffect(() => {
        setTour(
            {
                presets: [
                    {
                        id: '1234',
                        presetId: 'preset-1234',
                        name: 'Preset One',
                        time: {
                            hour: 12,
                            min: 30,
                            sec: 0,
                        },
                        monday: true,
                        friday: true,
                        saturday: true,
                    }
                ]
            }
        )

        setCameraPresets([
            {
                name: 'Door'
            },
            {
                name: 'Office'
            }
        ])
    }, [])


    const handleAddTourPreset = (newPreset) => {
        setTour((oldTour) => {
            try {
                verifyPresetTime(newPreset, oldTour.presets)
                return {...oldTour, presets: [...oldTour.presets, newPreset]}
            } catch (error) {
                console.log(error)
                return oldTour;
            }
        })
    }

    // ensures that a new preset's time does not conflict with another one
    const verifyPresetTime = (newPreset, presets) => {

        const {hour, min} = newPreset.time;

    

        for (let i = 0; i < presets.length; i++) {
            const currentPresetHour = presets[i].time?.hour
            const currentPresetMin= presets[i].time?.min


            if (Number(hour) > Number(currentPresetHour) || Number(hour) < Number(currentPresetHour)) {
                continue;
            }

            if (Number(min) > Number(currentPresetMin) || Number(min) < Number(currentPresetMin)) {
                continue;
            }


            if (
                (presets[i].monday && newPreset.monday) ||
                (presets[i].tuesday && newPreset.tuesday) ||
                (presets[i].wednesday && newPreset.wednesday) ||
                (presets[i].thursday && newPreset.thursday) || 
                (presets[i].friday && newPreset.friday) ||
                (presets[i].saturday && newPreset.saturday) || 
                (presets[i].sunday && newPreset.sunday) 
            ) {
                throw new Error("Can't add preset because a preset is already scheduled for " + currentPresetHour + ':' + currentPresetMin)
            }


        }



    }

    return (<div>
        <AddButton onClick={openAddModal} />
        <Week presets={tour.presets ?? []} />
        
        {isAddModalOpen ? <AddModal isAddModalOpen={isAddModalOpen} onClose={openAddModal} cameraPresets={cameraPresets} tour={tour}
          handleAddTourPreset={handleAddTourPreset}
        
        /> : null }

    </div>)
}