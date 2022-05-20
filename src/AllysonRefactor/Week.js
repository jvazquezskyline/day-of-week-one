import React from "react"
import Day from "./Day"



const weekStyles = {
    display: 'flex',
}

export default function Week (props) {
    const {presets, updatePreset} = props 
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
        <div style={weekStyles}>

            {daysOfWeek.map((day, idx) => {
                return (
                    <Day key={idx} day={day} presets={presets} updatePreset={updatePreset} />
                )
            })}
        </div>
    )
}