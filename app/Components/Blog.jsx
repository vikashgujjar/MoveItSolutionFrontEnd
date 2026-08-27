"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/app/lib/blogPosts";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getBlogPosts().then((data) => {
      if (!cancelled && Array.isArray(data)) {
        setBlogs(data.slice(0, 3));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (blogs.length === 0) {
    return null;
  }

  return (
    <>
      <section className="py-8 sm:py-12 bg-white px-4 sm:px-8 lg:px-32">
        <div className="container mx-auto text-center">
          <h3 className="text-[#fa4612] font-semibold">BLOGS & MORE</h3>
          <h2 className="text-xl sm:text-[24px] md:text-[40px] leading-[50px] font-bold mt-2 mb-6 md:mb-10 underline-animation left">
            Get every single update here.
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div key={blog.slug} className="card-second">
                <Image
                  width={700}
                  height={700}
                  src={blog.featured_image || "/Images/blog/7.webp"}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="bg-white rounded-md shadow-lg text-black h-max lg:h-[170px] mx-[5px] p-5 relative top-[-10px] transition-all duration-500 z-50">
                  <p className="text-sm text-red-500 text-left">
                    By: {blog.author || "Move It Solution"} / {blog.category || "General"}
                  </p>
                  <h3 className="text-md sm:text-lg font-semibold mt-2 mb-4 text-left">
                    {blog.title}
                  </h3>
                  <Link
                    href={`/blog/${blog.slug}`}
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
