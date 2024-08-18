"use client";
import React, { useState } from "react";
import './AssetTracking.css';

import HalalTracking from './HalalTracking';
// import TransportLogistics from './TransportLogistics';
// import SupplyChainManagement from './SupplyChainManagement';
// import VaccineTracking from './VaccineTracking';
// import CommoditiesTracking from './CommoditiesTracking';

interface Asset {
  id: string;
  name: string;
  category: string;
  status: string;
}

const AssetTracking = ({ onSubmit, onClose }) => {

  const [walletAddress, setWalletAddress] = useState("");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [newAsset, setNewAsset] = useState<Partial<Asset>>({});
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const contractAddress = "0xefe721602E7f4c6468eA8C003D405f999490091b";
  const fallbackUrl = "https://postman-echo.com/post?";

  const handleAddAsset = () => {
    if (newAsset.name && newAsset.category && newAsset.status) {
      setAssets([...assets, { id: Date.now().toString(), ...newAsset } as Asset]);
      setNewAsset({});
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleSelectAsset = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ walletAddress, selectedAsset, contractAddress, fallbackUrl });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Asset Tracking Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <div className="tracking-sections">
            <HalalTracking />
            {/* <TransportLogistics />
            <SupplyChainManagement />
            <VaccineTracking />
            <CommoditiesTracking /> */}
          </div>

          <div className="add-asset-section">
            <h2>Add New Asset</h2>
            <input
              type="text"
              name="name"
              placeholder="Asset Name"
              value={newAsset.name || ''}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newAsset.category || ''}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status"
              value={newAsset.status || ''}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleAddAsset}
              className="mr-2 px-4 py-2 border rounded-md bg-blue hover:bg-gray-100"
            >
              Add Asset
            </button>
          </div>

          <div className="asset-list-section">
            <h2>Asset List</h2>
            <ul>
              {assets.map((asset) => (
                <li key={asset.id} onClick={() => handleSelectAsset(asset)}>
                  {asset.name} - {asset.category}
                </li>
              ))}
            </ul>
          </div>

          {selectedAsset && (
            <div className="asset-details-section">
              <h2>Asset Details</h2>
              <p><strong>Name:</strong> {selectedAsset.name}</p>
              <p><strong>Category:</strong> {selectedAsset.category}</p>
              <p><strong>Status:</strong> {selectedAsset.status}</p>
            </div>
          )}

          <div className="flex justify-end">
            {/* Additional buttons or actions can be placed here */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetTracking;
