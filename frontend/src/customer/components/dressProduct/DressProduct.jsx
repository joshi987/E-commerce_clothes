import React from 'react';
import { Link } from 'react-router-dom';
export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;

const DressProducts = ({ products, onDelete, onUpdate }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border border-gray-200 rounded-lg">
          <img src={product.imageURL} alt={product.description} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">{product.description}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <div className="flex justify-between mt-4">
            <button onClick={() => onUpdate(product._id)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">Update</button>
            <button onClick={() => onDelete(product._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DressProducts;
