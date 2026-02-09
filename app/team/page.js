"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const page = () => {
  const teamMembers = [
    {
      name: "Jonkin Jullinor",
      role: "Product supplier",
      image: "/Images/team/Jonkin-Jullinor.webp",
    },
    {
      name: "Naimuk Waninolin",
      role: "Office executive support",
      image: "/Images/team/Moris-Julfikar.webp",
    },
    {
      name: "Moris Julfikar",
      role: "Regional supplier",
      image: "/Images/team/Naimuk-Waninolin.webp",
    },
    {
      name: "Waxin Alexgander",
      role: "International supplier",
      image: "/Images/team/Waxin-Alexgander.webp",
    },
    {
      name: "Rilee Rossouw",
      role: "International supplier",
      image: "/Images/img/Rilee-Rossouw.webp",
    },
    {
      name: "Devon Conway",
      role: "International supplier",
      image: "/Images/img/Devon-Conway.webp",
    },
  ];

  return (
    <>
<head>
        <title>
        Our Professional Team | Move It Solution

        </title>
        <meta
          name="description"
          content="Are you looking for professional movers? Move IT Solution has a dedicated team for all your moving needs. Contact us today for a seamless relocation experience."
        />
      </head>



      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-[#fa4612]">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">Our Professional Team</li>
            </div>
          </div>
        </div>
      </div>

      <section className="team-area py-24 bg-gray-50 px-0 md:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#fa4612] uppercase text-sm lg:text-lg">
              Professional Our Professional Team
            </span>
            <h2 className="text-3xl md:text-[40px] underline-animation left mt-3 font-bold text-[#24416b]">
              Our support professionals are here
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="single-team group relative overflow-hidden bg-white shadow-lg text-center h-[460px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover absolute transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0 duration-700 mb-4"
                />
                <div className="team-content absolute bottom-0 w-full bg-[#24416b] text-center p-2 transition-transform duration-500 transform perspective-300 rotate-x-90 origin-bottom group-hover:rotate-x-0">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <span className="text-sm text-white">{member.role}</span>
                </div>
                <ul className="absolute hidden group-hover:block top-0 justify-center">
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href=""
                      className="text-gray-400 hover:text-blue-600 transition"
                    >
                      <i className="bx bxl-facebook text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href=""
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      <i className="bx bxl-twitter text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href=""
                      className="text-gray-400 hover:text-pink-600 transition"
                    >
                      <i className="bx bxl-instagram text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href=""
                      className="text-gray-400 hover:text-blue-700 transition"
                    >
                      <i className="bx bxl-linkedin text-lg text-white"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
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
      </section>
    </>
  );
};

export default page;
