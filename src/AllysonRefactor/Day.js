import React from "react";
import DayHeader from "./DayHeader";
import DayPresets from "./DayPresets";


const dayStyles = {
    borderRight: '1px solid black',
    width: '100%',
}

export default function Day (props) {
    const {day, presets, updatePreset} = props
    return (
        <div style={dayStyles}>
            <DayHeader day={day} />
            <DayPresets presets={presets} day={day} updatePreset={updatePreset} />
        </div>
    )
}