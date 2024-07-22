import { Link, useNavigate, useParams } from "react-router-dom";
import "./pricepage.css";
import { menskurta } from "../../data/menskurta";
export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;
import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Pricepage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
 const {productId}= useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URLs}/dummy`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the component mounts

  const handleClick = (item) => {
    console.log(item._id)
    navigate("/price/cart", { state: { imageURL: item.imageURL, id: item._id, description: item.description, prices: item.price } });
  };

  return (
    <div className="flex flex-wrap justify-center bg-white py-5">
      {products.map((item, index) => (
        <div
          key={index}
          className="produtCard w-[15rem] m-3 transition-all cursor-pointer"
          onClick={() => handleClick(item)}
        >
          <div className="h-[20rem]">
            <img
              className="h-full w-full object-cover object-left-top"
              src={item.imageURL}
              alt={item.description} // Use item.description as alt text
            />
          </div>
          <div className="textPart bg-white p-3">
            <div>
              <p>Universaloutfit</p>
              <p>{item.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold">{item.price}</p>
              <p className="line-through opacity-50">₹1999</p>
              <p className="text-green-600 font-semibold">70% off</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricepage;

