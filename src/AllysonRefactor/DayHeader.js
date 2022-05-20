import React from "react";

const dayHeaderStyles = {
    backgroundColor: '#bfc9c2',
    textAlign: 'center',
    padding: '10px'
}


export default function DayHeader (props) {

    const {day} = props
    return (
        <div style={dayHeaderStyles}>
            <h1>{day}</h1>

        </div>
    )
}