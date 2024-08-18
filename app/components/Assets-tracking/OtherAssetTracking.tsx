import React, { useState } from 'react';
// import Maschain from 'maschain-sdk';

const OtherAssetTracking = () => {
    const [assetId, setAssetId] = useState('');
    const [assetData, setAssetData] = useState(null);

    const handleTrack = async () => {
        try {
            // const data = await Maschain.trackAsset({ id: assetId });
            // setAssetData(data);
        } catch (error) {
            console.error('Error tracking asset:', error);
        }
    };

    return (
        <div>
            <h2>Other Asset Tracking</h2>
            <input
                type="text"
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)}
                placeholder="Enter Asset ID"
            />
            <button onClick={handleTrack}>Track</button>
            {assetData && <div>{JSON.stringify(assetData)}</div>}
        </div>
    );
};

export default OtherAssetTracking;
