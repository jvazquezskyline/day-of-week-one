import React from "react";

import Reminder from "./Reminder"

import Modal from './Modal'

export default function Main () {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const [mockPresets, setMockPresets] = React.useState([
        {
            title: 'Preset One',
            startTime: 12,
            days: ['Monday', 'Wednesday'],
            id: 1
        },
        {
            title: 'Preset Two',
            startTime: 11,
            days: ['Monday', 'Wednesday'],
            id: 2
        },
        {
            title: 'Preset Three',
            startTime: 12,
            days: ['Monday', 'Tuesday'],
            id: 3
        },
    ])

    const handleAdd = (preset) => {
        setMockPresets((presets) => {
            return [...presets, preset]
        })
    }

    return (
        <div>
            <Modal open={open} setOpen={setOpen} handleAdd={handleAdd} />
            <Reminder presets={mockPresets} handleOpen={handleOpen}/>
        </div>
    )
}