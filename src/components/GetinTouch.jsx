import React from 'react';

const GetInTouch = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed bottom-0 left-3/4 transform -translate-x-1/3 z-50 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="bg-white border border-gray-300 shadow-lg rounded-t-xl p-4 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
            onClose();
          }}
          className="space-y-2"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
