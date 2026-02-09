import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      author: "Arun Smith",
      category: "Delivery",
      date: "June 30, 2021",
      title: "Simplify Your International House Shifting with Move It Solution",
      imageUrl: "/Images/blog/International-House-Shifting.webp",
      link: "simplify-your-international-house-shifting-with-move-it-solution",
    },
    {
      author: "Amith Klev",
      category: "Engineering",
      date: "Sep 5, 2021",
      title: "The Unbeatable Choice for International Packers and Movers",
      imageUrl: "/Images/blog/International-Packers-and-Movers.webp",
      link: "the-unbeatable-choice-for-international-packers-and-movers ",
    },
    {
      author: "Joney",
      category: "Transport",
      date: "Oct 10, 2020",
      title: "Transforming International Courier Services",
      imageUrl: "/Images/blog/International-Courier-Services.webp",
      link: "transforming-international-courier-services",
    },
  ];
  return (
    <>
      <section className="py-8 sm:py-12 bg-white px-4 sm:px-8 lg:px-32">
        <div className="container mx-auto text-center">
          <h3 className="text-[#fa4612] font-semibold">BLOGS & MORE</h3>
          <h2 className="text-xl sm:text-[24px] md:text-[40px] leading-[50px] font-bold mt-2 mb-6 md:mb-10 underline-animation left">
            Get every single update here.
          </h2>
         
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div key={index} className="card-second">
                <Image
                  width={700}
                  height={700}
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="bg-white rounded-md shadow-lg text-black h-max lg:h-[170px] mx-[5px] p-5 relative top-[-10px] transition-all duration-500 z-50">
                  <p className="text-sm text-red-500 text-left">
                    By: {blog.author} / {blog.category} / {blog.date}
                  </p>
                  <h3 className="text-md sm:text-lg font-semibold mt-2 mb-4 text-left">
                    {blog.title}
                  </h3>
                  <Link
                    href={blog.link}
                    className="text-[#fa4612] font-semibold flex items-center"
                  >
                    Read More <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
