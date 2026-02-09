"use client";
import React from "react";
import FaqSecond from "../Components/FaqSecond";
import Link from "next/link";

const page = () => {
  return (
    <>
      <head>
        <title>
          Frequently Asked Questions | Move It Solution with Packers and Movers
        </title>
        <meta
          name="description"
          content="Looking for answers to some frequently asked questions? Find all the information you need with Move It Solution's comprehensive FAQ page. Visit us now!"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10 mb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">
                Frequently Asked Questions (FAQ)
              </li>
            </div>
          </div>
        </div>
      </div>
      <FaqSecond />
    </>
  );
};

export default page;
