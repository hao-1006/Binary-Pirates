import React, { useState } from 'react';

const LandTitleRegistration = () => {
    const [landTitleId, setLandTitleId] = useState('');
    const [landTitleData, setLandTitleData] = useState(null);

    const handleTrack = async () => {
        try {
            // const data = await Maschain.trackLandTitle({ id: landTitleId });
            // setLandTitleData(data);
        } catch (error) {
            console.error('Error tracking land title:', error);
        }
    };

    return (
        <div>
            <h2>Land Title Registration Tracking</h2>
            <input
                type="text"
                value={landTitleId}
                onChange={(e) => setLandTitleId(e.target.value)}
                placeholder="Enter Land Title ID"
            />
            <button onClick={handleTrack}>Track</button>
            {landTitleData && <div>{JSON.stringify(landTitleData)}</div>}
        </div>
    );
};

export default LandTitleRegistration;