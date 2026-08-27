"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogPosts } from "@/app/lib/blogPosts";

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const BlogLeft = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getBlogPosts().then((data) => {
      if (!cancelled && Array.isArray(data)) {
        setPosts(data.slice(0, 4));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <aside className="sticky top-32">
        <div className="widget mb-6 custom-shadow bg-white">
          <h3
            className="widget-title relative text-[20px] mb-0 bg-[#24416b] px-5 py-2 text-white capitalize"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
          >
            Search Now
          </h3>
          <div className="post-wrap p-5">
            <form className="search-form relative ">
              <label className="sr-only">Search for:</label>
              <input
                type="search"
                className="bg-transparent h-12 p-1.5 pl-4 border border-gray-200 focus:border-[#fa4612] focus:outline-none w-full block outline-none transition duration-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 bottom-0 h-12 w-12 border-none text-white bg-[#fa4612]  transition duration-500 outline-none cursor-pointer"
              >
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        {posts.length > 0 && (
          <section className="widget widget-peru-posts-thumb mb-6 custom-shadow">
            <h3
              className="widget-title relative text-[20px] mb-0 bg-[#24416b] px-5 py-2 text-white capitalize"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
            >
              Popular Posts
            </h3>

            <div className="post-wrap p-5">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`item flex pb-2.5 ${
                    index !== posts.length - 1
                      ? "border-b border-[#efefef] mb-2.5"
                      : ""
                  }`}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <p
                      className="thumb w-16 h-16 bg-gray-300 rounded mr-4 bg-cover bg-center"
                      style={
                        post.featured_image
                          ? { backgroundImage: `url('${post.featured_image}')` }
                          : undefined
                      }
                    >
                      <span className="fullimage cover" role="img"></span>
                    </p>
                  </Link>
                  <div className="info">
                    <time
                      dateTime={post.published_at || ""}
                      className="search-field text-[13px] text-[#929292] mb-1 block "
                    >
                      {formatDate(post.published_at)}
                    </time>
                    <h4 className="usmall text-sm">
                      <Link href={`/blog/${post.slug}`} className="text-[#474c40]">
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Archives */}
        {/* <section className="widget widget_categories mb-6 custom-shadow">
          <h3
            className="widget-title relative text-[20px] mb-0 bg-[#24416b] px-5 py-2 text-white capitalize"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
          >
            Archives
          </h3>
          <ul className="post-wrap p-5">
            {[
              { month: "January", year: "2021" },
              { month: "February", year: "2021" },
              { month: "March", year: "2021" },
              { month: "April", year: "2021" },
              { month: "May", year: "2021" },
              { month: "June", year: "2021" },
            ].map(({ month, year }, index, arr) => (
              <li
                key={index}
                className={`relative pb-2.5  pl-[18px] before:absolute before:left-0 before:top-1 before:w-[7px] before:h-[7px] before:bg-[#fa4612] before:content-['']  ${
                  index !== arr.length - 1
                    ? "border-b border-[#efefef] mb-2.5"
                    : ""
                }`}
              >
                <Link
                  href="/news-left-sidebar"
                  passHref
                  className="flex justify-between text-[#666666] text-sm"
                >
                  <p className="">{month}</p>
                  <span className="">{year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Categories */}
        {/* <section className="widget widget_categories mb-6 custom-shadow">
          <h3
            className="widget-title relative text-[20px] mb-0 bg-[#24416b] px-5 py-2 text-white capitalize"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
          >
            Categories
          </h3>

          <ul className="post-wrap p-5">
            {[
              { month: "Delivery", year: "(10)" },
              { month: "Engineering", year: "(20)" },
              { month: "Transport", year: "(10)" },
              { month: "Air Flight", year: "(12)" },
              { month: "Road Flight", year: "(16)" },
              { month: "Prevoz", year: "(17)" },
            ].map(({ month, year }, index, arr) => (
              <li
                key={index}
                className={`relative pb-2.5  pl-[18px] before:absolute before:left-0 before:top-1 before:w-[7px] before:h-[7px] before:bg-[#fa4612] before:content-['']  ${
                  index !== arr.length - 1
                    ? "border-b border-[#efefef] mb-2.5"
                    : ""
                }`}
              >
                <Link
                  href="/news-left-sidebar"
                  passHref
                  className="flex justify-between text-[#666666] text-sm"
                >
                  <p className="">{month}</p>
                  <span className="">{year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Tags */}
        {/* <section className="widget widget_tag_cloud custom-shadow">
          <h3
            className="widget-title relative text-[20px] mb-0 bg-[#24416b] px-5 py-2 text-white capitalize"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
          >
            Tags
          </h3>

          <div className="tagcloud p-5">
            {[
              { name: "transportation", count: 3 },
              { name: "Delivery", count: 3 },
              { name: "Engineering", count: 2 },
              { name: "Air Flight", count: 1 },
              { name: "Road Flight", count: 1 },
              { name: "Prevoz", count: 1 },
            ].map((tag, index) => (
              <Link
                href={`news-left-sidebar.html#`}
                key={index}
                className="inline-block text-gray-600 font-normal text-sm py-2 px-3 border border-dashed border-gray-200 mt-2 mr-2 hover:bg-[#fa4612] hover:text-white"
              >
                {tag.name} ({tag.count})
              </Link>
            ))}
          </div>
        </section> */}
      </aside>
    </>
  );
};

export default BlogLeft;
