
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {MainCaroseldata} from "./MainCaroseldata.js";


function MainCarosel() {
    const items = MainCaroseldata.map((data) => {
        console.log(data.image)
      return (
        <img key={data.id}
          className="cursor-pointer"
          role="presentation"
          src={data.image}
          alt=""
          style={{ width: '100%', height: 'auto'}}
        />
      );
    });
  return (
    <div>
    <div>
      <AliceCarousel
      items={items}
      autoPlay={true}
      disableButtonsControls
      autoPlayInterval={3000}
      infinite
    />
    </div>
    </div>
  );
}

export default MainCarosel;
