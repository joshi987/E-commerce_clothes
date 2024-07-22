import { useSelector, useDispatch } from "react-redux";
import "./addbag.css";
import { Link } from "react-router-dom";
import { incrementQuantity, decrementQuantity } from "../../redux/feature/cartSlice";
import axios from "axios";
export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;
function Addbag() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const userId = useSelector((state) => state.cart.userId);


 
  const dispatch = useDispatch();
//  Function to create cart data object
const createCartData = (products, totalPrice,userId) => {
  return {
    userId: userId,
    products: products.map((product) => ({
      id: product.id,
      description: product.description || "", // Provide a default value if description is undefined
      imageURL: product.imageURL || "", // Provide a default value if imageURL is undefined
      quantity: product.cartTotalQuantity,
      price: product.price,
    })),
    totalPrice: totalPrice,
  };
};


// Function to send cart data to backend
const handleBuyNow = async () => {
  const cartData = createCartData(products, totalPrice,userId);
  console.log(cartData);

  try {
    await axios.post(`${BACKEND_URLs}/api/cart`, cartData);
    console.log("Cart data successfully sent to the backend:", cartData);
  } catch (error) {
    console.error("Error sending cart data to the backend:", error);
  }
};
  return (
    <div>
      <div className="cartWrapper">
        {products.map((product, id) => {
          return (
            <div key={id} className="cartCard">
              <img className="img-bag" src={product.imageURL} alt="heyy" />
              <p className="product-name">{product.description}</p>
              <div className="quantity-controls">
              <button onClick={() => dispatch(decrementQuantity(product.id))} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-full">-</button>
<span className="px-3 py-1 bg-gray-100 text-gray-900">{product.cartTotalQuantuty}</span>
<button onClick={() => dispatch(incrementQuantity(product.id))} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-full">+</button>

              </div>
            </div>
          );
        })}
      </div>

      <div className="total">
        Total: ₹{totalPrice}
       </div>
      <Link to="buy">
        <button onClick={handleBuyNow} className="buyNowButton">Buy Now</button>
      </Link>
    </div>
  );
}

export default Addbag;



// import { useSelector, useDispatch } from "react-redux";
// import "./addbag.css";
// import { Link } from "react-router-dom";
// import { incrementQuantity, decrementQuantity } from "../../redux/feature/cartSlice";
// import axios from "axios";
// export const BACKEND_URLs = import.meta.env.VITE_BACKEND_URL;
// function Addbag() {
//   const products = useSelector((state) => state.cart.products);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
//   const dispatch = useDispatch();

//   // Function to handle product removal
//   const handleRemoveProduct = (productId) => {
//     dispatch(removeProduct(productId));
//   };

//   // Function to create cart data object
//   const createCartData = () => {
//     return {
//       products: products.map((product) => ({
//         id: product.id,
//         description: product.description,
//         imageURL: product.imageURL,
//         quantity: product.cartTotalQuantity,
//         price: product.price,
//       })),
//       totalPrice: totalPrice,
//     };
//   };

//   // Function to send cart data to backend
//   const handleBuyNow = () => {
//     const cartData = createCartData();
//     // Example: axios.post("/api/cart", cartData)...
//     axios.post(`${BACKEND_URLs}/api/cart`, cartData)
//     console.log("Cart data to send to backend:", cartData);
//   };

//   return (
//     <div>
//       <div className="cartWrapper">
//         {products.map((product, id) => (
//           <div key={id} className="cartCard">
//             <img className="img-bag" src={product.imageURL} alt="heyy" />
//             <p className="product-name">{product.description}</p>
//             <div className="quantity-controls">
//               <button
//                 onClick={() => dispatch(decrementQuantity(product.id))}
//                 className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-full"
//               >
//                 -
//               </button>
//               <span className="px-3 py-1 bg-gray-100 text-gray-900">
//                 {product.cartTotalQuantity}
//               </span>
//               <button
//                 onClick={() => dispatch(incrementQuantity(product.id))}
//                 className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-full"
//               >
//                 +
//               </button>
//             </div>
//             <button
//               onClick={() => handleRemoveProduct(product.id)}
//               className="removeButton"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="total">Total: ₹{totalPrice}</div>
//       <button className="buyNowButton" onClick={handleBuyNow}>
//         Buy Now
//       </button>
//     </div>
//   );
// }

// export default Addbag;
