import Link from "next/link";
import React from "react";
import BlogLeft from "../Components/BlogLeft";
import Image from "next/image";

const page = () => {
  return (
    <>
      <head>
        <title>Blog View | Move It Solution</title>
        <meta
          name="description"
          content="Optimize your supply chain visibility and transportation management with Move It Solution. Experience a cutting-edge platform for comprehensive solutions."
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap"> Blogs View</li>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:flex mx-0 lg:mx-28  my-20">
        <div className="blog-details-desc w-full lg:w-2/3 px-3">
          <div className="blog-details-desc">
            <div className="article-image">
              <Image
                src="/Images/blog/International-warehouse-services.webp"
                alt="International warehouse services"
                width={1200} // Set appropriate width
                height={800} // Set appropriate height
              />
            </div>
            <div className="article-content mt-4">
              <div className="entry-meta">
                <ul className="block lg:flex gap-4 text-sm">
                  <li>
                    <span className="text-[#fa4612]">Posted On:</span>{" "}
                    <Link href="" className="text-[#666666] ">
                      January 31 , 2021
                    </Link>
                  </li>
                  <li>
                    <span className="text-[#fa4612]">Posted By:</span>{" "}
                    <Link href="" className="text-[#666666] ">
                      John Anderson
                    </Link>
                  </li>
                </ul>
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold my-4">
                Supply chain visibility to manage transportation
              </h1>
              <p className="mb-4 text-base text-justify text-[#212529] leading-[1.8]">
                Move It Solution is a cutting-edge platform designed to provide
                comprehensive supply chain visibility, specifically focused on
                managing transportation. With the ever-increasing complexity of
                global logistics networks, it has become crucial for businesses
                to have real-time visibility into their transportation
                processes. Move It Solution offers a robust set of tools and
                features to address this need.
              </p>

              <p className="mb-4 text-base text-justify text-[#212529] leading-[1.8]">
                One key aspect of Move It Solution is its ability to capture and
                integrate data from various sources, including transportation
                carriers, warehousing systems, and IoT-enabled devices. This
                data is then processed and analyzed using advanced algorithms to
                provide valuable insights into the transportation operations.
                From tracking the movement of goods to monitoring key
                performance indicators, the platform offers a holistic view of
                the entire supply chain.
              </p>

              <blockquote className="relative overflow-hidden bg-[#24416b] p-12 text-center z-10 mb-5 mt-5">
                <p className="text-white leading-6 mb-0 italic font-medium text-[17px]">
                  <i
                    className="bx bxs-quote-left"
                    style={{
                      color: "#fa4612",
                      fontSize: "100px",
                      position: "absolute",
                      left: "60px",
                      top: "20px",
                      zIndex: "-1",
                    }}
                  ></i>
                  By leveraging this enhanced visibility, businesses can make
                  informed decisions and optimize their transportation
                  operations. They can proactively identify bottlenecks,
                  streamline routes, and ensure timely delivery of goods.
                  Real-time alerts and notifications enable prompt response to
                  any disruptions or delays, minimizing the impact on the
                  overall supply chain.
                </p>
              </blockquote>

              <p className="mb-4 text-base text-justify text-[#212529] leading-[1.8]">
                Move It Solution also facilitates collaboration and
                communication among all stakeholders involved in the
                transportation process. It provides a centralized platform where
                shippers, carriers, and other partners can exchange information,
                share documents, and coordinate activities. This streamlines
                communication, reduces manual errors, and fosters better
                coordination, leading to increased efficiency and customer
                satisfaction.
              </p>
            </div>

            <div className="article-footer mt-6 flex justify-between items-center">
              <div className="article-tags flex items-center">
                <i className="bx bx-share-alt text-[#fa4612] text-lg"></i>
                <Link
                  href="blog.html#"
                  className="text-[#24416b] hover:text-[#fa4612] font-semibold text-sm ml-2"
                >
                  Share
                </Link>
              </div>
              <div className="article-share">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      href="blog.html#"
                      target="_blank"
                      className="block w-8 h-8 leading-[33px] text-white text-center text-[14px] rounded-full bg-[#fa4612] hover:bg-[#24416b]"
                    >
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog.html#"
                      target="_blank"
                      className="block w-8 h-8 leading-[33px] text-white text-center text-[14px] rounded-full bg-[#fa4612] hover:bg-[#24416b]"
                    >
                      <i className="bx bxl-twitter "></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog.html#"
                      target="_blank"
                      className="block w-8 h-8 leading-[33px] text-white text-center text-[14px] rounded-full bg-[#fa4612] hover:bg-[#24416b]"
                    >
                      <i className="bx bxl-linkedin "></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog.html#"
                      target="_blank"
                      className="block w-8 h-8 leading-[33px] text-white text-center text-[14px] rounded-full bg-[#fa4612] hover:bg-[#24416b]"
                    >
                      <i className="bx bxl-pinterest-alt "></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="post-navigation  mt-6 flex justify-between border-t border-b border-gray-200 py-5">
              <div className="nav-previous text-[#24416b] hover:text-[#fa4612]">
                <Link
                  href="blog.html#"
                  className="flex gap-2 items-center  font-semibold text-sm"
                >
                  <i className="bx bx-left-arrow-alt text-lg"></i> Prev Post
                </Link>
              </div>
              <div className="nav-next text-[#24416b] hover:text-[#fa4612]">
                <Link
                  href=""
                  className="flex gap-2 items-center  font-semibold text-sm"
                >
                  Next Post <i className="bx bx-right-arrow-alt text-lg"></i>
                </Link>
              </div>
            </div>

            <div className="comments-area custom-shadow p-[25px] mt-8">
              <div className="relative">
                <h2 className="text-2xl font-semibold comments-title">
                  2 Comments:
                </h2>
                <span className="absolute h-6 w-[3px] bg-[#fa4612] left-[-25px] top-1/2 transform -translate-y-1/2"></span>
              </div>
              <ol className="comment-list">
                <li className="comment mb-6">
                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body block lg:flex gap-4 items-start  py-4 px-0 lg:px-4 border-b border-gray-200">
                        <Image
                          src="/Images/blog/5.webp"
                          width={50}
                          height={50}
                          className="avatar rounded-full"
                          alt="Steven Smith"
                        />
                        <div>
                          <div className="comment-metadata mb-2 text-sm text-gray-500">
                            <h6 className="fn font-semibold mb-2">
                              John Jones
                            </h6>

                            <Link
                              href=""
                              className="uppercase text-[#666666] text-[11px] hover:text-[#fa4612]"
                            >
                              January 24, 2021 at 10:59 am
                            </Link>
                          </div>

                          <div className="comment-content mb-2 text-justify text-sm text-[#212529] leading-[1.8]">
                            <p>
                              Move It Solution is an outstanding moving service!
                              They arrived on time, handled my belongings with
                              care, and completed the job efficiently. The team
                              was professional and friendly throughout the
                              entire process. I highly recommend their services
                              for anyone in need of a reliable and stress-free
                              moving experience. Thank you, Move It Solution!
                            </p>
                          </div>
                          <div className="reply">
                            <Link
                              href="blog.html#"
                              className="inline-block px-5 py-2 border border-[#ded9d9] hover:bg-[#fa4612] hover:text-white text-[#24416b] rounded-full text-[13px] font-semibold uppercase relative z-10"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Reply to First Comment */}
                      <ol className="children pl-8">
                        <li className="comment mt-4">
                          <div className="comment-body block lg:flex gap-4 items-start  py-4 px-0 lg:px-4 border-b border-gray-200">
                            <Image
                              src="/Images/blog/6.webp"
                              width={50}
                              height={50}
                              className="avatar rounded-full"
                              alt="Steven Smith"
                            />
                            <div>
                              <div className="comment-metadata mb-2 text-sm text-gray-500">
                                <h6 className="fn font-semibold mb-2">
                                  Steven Smith
                                </h6>

                                <Link
                                  href=""
                                  className="uppercase text-[#666666] text-[11px] hover:text-[#fa4612]"
                                >
                                  January 24, 2021 at 10:59 am
                                </Link>
                              </div>

                              <div className="comment-content mb-2 text-justify text-sm text-[#212529] leading-[1.8]">
                                <p>
                                  Move It Solution exceeded my expectations!
                                  Their crew displayed outstanding
                                  professionalism from beginning to end. They
                                  packed and transported my belongings with
                                  utmost care, ensuring everything arrived in
                                  perfect condition. Their efficiency and
                                  friendly demeanor made the entire moving
                                  process smooth and stress-free. I can't thank
                                  Move It Solution enough for their outstanding
                                  service. Highly recommended for anyone seeking
                                  a reliable and hassle-free moving solution.
                                </p>
                              </div>
                              <div className="reply">
                                <Link
                                  href="blog.html#"
                                  className="inline-block px-5 py-2 border border-[#ded9d9] hover:bg-[#fa4612] hover:text-white text-[#24416b] rounded-full text-[13px] font-semibold uppercase relative z-10"
                                >
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>

                    {/* Second Comment */}
                    <li className="comment mt-4">
                      <div className="comment-body block lg:flex gap-4 items-start  py-4 px-0 lg:px-4 border-b border-gray-200">
                        <Image
                          src="/Images/blog/112.webp"
                          width={50}
                          height={50}
                          className="avatar rounded-full"
                          alt="Steven Smith"
                        />
                        <div>
                          <div className="comment-metadata mb-2 text-sm text-gray-500">
                            <h6 className="fn font-semibold mb-2">John Doe</h6>

                            <Link
                              href=""
                              className="uppercase text-[#666666] text-[11px] hover:text-[#fa4612]"
                            >
                              January 24, 2021 at 10:59 am
                            </Link>
                          </div>

                          <div className="comment-content mb-2 text-justify text-sm text-[#212529] leading-[1.8]">
                            <p>
                              Move It Solution provided an exceptional moving
                              experience. Their team was punctual, efficient,
                              and handled my belongings with great care. The
                              communication throughout was excellent, and they
                              went above and beyond to ensure a smooth
                              transition. I couldn't be happier with their
                              service and highly recommend them for anyone in
                              need of a reliable and professional moving
                              solution. Thank you, Move It Solution!
                            </p>
                          </div>
                          <div className="reply">
                            <Link
                              href="blog.html#"
                              className="inline-block px-5 py-2 border border-[#ded9d9] hover:bg-[#fa4612] hover:text-white text-[#24416b] rounded-full text-[13px] font-semibold uppercase relative z-10"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>

              <div className="comment-respond mt-8">
                <div className="relative ">
                  <h2 className="text-[22px] font-semibold comments-title">
                    Leave a Reply
                  </h2>
                  <span className="absolute h-6 w-[3px] bg-[#fa4612] left-[-25px] top-1/2 transform -translate-y-1/2"></span>
                </div>
                <p className="my-5 text-sm">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="#" method="post" className="comment-form">
                  <div className="flex gap-8">
                    <div className="form-group w-full mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#24416b] mb-2"
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full bg-white border border-gray-200 p-2.5 outline-none transition duration-500"
                      />
                    </div>
                    <div className="form-group w-full mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#24416b] mb-2"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full bg-white border border-gray-200 p-2.5 outline-none transition duration-500"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#24416b] mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full bg-white border border-gray-200 p-2.5 outline-none transition duration-500"
                    />
                  </div>
                  <div className="comment-form-comment mb-4">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-[#24416b] mb-2"
                    >
                      Comment
                    </label>
                    <textarea
                      name="comment"
                      id="comment"
                      cols="45"
                      rows="5"
                      maxLength="65525"
                      required
                      className="block w-full bg-white border border-gray-200 p-2.5 focus:outline-none transition duration-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#fa4612] text-white py-[14px] px-[30px] inline-block cursor-pointer outline-none rounded-none uppercase transition-all duration-500 font-medium text-sm hover:bg-[#24416b] hover:text-white"
                  >
                    Post a Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area widget-area-left w-full lg:w-1/3 px-3  mt-10 lg:mt-0 ">
          <BlogLeft />
        </div>
      </div>
    </>
  );
};

export default page;
