import Link from "next/link";
import React from "react";
import BlogLeft from "../Components/BlogLeft";
import BlogList from "../Components/BlogList";

export const metadata = {
  title: "Blog | Move It Solutions",
  description: "Check out move it solution's latest blog update for international packing and moving services.",
};

const page = () => {
  return (
    <>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Blog</li>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 lg:gap-0 px-0 md:px-10 lg:px-28 my-20">
        <div className="widget-area widget-area-left w-full lg:w-1/3 px-3 lg:order-1 order-2">
          <BlogLeft />
        </div>
        <div className="blog-details-desc w-full lg:w-2/3 px-3 lg:order-2 order-1">
          <BlogList />
        </div>
      </div>
    </>
  );
};

export default page;
