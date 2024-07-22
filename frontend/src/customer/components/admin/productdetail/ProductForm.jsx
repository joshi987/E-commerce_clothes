import { Card } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ProductForm = ({
  product,
  ProductImage,
  imagePreview,
  description,
  setdesciption,
  handlInputChnage,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-md bg-white p-8 rounded-lg shadow-md overflow-y-auto max-h-full">
      <form onSubmit={saveProduct} className="space-y-4">
        <label className="block text-lg font-semibold">Product Image</label>
        <code className="text-sm text-gray-700 block mb-2">
          Supported Formats: jpg, jpeg, png
        </code>
        <input
          type="file"
          name="image"
          onChange={(e) => handleImageChange(e)}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
        />
  
        {imagePreview != null ? (
          <div className="mt-2">
            <img src={imagePreview} alt="product" className="max-w-full" />
          </div>
        ) : (
          <p className="text-gray-700">No image set for this product.</p>
        )}
  
        <label className="block text-lg font-semibold">Product Name:</label>
        <input
          type="text"
          placeholder="Product name"
          name="name"
          value={product?.name}
          onChange={handlInputChnage}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-lg font-semibold">Product Price:</label>
        <input
          type="text"
          placeholder="Product Price"
          name="price"
          value={product?.price}
          onChange={handlInputChnage}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-lg font-semibold">Product Quantity:</label>
        <input
          type="text"
          placeholder="Product Quantity"
          name="quantity"
          value={product?.quantity}
          onChange={handlInputChnage}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
        />
  
        <div className="flex flex-col">
          <label className="block text-lg font-semibold">Product Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setdesciption}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
            className="border border-gray-300 rounded-md p-2 flex-1 focus:outline-none focus:border-blue-500"
            style={{ minHeight: "100px" }} // Set a minimum height
          />
        </div>
  
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  </div>
  

  
  );
};

export default ProductForm;
