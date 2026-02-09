import Link from "next/link";
import React from "react";
import BlogLeft from "../Components/BlogLeft";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  const blogs = [
    {
      author: "Arun Smith",
      category: "Delivery",
      date: "June 30, 2021",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Simplify Your International House Shifting with Move It Solution",
      imageUrl: "/Images/blog/International-House-Shifting.webp",
      link: "/simplify-your-international-house-shifting-with-move-it-solution",
    },
    {
      author: "Amith Klev",
      category: "Engineering",
      date: "Sep 5, 2021",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "The Unbeatable Choice for International Packers and Movers",
      imageUrl: "/Images/blog/International-Packers-and-Movers.webp",
      link: "/the-unbeatable-choice-for-international-packers-and-movers",
    },
    {
      author: "Joney",
      category: "Transport",
      date: "Oct 10, 2020",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Transforming International Courier Services",
      imageUrl: "/Images/blog/International-Courier-Services.webp",
      link: "/transforming-international-courier-services",
    },
    {
      author: "Laura Kim",
      category: "Logistics",
      date: "Nov 12, 2021",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Optimizing Logistics for Cross-Country Moves",
      imageUrl: "/Images/blog/7.webp",
      link: "/blog-view",
    },
    {
      author: "Paul Simon",
      category: "Packaging",
      date: "Dec 1, 2021",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Eco-Friendly Packing Solutions for International Shipping",
      imageUrl: "/Images/blog/8.webp",
      link: "/blog-view",
    },
    {
      author: "Rita Patel",
      category: "Customer Service",
      date: "Jan 15, 2022",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Enhancing Customer Experience in International Moving",
      imageUrl: "/Images/blog/9.webp",
      link: "/blog-view",
    },
    {
      author: "David Liu",
      category: "Technology",
      date: "Feb 20, 2022",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "How Technology is Transforming International Relocation",
      imageUrl: "/Images/blog/10.webp",
      link: "/blog-view",
    },
    {
      author: "Anika Bose",
      category: "Safety",
      date: "Mar 5, 2022",
      para: "Streamline your international house shifting process effortlessly with Move It Solution efficient and reliable services. Simplify the move today!",
      title: "Safety Tips for Moving Valuables Internationally",
      imageUrl: "/Images/blog/11.webp",
      link: "/blog-view",
    },
  ];

  return (
    <>
      <head>
        <title>Blog | Move It Solutions </title>
        <meta
          name="description"
          content="Check out move it solution's latest blog update for international packing and moving services."
        />
      </head>

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
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <div key={index} className="card-second">
                <Link href={blog.link}>
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={900}
                    height={800}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </Link>
                <div className="bg-white rounded-md shadow-lg text-black h-max lg:h-[240px] mx-[5px] p-5 relative top-[-10px] transition-all duration-500 z-50">
                  <p className="text-sm text-left text-[#7a7e9a]">
                    <span className="text-red-500 "> By: {blog.author} </span>/{" "}
                    {blog.category} / {blog.date}
                  </p>
                  <Link href={blog.link}>
                    <h3 className="text-md sm:text-lg font-semibold my-2 text-left">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-sm leading-7">{blog.para} </p>
                  <Link
                    href={blog.link}
                    className="text-[#fa4612] text-sm mt-2 flex items-center"
                  >
                    Read More{" "}
                    <span className="ml-2 border border-[#fa4612] hover:bg-[#fa4612] hover:text-white rounded-full p-1">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="page-navigation-area flex justify-center mt-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination flex gap-2">
                <li className="page-item">
                  <Link
                    href="#"
                    className="page-link page-links flex items-center justify-center w-10 h-10  bg-white custom-shadow hover:bg-[#fa4612] hover:text-white"
                  >
                    <i className="bx bx-chevrons-left"></i>
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    href="#"
                    className="page-link flex items-center justify-center custom-shadow w-10 h-10  bg-[#fa4612] text-white"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    href="#"
                    className="page-link flex items-center justify-center w-10 h-10  bg-white custom-shadow hover:bg-[#fa4612] hover:text-white"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    href="#"
                    className="page-link flex items-center justify-center w-10 h-10  bg-white custom-shadow hover:bg-[#fa4612] hover:text-white"
                  >
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    href="#"
                    className="page-link page-links flex items-center justify-center w-10 h-10  bg-white custom-shadow hover:bg-[#fa4612] hover:text-white"
                  >
                    <i className="bx bx-chevrons-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
