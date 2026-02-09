import React from "react";
import Location from "../contact/OfficeLocations";
import Link from "next/link";

const page = () => {
  return (
    <>
      <head>
        <title>Our Company Registered Branches | Move It Solution
        </title>
        <meta
          name="description"
          content="Choose Move It Solution, a leading international moving company with branches in Canada, Delhi, and Navi Mumbai. Visit our website for more information!"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 text-center w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Contact Us</li>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </>
  );
};

export default page;
