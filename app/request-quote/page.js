import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Form from "../Components/Form";
import FaqSecond from "../Components/FaqSecond";

const page = () => {
  return (
    <>
      <head>
        <title>Our Popular Services | Move It Solution </title>
        <meta
          name="description"
          content="Get Move It Solution popular services at a reasonable price. We offer international courier services, international move, and freight delivery services. Visit us!"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">Request A Quote</li>
            </div>
          </div>
        </div>
      </div>

      <Form />

      <FaqSecond />
    </>
  );
};

export default page;
