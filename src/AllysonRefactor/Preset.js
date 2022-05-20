import React from 'react';





export default function Preset (props) {

    const {preset} = props
    return (
        <div>
            Name: {preset.name}
        </div>
    )
}