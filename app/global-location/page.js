import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { FaEnvelope, FaLock, FaPhoneAlt, FaSkype, FaMapMarkerAlt } from "react-icons/fa";
const FormQuerry = dynamic(() => import("../Components/Form"), { ssr: false });

export const metadata = {
  title: "Global Location | Move It Solution",
  description: "Are you looking for reliable global moving services? Move It Solution is your trustworthy partner for seamless relocations worldwide. Contact us today!",
};

const locations = [
  { name: "Austria", url: "/contact" },
  { name: "Belgium", url: "/contact" },
  { name: "Canada", url: "/contact" },
  { name: "United States", url: "/contact" },
  { name: "Denmark", url: "/contact" },
  { name: "China", url: "/contact" },
  { name: "Spain", url: "/contact" },
  { name: "Turkey", url: "/contact" },
  { name: "United Kingdom", url: "/contact" },
  { name: "Germany", url: "/contact" },
  { name: "Russian Federation", url: "/contact" },
  { name: "Malaysia", url: "/contact" },
  { name: "Mexico", url: "/contact" },
  { name: "Morocco", url: "/contact" },
  { name: "Maldives", url: "/contact" },
  { name: "Hong Kong SAR", url: "/contact" },
  { name: "Ukraine", url: "/contact" },
  { name: "Thailand", url: "/contact" },
  { name: "Saudi Arabia", url: "/contact" },
  { name: "Greece", url: "/contact" },
  { name: "Poland", url: "/contact" },
  { name: "Macao SAR, China", url: "/contact" },
  { name: "Netherlands", url: "/contact" },
  { name: "Singapore", url: "/contact" },
  { name: "Hungary", url: "/contact" },
  { name: "Croatia", url: "/contact" },
  { name: "Korea/ Rep.", url: "/contact" },
  { name: "Egypt", url: "/contact" },
  { name: "Czech Republic", url: "/contact" },
  { name: "Switzerland", url: "/contact" },
  { name: "South Africa", url: "/contact" },
  { name: "Indonesia", url: "/contact" },
  { name: "Iceland", url: "/contact" },
  { name: "Italy", url: "/contact" },
  { name: "Ireland", url: "/contact" },
  { name: "Iran", url: "/contact" },
  { name: "Iraq", url: "/contact" },
  { name: "Romania", url: "/contact" },
  { name: "Portugal", url: "/contact" },
  { name: "Bahrain", url: "/contact" },
  { name: "Bulgaria", url: "/contact" },
  { name: "Japan", url: "/contact" },
  { name: "Australia", url: "/contact" },
  { name: "Brazil", url: "/contact" },
  { name: "Sweden", url: "/contact" },
  { name: "Norway", url: "/contact" },
  { name: "Finland", url: "/contact" },
  { name: "Bhutan", url: "/contact" },
];

const locationsasia = [
  { name: "Agra", url: "/contact" },
  { name: "Ahmedabad", url: "/contact" },
  { name: "Bhubaneswar", url: "/contact" },
  { name: "Bhopal", url: "/contact" },
  { name: "Bikaner", url: "/contact" },
  { name: "Calicut", url: "/contact" },
  { name: "Chennai", url: "/contact" },
  { name: "Dehradun", url: "/contact" },
  { name: "Faridabad", url: "/contact" },
  { name: "Goa", url: "/contact" },
  { name: "Gurgaon", url: "/contact" },
  { name: "Hyderabad", url: "/contact" },
  { name: "Jodhpur", url: "/contact" },
  { name: "Kolkata", url: "/contact" },
  { name: "Lucknow", url: "/contact" },
  { name: "Navimumbai", url: "/packers-and-movers-in-mumbai" },
  { name: "Patna", url: "/contact" },
  { name: "Pune", url: "/contact" },
  { name: "Raipur", url: "/contact" },
  { name: "Surat", url: "/contact" },
  { name: "Siliguri", url: "/contact" },
  { name: "Tirupur", url: "/contact" },
  { name: "Udaipur", url: "/contact" },
  { name: "Vapi", url: "/contact" },
  { name: "Visakhapatnam", url: "/contact" },
  { name: "Delhi", url: "/packers-and-movers-in-delhi" },
  { name: "Chandigarh", url: "/packers-and-movers-in-chandigarh" },
  { name: "Mohali", url: "/packers-and-movers-in-mohali" },
  { name: "Panchkula", url: "/packers-and-movers-in-panchkula" },
  { name: "Himachal Pradesh", url: "/packers-and-movers-in-himachal" },
  { name: "Shimla", url: "/packers-and-movers-in-shimla" },
  { name: "Bangalore", url: "/packers-and-movers-in-bangalore" },
];

const LocationList = () => {
  return (
    <>
      {/* <FormModal title="Get a Quote Now" /> */}
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Global Location</li>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20  mx-5 lg:mx-28">
        <p className=" text-[#fa4612] text-center uppercase">Global Location</p>
        <h2 className="text-2xl lg:text-[40px] text-nowrap mb-8 text-center">
          Europe Country
        </h2>
        <div className="global-location-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {locations.map((location, index) => (
            <div
              className="single-location relative bg-white custom-shadow rounded-md overflow-hidden transition-all duration-500 ease-in-out transform group"
              key={index}
            >
              <Link
                href={location.url}
                className="flex items-center justify-center py-[25px] relative z-10"
              >
                <i className="bx bx-location-plus text-[#fa4612] group-hover:text-white text-2xl mr-3"></i>
                <span className="text-base font-bold  text-[#fa4612] group-hover:text-white">
                  {location.name}
                </span>
              </Link>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <FormQuerry />
      <div className="mb-20  mx-5 lg:mx-28">
        <p className=" text-[#fa4612] text-center mt-20 uppercase">
          Global Location
        </p>
        <h2 className="text-2xl lg:text-[40px] text-center mb-10 mt-2 underline-animation left">
          Asia Country
        </h2>
        <div className="global-location-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {locationsasia.map((location, index) => (
            <div
              className="single-location relative bg-white custom-shadow rounded-md overflow-hidden transition-all duration-500 ease-in-out transform  group"
              key={index}
            >
              <Link
                href={location.url}
                className="flex items-center justify-center py-[25px] relative z-10"
              >
                <i className="bx bx-location-plus text-[#fa4612] group-hover:text-white text-2xl mr-3"></i>
                <span className="text-base font-bold  text-[#fa4612] group-hover:text-white">
                  {location.name}
                </span>
              </Link>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationList;
