import React from "react";
import DayHeader from "./DayHeader";
import DayPresets from "./DayPresets";


const dayStyles = {
    borderRight: '1px solid black'
}

export default function Day (props) {
    const {day, presets} = props
    return (
        <div style={dayStyles}>
            <DayHeader day={day} />
            <DayPresets presets={presets} day={day} />
        </div>
    )
}