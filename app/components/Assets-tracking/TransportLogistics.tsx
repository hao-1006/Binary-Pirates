import React, { useState } from 'react';
// import Maschain from 'maschain-sdk';

const TransportLogistics = () => {
    const [shipmentId, setShipmentId] = useState('');
    const [logisticsData, setLogisticsData] = useState(null);

    const handleTrack = async () => {
        try {
            // const data = await Maschain.trackShipment({ id: shipmentId, category: 'Logistics' });
            // setLogisticsData(data);
        } catch (error) {
            console.error('Error tracking shipment:', error);
        }
    };

    return (
        <div>
            <h2>Transportation & Logistics Tracking</h2>
            <input
                type="text"
                value={shipmentId}
                onChange={(e) => setShipmentId(e.target.value)}
                placeholder="Enter Shipment ID"
            />
            <button onClick={handleTrack}>Track</button>
            {logisticsData && <div>{JSON.stringify(logisticsData)}</div>}
        </div>
    );
};

export default TransportLogistics;