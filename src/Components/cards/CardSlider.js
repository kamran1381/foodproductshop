import React, { useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cardslider.css'
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const arrowStyle = {
    ...style,
    display: "block",
    // background: isHovered ? "blue" : "gray", // Change the background color on hover
  };

  return (
    <div
      className={className}
      style={arrowStyle}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;



  const arrowStyle = {
    ...style,
    display: "block",
  };

  return (
    <div
      className={className}
      style={arrowStyle}
      onClick={onClick}

    />
  );
}

export default function CardSlider({ topProducts }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {topProducts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.Description}
            image={item.img}
            price={item.price}
          ></Card>
        ))}
      </Slider>
    </div>
  );
}
