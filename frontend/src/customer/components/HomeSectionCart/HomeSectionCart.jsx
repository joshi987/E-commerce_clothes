import { Link } from "react-router-dom";
import LatestBrand from "../HomeSectionCarosel/heading/LatestBrand";

function HomeSectionCart({ product }) {
  return (
    <>

    
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3  p-4">
      <div className="h-[13rem] w-[10rem]  p-4">
      <Link  to="price">

        <img
          className="object-cover object-top h-full w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          src={product.imageURL}
          alt="hhhh"
        />
      </Link>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product.description}
        </h3>
        <p>Men Solid pure</p>
      </div>
    </div>
    </>
  );
}

export default HomeSectionCart;
