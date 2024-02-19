import { Link, useNavigate } from "react-router-dom";
import "./pricepage.css";
import { menskurta } from "../../data/menskurta";

function Pricepage() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate("/price/cart", { state: { imageURL: item.imageURL, id: item.id,description:item.description, prices:item.price } });
    console.log(item.ImageURL)
  };

  return (
    <>
      <div className="flex flex-wrap justify-center bg-white py-5">
        {menskurta.map((item, index) => {
          return (
            <div
              key={index}
              className="produtCard w-[15rem] m-3 transition-all cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <div className="h-[20rem]">
                <img
                  className="h-full w-full object-cover object-left-top"
                  src={item.imageURL}
                  alt="heyy"
                />
              </div>
              <div className="textPart bg-white p-3">
                <div>
                  <p>Universaloutfit</p>
                  <p>
                  {item.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">{item.price}</p>
                  <p className="line-through opacity-50">₹1999</p>
                  <p className="text-green-600 font-semibold">70% off</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pricepage;
