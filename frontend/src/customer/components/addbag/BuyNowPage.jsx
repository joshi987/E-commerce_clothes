import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './addbag.css'
function BuyNowPage() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // State variables to store user input
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any validation checks on the input fields before navigating to the next page
    // For simplicity, let's assume all fields are required
    if (name && phoneNumber && address && pinCode) {
      // Navigate to the next page (e.g., order summary page)
      navigate('/order-summary'); // Use navigate to go to the specified path
    } else {
      // Display error message or handle invalid input
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="buyNowContainer">
    <h2 className="formTitle">Enter Your Details</h2>
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="name" className="formLabel">Name:</label>
        <input type="text" id="name" className="formInput" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="formGroup">
        <label htmlFor="phoneNumber" className="formLabel">Phone Number:</label>
        <input type="text" id="phoneNumber" className="formInput" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="formGroup">
        <label htmlFor="address" className="formLabel">Address:</label>
        <input type="text" id="address" className="formInput" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="formGroup">
        <label htmlFor="pinCode" className="formLabel">Pin Code:</label>
        <input type="text" id="pinCode" className="formInput" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
      </div>
      <button type="submit" className="submitButton">Submit</button>
    </form>
  </div>
  
  );
}

export default BuyNowPage;
