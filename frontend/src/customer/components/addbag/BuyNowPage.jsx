import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addbag.css';

function BuyNowPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phoneNumber && address && pinCode) {
      navigate('/order-summary');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input type="text" id="name" className="inputField" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
            <input type="text" id="phoneNumber" className="inputField" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address:</label>
            <input type="text" id="address" className="inputField" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label htmlFor="pinCode" className="block text-gray-700 font-semibold mb-2">Pin Code:</label>
            <input type="text" id="pinCode" className="inputField" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
          </div>
          <button type="submit" className="submitButton block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BuyNowPage;
