"use client";

import { useState, useEffect } from "react";
import MintTokenModal from "./components/Mint-token";
import TransferTokenModal from "./components/Transfer-token";
import TopUpTokenModal from "./components/Topup-token";
import RegisterPatientModal from "./components/Register-Patient-Modal";
import AssetTracking from "./components/Assets-tracking/index";
import FileInfo from "./components/File-info";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [contractAddress, setContractAddress] = useState("0x4175a3EE7fbD167E...");
  const [tokenBalance, setTokenBalance] = useState(0);

  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isTopUpModelOpen, setIsTopUpModalOpen] = useState(false);
  const [isRegisterPatientModalOpen, setIsRegisterPatientModalOpen] = useState(false);
  const [isAssetTrackingOpen, setIsAssetTrackingOpen] = useState(false);

  const openMintModal = () => setIsMintModalOpen(true);
  const closeMintModal = () => setIsMintModalOpen(false);

  const openTransferModal = () => setIsTransferModalOpen(true);
  const closeTransferModal = () => setIsTransferModalOpen(false);

  const openTopUpModal = () => setIsTopUpModalOpen(true);
  const closeTopUpModal = () => setIsTopUpModalOpen(false);

  const openRegisterPatientModal = () => setIsRegisterPatientModalOpen(true);
  const closeRegisterPatientModal = () => setIsRegisterPatientModalOpen(false);

  const openAssetTracking = () => setIsAssetTrackingOpen(true);
  const closeAssetTracking = () => setIsAssetTrackingOpen(false);

  useEffect(() => {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/token/mint`);
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
      //fetchTransactionHistory(storedWalletAddress, contractAddress);
    }
  }, [walletAddress, contractAddress]);

  const clearWalletAddress = () => {
    sessionStorage.removeItem("walletAddress");
    setWalletAddress(null);
    setTokenBalance(0);
  };

  // Fetch transaction history and calculate balance
  // const fetchTransactionHistory = async (walletAddress, contractAddress) => {
  //   try {
  //     const response = fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/token/transaction-history`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "client_id": "b527361de1035d9888da964cbe1672aa6ff399f3f80db09aa5f5c60974f343e3",
  //           "client_secret": "sk_6eb95e2bcd97687f822eb6a5e812d25f0c6925ceb088215a8f2909d4bf3e1e73",
  //         },
  //         body: JSON.stringify({
  //           wallet_address: walletAddress,
  //           contract_address: contractAddress,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch transaction history");
  //     }

  //     const result = await response.json();
  //     const transactions = result.transactions || [];
  //     const balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  //     setTokenBalance(balance);
  //   } catch (error) {
  //     console.error("Error fetching transaction history:", error);
  //     toast.error("🦄 Error fetching transaction history", {
  //       position: "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  // const sendTransactionToMaschain = async (transactionData) => {
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/maschain/record-transaction`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "client_id": "b527361de1035d9888da964cbe1672aa6ff399f3f80db09aa5f5c60974f343e3",
  //         "client_secret": "sk_6eb95e2bcd97687f822eb6a5e812d25f0c6925ceb088215a8f2909d4bf3e1e73",
  //       },
  //       body: JSON.stringify(transactionData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to record transaction with Maschain");
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     console.error("Error recording transaction with Maschain:", error);
  //   }
  // };

  const handleMintSubmit = async (data) => {
    try {
      // Ensure walletAddress is included in data
      if (!data.walletAddress) {
        data.walletAddress = walletAddress;
      }

      // Perform the API request to mint tokens
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/token/mint`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
            // "client_id": "b527361de1035d9888da964cbe1672aa6ff399f3f80db09aa5f5c60974f343e3",
            // "client_secret": "sk_6eb95e2bcd97687f822eb6a5e812d25f0c6925ceb088215a8f2909d4bf3e1e73",
          },
          body: JSON.stringify(data),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        const errorDetails = await response.text(); // Get error details for debugging
        throw new Error(`Failed to mint token: ${errorDetails}`);
      }

      // Parse the successful response
      const result = await response.json();

      // Prepare the transaction data
      const transactionData = {
        wallet_address: data.walletAddress,
        transaction_id: result.transaction_id,
        amount: data.amount,
        date: new Date().toISOString(),
      };

      // Send the transaction data to Maschain (optional if this is needed)
      await sendTransactionToMaschain(transactionData);

      // Update the token balance if minting is successful
      setTokenBalance((prevBalance) => prevBalance + data.amount);

      // Show a success toast notification
      toast.success(
        `🦄 Minted token successfully! Wallet address: ${data.walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );

      // Close the mint modal (if applicable)
      closeMintModal();
    } catch (error) {
      // Log the error for debugging
      console.error("Error minting token:", error);

      // Show an error toast notification
      toast.error("🦄 Error minting token", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // const handleTopUpSubmit = async (data) => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/token/token-top-up`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "client_id": "b527361de1035d9888da964cbe1672aa6ff399f3f80db09aa5f5c60974f343e3",
  //           "client_secret": "sk_6eb95e2bcd97687f822eb6a5e812d25f0c6925ceb088215a8f2909d4bf3e1e73",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to top up token");
  //     }

  //     const result = await response.json();
  //     const transactionData = {
  //       wallet_address: walletAddress,
  //       transaction_id: result.transaction_id,
  //       amount: data.amount,
  //       date: new Date().toISOString(),
  //     };

  //     await sendTransactionToMaschain(transactionData);

  //     toast.success(`🦄 Token topped up successfully! Wallet address: ${walletAddress}`, {
  //       position: "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });

  //     setTokenBalance((prevBalance) => prevBalance + data.amount);
  //     closeTopUpModal();
  //   } catch (error) {
  //     console.error("Error topping up token:", error);
  //     toast.error("🦄 Error topping up token", {
  //       position: "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  const handleTransferSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/token/token-transfer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "client_id": "b527361de1035d9888da964cbe1672aa6ff399f3f80db09aa5f5c60974f343e3",
            "client_secret": "sk_6eb95e2bcd97687f822eb6a5e812d25f0c6925ceb088215a8f2909d4bf3e1e73",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to transfer token");
      }

      const result = await response.json();
      const transactionData = {
        wallet_address: walletAddress,
        transaction_id: result.transaction_id,
        amount: data.amount,
        date: new Date().toISOString(),
      };

      await sendTransactionToMaschain(transactionData);

      toast.success(`🦄 Token transferred successfully! Wallet address: ${walletAddress}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeTransferModal();
    } catch (error) {
      console.error("Error transferring token:", error);
      toast.error("🦄 Error transferring token", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">

      <style jsx>{`
        .btn {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #45a049;
        }

        .btn1 {
          background-color: #C653FF;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .btn1:hover {
          background-color: #7300AB;
        }
      `}</style>

      <h1 className="text-3xl font-bold">Healthcare Token System</h1>
      {walletAddress ? (
        <>
          <p className="mt-4">Wallet Address: {walletAddress}</p>
          <p className="mt-2">Contract Address: {contractAddress}</p>
          <p className="mt-2">Token Balance: {tokenBalance}</p>
          <button className="btn" onClick={clearWalletAddress}>
            Clear Wallet Address
          </button>
          <div className="flex gap-4 mt-4">
            <button className="btn" onClick={openMintModal}>
              Mint Token
            </button>
            <button className="btn" onClick={openTransferModal}>
              Transfer Token
            </button>
            <button className="btn" onClick={openRegisterPatientModal}>
              Register Patient
            </button>
          </div>
          <div>
          <button className="btn1" onClick={openAssetTracking}>
              Asset Tracking
            </button>
          </div>
        </>
      ) : (
        <p>No wallet address found. Please connect your wallet.</p>
      )}
      <AnimatePresence>
        {isMintModalOpen && <MintTokenModal onClose={closeMintModal} onSubmit={handleMintSubmit} />}
        {isTransferModalOpen && <TransferTokenModal onClose={closeTransferModal} onSubmit={handleTransferSubmit} />}
        {isTopUpModelOpen && <TopUpTokenModal onClose={closeTopUpModal} onSubmit={handleTopUpSubmit} />}
        {isRegisterPatientModalOpen && <RegisterPatientModal onClose={closeRegisterPatientModal} />}
        {isAssetTrackingOpen && <AssetTracking onClose={closeAssetTracking} />}
      </AnimatePresence>
      <ToastContainer />
    </main>
  );
}