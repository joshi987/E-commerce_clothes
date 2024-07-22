// import React, { useState } from 'react';
// import axios from 'axios';
// export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const CreateProductForm = ({ onAddProduct }) => {
//   const [description, setDescription] = useState('');
//   const [imageURL, setImageURL] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${BACKEND_URL}dummy/dummynew`, {
//         description,
//         imageURL,
//         price,
//       });
//       console.log(response);
//       onAddProduct(response.data.newProduct);
//       setDescription('');
//       setImageURL('');
//       setPrice('');
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
// <div className="flex justify-center items-center h-screen">
//   <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
//     <input
//       type="text"
//       placeholder="Description"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//       required
//       className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
//     />
//     <input
//       type="text"
//       placeholder="Image URL"
//       value={imageURL}
//       onChange={(e) => setImageURL(e.target.value)}
//       required
//       className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
//     />
//     <input
//       type="number"
//       placeholder="Price"
//       value={price}
//       onChange={(e) => setPrice(e.target.value)}
//       required
//       className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
//     />
//     <button
//       type="submit"
//       className="block w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition-colors"
//     >
//       Add Product
//     </button>
//   </form>
// </div>

//   );
// };

// export default CreateProductForm;

import React, { useState } from 'react';
import axios from 'axios';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CreateProductForm = ({ onAddProduct }) => {
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Description:', description);
    console.log('Image URL:', imageURL);
    console.log('Price:', price);
    try {
      const response = await axios.post(`${BACKEND_URL}/dummy/dummynew`, {
        description,
        imageURL,
        price,
      });
      console.log('Response:', response);
      onAddProduct(response.data.newProduct);
      setDescription('');
      setImageURL('');
      setPrice('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
          className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="block w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
