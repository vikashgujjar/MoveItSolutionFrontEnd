"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getBlogPost } from "@/app/lib/blogPosts";

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const BlogPostContent = ({ slug, initialPost }) => {
  const [post, setPost] = useState(initialPost);

  useEffect(() => {
    let cancelled = false;
    getBlogPost(slug).then((data) => {
      if (!cancelled && data) setPost(data);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!post) return null;

  return (
    <div className="blog-details-desc">
      {post.featured_image && (
        <div className="article-image">
          <Image
            src={post.featured_image}
            alt={post.title}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="article-content mt-4">
        <div className="entry-meta">
          <ul className="block lg:flex gap-4 text-sm">
            <li>
              <span className="text-[#fa4612]">Posted On:</span>{" "}
              <span className="text-[#666666]">{formatDate(post.published_at)}</span>
            </li>
            {post.author && (
              <li>
                <span className="text-[#fa4612]">Posted By:</span>{" "}
                <span className="text-[#666666]">{post.author}</span>
              </li>
            )}
            {post.category && (
              <li>
                <span className="text-[#fa4612]">Category:</span>{" "}
                <span className="text-[#666666]">{post.category}</span>
              </li>
            )}
          </ul>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold my-4">{post.title}</h1>
        {post.content && (
          <div
            className="mb-4 text-base text-justify text-[#212529] leading-[1.8] whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPostContent;
