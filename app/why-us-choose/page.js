"use client"
import React from "react";
import Chooseus from "../Components/chooseus";
import Link from "next/link";
import WeOffer from "../Components/WeOffer";
import TeamMember from "../Components/TeamMember";
import Image from "next/image";

const page = () => {
  return (
    <>
      <head>
        <title>Why Choose Us | Move It Solution with Packers and Movers</title>
        <meta
          name="description"
          content=" Choose Move It Solution for efficient and professional services. We are committed to shaping the future of transportation, smoother and more efficient.Call us!"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap"> Why Us Choose</li>
            </div>
          </div>
        </div>
      </div>
      <Chooseus />

      <div className="flex flex-col md:flex-row bg-white text-black">
        <div className="w-full md:w-2/5 ">
          <Image
            width={700}
            height={700}
            src="/Images/img/International-transportation-services.webp"
            alt="Moving Boxes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/5 bg-[#24416b] text-white p-10 border border-gray-300">
          <h2 className="text-xl lg:text-4xl text-white border-b border-[#19345a] p-5 font-bold mb-0 lg:mb-14">
            Keep safe your products with prevoz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="flex flex-col items-center border-b border-r-0 lg:border-r border-[#19345a]  p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/delivery.webp"
                className="w-12 h-auto mb-2"
                alt="Fast & Efficient Delivery"
              ></Image>
              <p className="text-center text-xl font-bold">
                Fast & <br className="hidden lg:block" /> Efficient{" "}
                <br className="hidden lg:block" /> Delivery
              </p>
            </div>
            <div className="flex flex-col items-center border-b border-r-0 lg:border-r border-[#19345a] p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/lock.webp"
                className="w-12 h-auto mb-2"
                alt="Security For Cargo Tools"
              ></Image>
              <p className="text-center text-xl font-bold">
                Security For
                <br className="hidden lg:block" /> Cargo Tools
              </p>
            </div>
            <div className="flex flex-col items-center border-b border-[#19345a] p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/stopwatch.webp"
                className="w-12 h-auto mb-2"
                alt="Real-Time Tracking"
              ></Image>
              <p className="text-center text-xl font-bold">
                Real-Time <br className="hidden lg:block" /> Tracking
              </p>
            </div>
            <div className="flex flex-col items-center border-b lg:border-b-0 border-[#19345a]  p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/pay.webp"
                className="w-12 h-auto mb-2"
                alt="Easy Payment Methods"
              ></Image>
              <p className="text-center text-xl font-bold">
                Easy Payment <br className="hidden lg:block" /> Methods
              </p>
            </div>
            <div className="flex flex-col items-center border-b lg:border-b-0 border-x-0 lg:border-x border-[#19345a] p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/warehouse-time.webp"
                className="w-12 h-auto mb-2"
                alt="24/7 Hours Support"
              ></Image>
              <p className="text-center text-xl font-bold">
                24/7 Hours <br className="hidden lg:block" /> Support
              </p>
            </div>
            <div className="flex flex-col items-center border-b lg:border-b-0 border-[#19345a]  p-6 lg:p-[45px]">
              <Image
                width={700}
                height={700}
                src="/Images/img/warehouse.webp"
                className="w-12 h-auto mb-2"
                alt="Warehouse Storage"
              ></Image>
              <p className="text-center text-xl font-bold">
                Warehouse <br className="hidden lg:block" /> Storage
              </p>
            </div>
          </div>
        </div>
      </div>

      <TeamMember />
      <WeOffer />
    </>
  );
};

export default page;
