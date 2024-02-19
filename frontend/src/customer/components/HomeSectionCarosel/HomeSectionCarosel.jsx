import HomeSectionCart from "../HomeSectionCart/HomeSectionCart";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./style.css";

import "./homeSectionCarsosel.css";
// import { useState } from "react";
function HomeSectionCarosel({ data }) {
  const items = data.map((item, index) => (
    <HomeSectionCart product={item} key={index} />
  ));

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="border">
      <div className="relative p-6  overflow-hidden">
        <Slider {...settings}>{items}</Slider>
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
