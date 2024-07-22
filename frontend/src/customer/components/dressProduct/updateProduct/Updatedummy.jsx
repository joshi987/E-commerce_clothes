import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;
const Updatedummy = () => {
  const { productId } = useParams();
  const [updatedProduct, setUpdatedProduct] = useState({
    description: '',
    imageURL: '',
    price: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          console.error('Product ID is not defined.');
          return;
        }
        console.log('Fetching product with ID:', productId);
        const response = await axios.get(`${BACKEND_URLs}/dummy/updateddummyproduct/${productId}`);
        console.log('Fetched product data:', response.data);
        const productData = response.data;
        setUpdatedProduct({
          description: productData.description,
          imageURL: productData.imageURL,
          price: productData.price
        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleUpdateProduct = async () => {
    try {
      if (!productId) {
        console.error('Product ID is not defined.');
        return;
      }
      console.log('Updating product with ID:', productId);
      console.log('Updated product data:', updatedProduct);
      const response = await axios.put(`${BACKEND_URLs}/dummy/updatedummy/${productId}`, updatedProduct);
      console.log('Response after updating product:', response.data);
      console.log('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={updatedProduct.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="imageURL"
            placeholder="Image URL"
            value={updatedProduct.imageURL}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={updatedProduct.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdateProduct}
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Updatedummy;
