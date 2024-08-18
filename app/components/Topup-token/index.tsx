"use client";
import React, { useState } from "react";

interface TopUpTokenModalProps {
  onSubmit: (data: { amount: number }) => void;
  onClose: () => void;
  onTopUp?: (amount: number) => void; // Make sure this is optional if not always provided
}

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

// TopUpTokenModal Component
const TopUpTokenModal: React.FC<TopUpTokenModalProps> = ({ onSubmit, onClose, onTopUp }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topUpAmount = parseFloat(amount);
    if (!isNaN(topUpAmount) && topUpAmount > 0) {
      if (onTopUp) onTopUp(topUpAmount); // Only call if provided
      onSubmit({ amount: topUpAmount });
      onClose();
    } else {
      alert("Please enter a valid amount to top up.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Top Up Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between mb-4">
            {[10, 20, 50, 100, 200, 500].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value.toString())}
                style={buttonStyle}
              >
                {value} BHP
              </button>
            ))}
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2 font-semibold">
              Top Up Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Top Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopUpTokenModal;
