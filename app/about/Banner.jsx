import Link from "next/link";
import React from "react";

const banner = () => {
  return (
    <>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">About Us</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
