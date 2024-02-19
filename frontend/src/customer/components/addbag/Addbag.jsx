import { useSelector, useDispatch } from "react-redux";
import "./addbag.css";
import { Link } from "react-router-dom";
import { incrementQuantity, decrementQuantity } from "../../redux/feature/cartSlice";

function Addbag() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 
  const dispatch = useDispatch();

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
        <button className="buyNowButton">Buy Now</button>
      </Link>
    </div>
  );
}

export default Addbag;
