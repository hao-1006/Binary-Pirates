// ParentComponent.js
import React, { useState } from "react";
import TopUpTokenModal from "./TopUpTokenModal"; // Importing the child component

const ParentComponent = () => {
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);

  const handleTopUp = (amount) => {
    console.log("Top up amount:", amount);
    // Handle top-up logic, like updating balance or communicating with backend
  };

  const handleTopUpSubmit = (data) => {
    console.log("Top-up data submitted:", data);
    // Further actions based on the submitted data
  };

  return (
    <div>
      <button onClick={() => setIsTopUpModalOpen(true)}>Open Top Up Modal</button>
      {isTopUpModalOpen && (
        <TopUpTokenModal
        onClose={closeTopUpModal}
        onSubmit={handleTopUpSubmit}
        onTopUp={(amount) => console.log(`Top-up with amount: ${amount}`)} // Add this prop
      />
      )}
    </div>
  );
};

export default ParentComponent;
