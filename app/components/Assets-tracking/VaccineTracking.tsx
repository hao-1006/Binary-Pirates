import React, { useState } from 'react';
// import Maschain from 'maschain-sdk';

const VaccineTracking = () => {
    const [vaccineId, setVaccineId] = useState('');
    const [vaccineData, setVaccineData] = useState(null);

    const handleTrack = async () => {
        try {
            // const data = await Maschain.trackVaccine({ id: vaccineId });
            // setVaccineData(data);
        } catch (error) {
            console.error('Error tracking vaccine:', error);
        }
    };

    return (
        <div>
            <h2>Vaccine Tracking</h2>
            <input
                type="text"
                value={vaccineId}
                onChange={(e) => setVaccineId(e.target.value)}
                placeholder="Enter Vaccine ID"
            />
            <button onClick={handleTrack}>Track</button>
            {vaccineData && <div>{JSON.stringify(vaccineData)}</div>}
        </div>
    );
};

export default VaccineTracking;