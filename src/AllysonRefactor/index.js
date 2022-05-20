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
                            hour: 0,
                            min: 0,
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
            return {...oldTour, presets: [...oldTour.presets, newPreset]}
        })
    }

    console.log('CURRENT TOUR:::::: ', tour)
    return (<div>
        <AddButton onClick={openAddModal} />
        <Week presets={tour.presets ?? []} />
        <AddModal isAddModalOpen={isAddModalOpen} onClose={openAddModal} cameraPresets={cameraPresets} tour={tour}
          handleAddTourPreset={handleAddTourPreset}
        
        />
    </div>)
}