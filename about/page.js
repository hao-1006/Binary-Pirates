"use client";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Wong Chun How",
      position: "System Developer",
      details: "Chun How is develped for the Healthcare based on MasChain Blockchain.",
    },
    {
      name: "Wong Chin Wei",
      position: "Healthcare Analyst",
      details: "Chin Wei is an expert in healthcare analytics with a focus on integrating blockchain solutions for improving patient care.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-7xl px-8"
        >
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4 uppercase">
            About Maschain API Binary Healthcare Pirate
          </h1>
          <hr className="w-24 mx-auto mt-6 border-t-2 border-blue-500" />
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Maschain API Binary Healthcare Pirate, a leading platform
            revolutionizing the healthcare industry with blockchain technology.
            Our mission is to provide secure, transparent, and efficient
            healthcare services to patients worldwide. Our platform integrates
            advanced blockchain services to ensure the authenticity of medical
            records, streamline patient information management, and provide a
            robust credential verification system for healthcare providers.
          </p>
        </div>

        {/* Left and Right Layout */}
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Vision</h2>
            <hr className="w-16 mt-4 border-t-2 border-blue-500" />
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Our vision is to create a seamless and secure healthcare
              environment where patients and providers can trust the integrity
              of medical information. By leveraging the power of blockchain, we
              aim to eliminate fraud, reduce inefficiencies, and empower
              patients with control over their own health data.
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Services</h2>
            <hr className="w-16 mt-4 border-t-2 border-blue-500" />
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              We offer a range of services including:
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 mt-4 max-w-3xl mx-auto">
              <li className="mb-2">Medical Service Tracking</li>
              <li className="mb-2">Patient Information Management</li>
              <li className="mb-2">Credential Verification for Healthcare Providers</li>
              <li>Blockchain-based Certificate Issuance</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Team</h2>
          <hr className="w-16 mx-auto mt-4 border-t-2 border-blue-500" />
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-64 h-80 group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of the card */}
                  <div
                    className="absolute w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-md text-gray-600 mt-2">
                      {member.position}
                    </p>
                  </div>
                  {/* Back of the card */}
                  <div
                    className="absolute w-full h-full bg-blue-500 text-white shadow-lg rounded-lg flex flex-col items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-md text-center p-4">
                      {member.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
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
    </main>
  );
}
