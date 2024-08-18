"use client";

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-4xl w-full text-center bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <hr className="w-16 mx-auto border-t-2 border-blue-500 mb-8" />
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          If you have any questions or would like to learn more about our services, please don't hesitate to reach out to us:
        </p>
        <ul className="list-none space-y-6 mb-8">
          <li className="text-lg text-gray-600 flex items-center justify-center space-x-3">
            <i className="fas fa-envelope text-blue-500 text-xl"></i>
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@maschainhealth.com" className="text-blue-500 underline hover:text-blue-700">
                info@maschainhealth.com
              </a>
            </span>
          </li>
          <li className="text-lg text-gray-600 flex items-center justify-center space-x-3">
            <i className="fab fa-whatsapp text-green-500 text-xl"></i>
            <span>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/yourwhatsappnumber" className="text-blue-500 underline hover:text-blue-700">
                +1234567890
              </a>
            </span>
          </li>
          <li className="text-lg text-gray-600 flex items-center justify-center space-x-3">
            <i className="fas fa-phone text-blue-500 text-xl"></i>
            <span>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-blue-500 underline hover:text-blue-700">
                +1 (234) 567-890
              </a>
            </span>
          </li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          We look forward to assisting you!
        </p>
      </div>
    </main>
  );
}
