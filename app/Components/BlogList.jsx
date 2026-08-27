"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getBlogPosts } from "@/app/lib/blogPosts";

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getBlogPosts().then((data) => {
      if (!cancelled && Array.isArray(data)) {
        setPosts(data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((blog) => {
        const href = `/blog/${blog.slug}`;
        return (
          <div key={blog.slug} className="card-second">
            <Link href={href}>
              <Image
                src={blog.featured_image || "/Images/blog/7.webp"}
                alt={blog.title}
                width={900}
                height={800}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </Link>
            <div className="bg-white rounded-md shadow-lg text-black h-max lg:h-[240px] mx-[5px] p-5 relative top-[-10px] transition-all duration-500 z-50">
              <p className="text-sm text-left text-[#7a7e9a]">
                <span className="text-red-500"> By: {blog.author || "Move It Solution"} </span>/{" "}
                {blog.category || "General"} / {formatDate(blog.published_at)}
              </p>
              <Link href={href}>
                <h3 className="text-md sm:text-lg font-semibold my-2 text-left">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-sm leading-7">{blog.excerpt}</p>
              <Link
                href={href}
                className="text-[#fa4612] text-sm mt-2 flex items-center"
              >
                Read More{" "}
                <span className="ml-2 border border-[#fa4612] hover:bg-[#fa4612] hover:text-white rounded-full p-1">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
