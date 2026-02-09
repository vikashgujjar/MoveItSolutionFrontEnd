"use client";
import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logos = [
    "big-bazaar",
    "godrej",
    "ibm",
    "icici-bank",
    "justdial",
    "ntpc",
    "philips",
    "samsung",
    "vodafone",
    "yes-bank",
  ];

  return (
    <div className="px-5 md:px-10 lg:px-32 overflow-hidden w-full mx-auto logo-brand pb-4">
      <SlickSlider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-2">
            <div className="flex justify-center items-center px-2">
              <Image
               width={700}
               height={700}
                className="bg-white custom-shadow my-5 lg:my-8 mx-2 py-5 px-5 lg:px-12 transition-all duration-500 text-center"
                src={`/Images/logo-slider/${logo}.webp`}
                alt={logo.replace(/-/g, " ")}
              />
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default LogoSlider;
