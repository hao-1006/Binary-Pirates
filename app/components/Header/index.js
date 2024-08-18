"use client";
import React, { useState } from "react";
import Link from "next/link";
import LoginWalletModal from "../Login-wallet";
import CreateWalletModal from "../Create-wallet";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      //   console.log("User created:", result);
      const walletAddress = result.result.wallet.wallet_address;
      //   console.log("Wallet address:", walletAddress);
      // Store the wallet address in sessionStorage
      sessionStorage.setItem("walletAddress", walletAddress);

      if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `🦄 User created successfully!
        Wallet address: ${walletAddress}`,
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
      closeModal();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Don't send the request if there's an error
      return;
    }
  };

  // Function to navigate to AboutUs.js page
  const navigateToAboutUs = () => {
    router.push("/AboutUs");
  };

  return (
    <header className="w-full py-6 lg:py-4 relative border-b">
      <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
        <div className="flex items-left">
          <i src="Hackathonicon.ico"></i>
          <h1 className="text-xl font-bold">Maschain Binary Pirate</h1>
        </div>

        <Link href="/" passHref>
        <button
          className="flex item-right border:none rounded-md py-2 px-4 hover:text-grey transition-all duration-500 hover:opacity-30"
        >
          Home Page
        </button>
        </Link>

        <Link href="/bhptoken" passHref>
        <button
          className="flex item-right border:none rounded-md py-2 px-4 hover:text-grey transition-all duration-500 hover:opacity-30"
        >
          BHP Token
        </button>
        </Link>

        <Link href="/about" passHref>
        <button
          className="flex item-right border:none rounded-md py-2 px-4 hover:text-grey transition-all duration-500 hover:opacity-30"
        >
          About Us
        </button>
        </Link>

        <Link href="/contact" passHref>
        <button
          className="flex item-right border:none rounded-md py-2 px-4 hover:text-grey transition-all duration-500 hover:opacity-30"
        >
          Contact Us
        </button>
        </Link>
        
        <button
          onClick={openModal}
          className="flex item-right border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          {typeof window !== "undefined" &&
          window.sessionStorage.getItem("walletAddress") ? (
            <span className="text-sm">
              {`${window.sessionStorage
                .getItem("walletAddress")
                .slice(0, 6)}...${window.sessionStorage
                .getItem("walletAddress")
                .slice(-4)}`}
            </span>
          ) : (
            "Create Wallet"
          )}
        </button>
        {/* <button
          onClick={openLoginModal}
          className="flex item-right border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          {typeof window !== "undefined" &&
          window.sessionStorage.getItem("walletAddress") ? (
            <span className="text-sm">
              {`${window.sessionStorage
                .getItem("walletAddress")
                .slice(0, 6)}...${window.sessionStorage
                .getItem("walletAddress")
                .slice(-4)}`}
            </span>
          ) : (
            "Login Wallet"
          )}
        </button> */}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateWalletModal onSubmit={handleSubmit} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <LoginWalletModal onSubmit={handleSubmit} onClose={closeLoginModal} />
          </motion.div>
        )}
      </AnimatePresence> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default Header;
