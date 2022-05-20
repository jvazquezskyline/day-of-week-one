import React from "react"
import Day from "./Day"



const weekStyles = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default function Week (props) {
    const {presets} = props 
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
        <div style={weekStyles}>

            {daysOfWeek.map((day, idx) => {
                return (
                    <Day key={idx} day={day} presets={presets} />
                )
            })}
        </div>
    )
}