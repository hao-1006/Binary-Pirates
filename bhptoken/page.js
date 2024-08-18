"use client";

export default function TokenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-4xl w-full text-center bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Binary Healthcare Pirate Token</h1>
        <hr className="w-24 mx-auto border-t-2 border-blue-500 mb-8" />
        <div className="text-lg text-gray-700">
          <p className="mb-6">
            <strong className="text-xl font-semibold">Token Name:</strong>{" "}
            <span className="text-blue-600">BHP</span>
          </p>
          <p className="mb-6">
            <strong className="text-xl font-semibold">Token Symbol:</strong>{" "}
            <span className="text-blue-600">BHP</span>
          </p>
          <p className="mb-6">
            <strong className="text-xl font-semibold">Decimal Places:</strong>{" "}
            <span className="text-blue-600">4</span>
          </p>
          <p className="mb-6">
            <strong className="text-xl font-semibold">Initial Supply:</strong>{" "}
            <span className="text-blue-600">200,000 BHP</span>
          </p>
          <p className="mb-6">
            <strong className="text-xl font-semibold">Max Supply Cap:</strong>{" "}
            <span className="text-blue-600">1,000,000 BHP</span>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contract Details</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Contract Name:</strong>{" "}
              Binary Healthcare Pirate
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Token Name:</strong>{" "}
              BHP
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Token Symbol:</strong>{" "}
              BHP
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Decimals:</strong>{" "}
              4
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Initial Supply:</strong>{" "}
              200,000 BHP
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Max Supply Cap:</strong>{" "}
              1,000,000 BHP
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}