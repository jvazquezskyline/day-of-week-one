import React, { useState } from 'react';

import Tour from './TourPlanner';

export default function ToursSaved() {
  const [tours, setTours] = useState([]);

  const handleSave = (tour) => {
    try {
      if (tour.presets.length === 0) {
        throw new Error("Can't save a tour without presets");
      }
    } catch (error) {
      console.log(error);
      return;
    }

    setTours((previousTours) => {
      return [...previousTours, tour];
    });
  };

  const [cameraPresets, setCameraPresets] = useState([
    {
      name: 'Door',
    },
    {
      name: 'Office',
    },
    {
      name: 'Server',
    },
    {
      name: 'Door',
    },
    {
      name: 'Board',
    },
    {
      name: 'Floor',
    },
  ]);
  return (
    <div>
      <Tour
        handleSave={handleSave}
        cameraPresets={cameraPresets}
        setCameraPresets={setCameraPresets}
      />

      <br />

      {tours.map((tour, idx) => {
        return (
          <div key={idx}>
            Tour: {idx + 1}
            {JSON.stringify(tour, null, 20)}
            <br />
          </div>
        );
      })}
    </div>
  );
}
