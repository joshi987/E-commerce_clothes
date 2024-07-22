import React, { useState, useEffect } from 'react';
import DressProducts from './DressProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;

const ParentComponent = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URLs}/dummy`);
        console.log(response.data)
        setProducts(response.data);
       
        console.log("All id")
       response.data.forEach((product)=>console.log(product?._id));
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleDelete = async (productId) => {
    console.log("productId", productId);
    try {

      await axios.delete(`${BACKEND_URLs}/dummy/delete/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = (productId) => {
    
    console.log('Updating product with id:', productId); // Check if productId is defined
    navigate(`updatedummy/${productId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Dress Products</h1>
      <DressProducts products={products} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default ParentComponent;
