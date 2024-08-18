import React, { useState } from "react";

interface FileInfo {
  name: string;
  hash: string;
  filetype: string;
}

const FileInfo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFileInfo, setUploadedFileInfo] = useState<FileInfo | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    // Simulate a file hash creation and upload process
    const fileHash = await simulateFileHash(selectedFile);
    const fileInfo: FileInfo = {
      name: selectedFile.name,
      hash: fileHash,
      filetype: selectedFile.type,
    };
    setUploadedFileInfo(fileInfo);
  };

  const simulateFileHash = (file: File): Promise<string> => {
    // Placeholder for actual hashing logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Qm${file.name.replace(/\s+/g, "")}${Date.now().toString(36)}`);
      }, 1000);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome To EHR</h1>

      <div className="mb-4">
        <label htmlFor="patientName" className="block mb-2">Name</label>
        <input
          type="text"
          id="patientName"
          className="border rounded-md w-full p-2"
          placeholder="Enter Patient Name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block mb-2">Age</label>
        <input
          type="number"
          id="age"
          className="border rounded-md w-full p-2"
          placeholder="Enter Age"
        />
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Grant Access</button>

      <div className="mb-4">
        <label htmlFor="fileUpload" className="block mb-2">Choose File</label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          className="border rounded-md w-full p-2"
        />
        <button
          onClick={handleFileUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
      </div>

      {uploadedFileInfo && (
        <div className="border rounded-md p-4 mt-4">
          <p>{uploadedFileInfo.name}</p>
          <p>filehash: {uploadedFileInfo.hash}</p>
          <p>filetype: {uploadedFileInfo.filetype}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Show File</button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Doctors List</h2>
        {/* Here you can map over a list of doctors and display them */}
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">Logout</button>
    </div>
  );
};

export default FileInfo;
