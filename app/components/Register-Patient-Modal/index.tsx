"use client";
import React, { useState } from "react";

// Button style object
const buttonStyle = {
  width: '80px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginRight: '10px',
  marginBottom: '10px',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
};

const RegisterPatientModal = ({ onSubmit, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const contractAddress = "0xefe721602E7f4c6468eA8C003D405f999490091b";
  const fallbackUrl = "https://postman-echo.com/post?";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ walletAddress, name, age, contractAddress, fallbackUrl });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Mint Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          

          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Age
            </label>
            <div className="flex flex-wrap justify-between mb-4">
            {[5, 10, 15, 20, 25, 30].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAge(value.toString())}
                style={buttonStyle}
              >
                {value} Years
              </button>
            ))}
          </div>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 hidden">
            <label htmlFor="contractAddress" className="block mb-2">
              Contract Address
            </label>
            <input
              type="text"
              id="contractAddress"
              value={contractAddress}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 hidden">
            <label htmlFor="fallbackUrl" className="block mb-2">
              Fallback URL
            </label>
            <input
              type="text"
              id="fallbackUrl"
              value={fallbackUrl}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPatientModal;
