// TestimonialSlider.js
"use client";
import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Atul Rao",
      location: "Delhi",
      message:
        "Move It Solution Packers and Movers rates have been easy on our pocket. We feel very much convinced with their move. Their professionalism has impressed us. Excellent work.",
      rating: 5,
      image: "/Images/testimonial/1.webp",
    },
    {
      name: "Suman Smith",
      location: "Delhi",
      message:
        "It is my first move while I contacted the Move It Solution Movers and Packers in Delhi to Calicut. Their services are really good as expected and the charges are also a reasonable one.",
      rating: 5,
      image: "/Images/testimonial/3.webp",
    },
    {
      name: "Akram Khan",
      location: "Delhi",
      message:
        "I work in a service industry too and I can stamp with guarantee that your company is the best and your workforce along with supervisors are asset to your company. Your company has got permanent customer for life",
      rating: 4,
      image: "/Images/testimonial/4.webp",
    },
    {
      name: "Anuj Verma",
      location: "Delhi",
      message:
        "Thank you Move It Solution Packers for helping me t relocate from Delhi to noida. I was very much nervus about shifting but you did very well. Keep it up.",
      rating: 5,
      image: "/Images/testimonial/5.webp",
    },
    {
      name: "Amit Sharma",
      location: "Mumbai",
      message:
        "Move It Solution Packers and Movers is Great Packers and Movers Company in Mumbai. We provide moving services across Mumbai wide. We are trying to satisfy our customers with our packing services.",
      rating: 5,
      image: "/Images/testimonial/6.webp",
    },
    {
      name: "Subham Sharma",
      location: "Mumbai",
      message:
        "India's Top Packers Movers Services Provider. The packing of the goods was awesome and also they have co-ordinated in minimal time. They provide excellent door to door delivery with good condition of the package.",
      rating: 4,
      image: "/Images/testimonial/7.webp",
    },
    {
      name: "Ankit Trivedi",
      location: "Delhi",
      message:
        "Thanks, Move It Solution packers and movers We have recently shifted Delhi to Durgapur (WB). Fantastic service. Thanks again.",
      rating: 4,
      image: "/Images/testimonial/8.webp",
    },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-32 py-10 text-center overflow-hidden">
      <h2 className="text-orange-500">CLIENT'S TESTIMONIALS</h2>
      <h3 className="text-2xl lg:text-[40px] left underline-animation mt-2 mb-10">
        What they say about us
      </h3>
      <SlickSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2 lg:p-4">
            <div className="bg-white custom-shadow  p-6 flex flex-col text-left h-max lg:h-[260px] ">
              <div className="flex items-center gap-5 mb-4">
                <div className="">
                  <Image
                    width={700}
                    height={700}
                    className="w-16 h-16 rounded-full mb-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold ">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 mb-6">
                {testimonial.message}
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#fa4612]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Testimonial;
