"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[46%] -right-4 z-10  text-6xl cursor-pointer  "
      onClick={onClick}
    >
      ›
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[46%] -left-4 z-10 text-6xl cursor-pointe"
      onClick={onClick}
    >
      ‹
    </div>
  );
};

const Location = () => {
  const officeLocations = [
    {
      country: "Canada",
      officeType: "Registered Office Canada",
      address:
        "605 East Keith Road, North Vancouver, British Columbia V7L 1W4, Canada",
      email: "info@moveitsolution.com",
      phone: "+16725143993",
      imageSrc: "/Images/img/canada.webp",
    },
    {
      country: "Delhi",
      officeType: "Registered Head Office Delhi",
      address:
        "Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)",
      email: "info@moveitsolution.com",
      phone: "+91-7056997000",
      imageSrc: "/Images/img/Delhi.webp",
    },
    {
      country: "Navi Mumbai",
      officeType: "Registered Office Navi Mumbai",
      address:
        "Sco No: 1, Shiv Shankar Tower, Sector 20, Airoli, Navi Mumbai (400708)",
      email: "info@moveitsolution.com",
      phone: "+91-7056997000",
      imageSrc: "/Images/img/Mumbai.webp",
    },
    {
      country: "India",
      officeType: "Registered Office Delhi",
      address:
        " Sco No: 145, Ground Floor, SLV Layout, Near SBI Bank, Delhi (560099)",
      email: "info@moveitsolution.com",
      phone: " +91-7056997000",
      imageSrc: "/Images/img/bng.webp",
    },
    {
      country: "India",
      officeType: "Registered Office In Jaipur",
      address:
        " 232, 21st East Street, Kamaraj Nagar, Jaipur, Rajasthan 303030",
      email: "info@moveitsolution.com",
      phone: " +91-7056997000",
      imageSrc: "/Images/img/jpr.webp",
    },
    {
      country: "India",
      officeType: "Registered Office In Hyderabad",
      address:
        " 1-8-29, Ganesh Colony, Near CMR School, Old Bowenpally, Hyderabad (560076)",
      email: "info@moveitsolution.com",
      phone: " +91-7056997000",
      imageSrc: "/Images/img/hbd.webp",
    },
    {
      country: "India",
      officeType: "Registered Office In Pune",
      address:
        " 1-8-29, Ganesh Colony, Near CMR School, Old Bowenpally, Hyderabad (560076)",
      email: "info@moveitsolution.com",
      phone: " +91-7056997000",
      imageSrc: "/Images/img/pune.webp",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
    nextArrow: <NextArrow />, // Use custom NextArrow component
    prevArrow: <PrevArrow />, // Use custom PrevArrow component
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#ffecec] shadow-location mx-36 max-sm:mx-0 max-md:mx-20 mt-20 py-2 text-center">
        <h2 className="text-3xl m-2 font-bold">Our Office Locations</h2>
      </div>

      <Slider
        {...sliderSettings}
        className="my-10  mx-0 lg:mx-28 overflow-hidden"
      >
        {officeLocations.map((location, index) => (
          <div key={index} className="p-0 lg:p-2">
            <div className="w-auto lg:w-[400px]  bg-white hover:shadow-md mx-auto border-b-4 border-b-[#b0bdff]  rounded-lg custom-shadow">
              <div className="bg-[#fbfbfb] text-center">
                <Image
                  width={700}
                  height={700}
                  src={location.imageSrc}
                  alt={location.country}
                  className="img-fluid h-[200px] w-full rounded-t-lg d-block"
                />
              </div>
              <div className="p-5">
                <h4 className="text-2xl font-bold ">{location.country}</h4>
                <h6 className="mt-2 text-base font-bold ">
                  {location.officeType}
                </h6>
                <p className="text-md text-[#6a6a8e] mt-4 flex items-center gap-3 text-justify">
                  <i class="bx bx-location-plus"></i> {location.address}
                </p>
                <ul className="text-md text-[#6a6a8e] mt-4">
                  <li>
                    <Link
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-3"
                    >
                      <i class="bx bx-envelope"></i> {location.email}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`tel:${location.phone}`}
                      className="flex items-center gap-3 mt-2"
                    >
                      <i class="bx bx-phone-call"></i> {location.phone}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Location;
