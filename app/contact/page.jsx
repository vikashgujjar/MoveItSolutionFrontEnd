"use client";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaSkype } from "react-icons/fa";
import Link from "next/link";
import Banner from "./Banner";
import Location from "./OfficeLocations";
import Counter from "../Components/Counter";
import ContactForm from "../Components/contactForm";

const Contact = () => {
  return (
    <>
      <head>
        <title>Contact Us | Move It Solution </title>
        <meta
          name="description"
          content="Looking for reliable information? Contact Move It Solution for all your queries and find the solutions you need. Get in touch today!"
        />
      </head>

      <Banner />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-44 max-lg:px-10 max-md:px-5  max-sm:px-2  pt-16  ">
        <div className="md:col-span-7 ">
          <p className=" text-lg  text-center mb-3 text-[#fa4612]">
            Contact Us
          </p>
          <div className="text-center">
            <h2 className="text-xl lg:text-4xl font-bold">
              Have Question? Write a Message
            </h2>
            <p className="my-5 text-[#6a6a8e] text-lg">
              We will catch you as early as we receive the message
            </p>
          </div>
          <ContactForm pageType="contact" />
        </div>

        <div className="md:col-span-5">
          <div className="info-card custom-shadow my-5 p-8   bg-[#fff8f2]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <FaPhoneAlt /> Phone:
            </span>
            <p className=" mt-3 mb-2">
              Assistance hours: Monday – Friday, 9 am to 6 pm
            </p>
            <Link
              href="tel:+91-7056997000"
              className="font-semibold  text-lg lg:text-xl "
            >
              Delhi office: (+91) 7056997000
            </Link>
          </div>
          <div className="info-card custom-shadow my-5 p-8   bg-[#ffecec]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <FaEnvelope /> Email:
            </span>

            <p className="mt-3 mb-2">
              Our support team will get back to in 24h during standard business
              hours.
            </p>
            <Link
              href="mailto:info@moveitsolution.com"
              className="font-semibold text-lg lg:text-xl "
            >
              info@moveitsolution.com
            </Link>
          </div>
          <div className="info-card custom-shadow my-5 p-8   bg-[#eafffd]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <i class="bx bx-location-plus"></i> Head Office Address:
            </span>
            <p className="mt-3 mb-2">
              Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New
              Delhi (110077)
            </p>
          </div>
        </div>
      </div>
      <Location />
      <Counter />
    </>
  );
};

export default Contact;
