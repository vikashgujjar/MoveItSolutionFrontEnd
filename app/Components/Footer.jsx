"use client";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/app/lib/settings";

const DEFAULT_SOCIAL = {
  facebook: "https://www.facebook.com/moveitsolution",
  twitter: "https://twitter.com/moveitsolution",
  instagram: "https://www.instagram.com/moveitsolution/",
  linkedin: "https://www.linkedin.com/in/move-it-solution-257846226/",
  youtube: "https://www.youtube.com/channel/UCeU4KG_f6DU9aivOhDQrLBg",
};
const DEFAULT_COPYRIGHT = "Copyright 2021 Move It Solution. Designed By";

const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getSettings().then((data) => {
      if (!cancelled && data) setSettings(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const social = { ...DEFAULT_SOCIAL, ...(settings?.social_links || {}) };

  return (
    <>
      <div className="footer  text-white  pt-2 lg:mt-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 text-white   py-8 px-5 md:px-10 lg:px-28  text-sm">
          <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-1/4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Image
                width={700}
                height={700}
                src="/Images/logo/Move-it-solution-packers-and-movers.webp"
                alt="Move It Solution Logo"
                className=" w-full lg:w-60 "
              />
            </Link>
            <div className="text-center lg:text-left mt-8">
              <p className="   mb-4  text-[15px] text-justify">
                <span className="">
                  Our Vigilant Our Professional Team Will Monitor The Safety
                  Handling Of Client’s Goods From Booking Till Delivery For
                  Delivering The Goods Without Getting Any Damage Or Pilferage.
                </span>
              </p>
            </div>

            <div className="flex gap-3 mt-5">
              <Link
                href={social.twitter}
                target="_Blank"
                className="bg-[#00c7c7] p-2  hover:bg-[#fa4612] text-sm rounded"
              >
                <FaTwitter />
              </Link>
              <Link
                href={social.facebook}
                target="_Blank"
                className="bg-[#00c7c7] p-2  hover:bg-[#fa4612] text-sm rounded"
              >
                <FaFacebook />
              </Link>
              <Link
                href={social.instagram}
                target="_Blank"
                className="bg-[#00c7c7] p-2  hover:bg-[#fa4612] text-sm rounded"
              >
                <FaInstagram />
              </Link>
              <Link
                href={social.linkedin}
                target="_Blank"
                className="bg-[#00c7c7] p-2  hover:bg-[#fa4612] text-sm rounded"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={social.youtube}
                target="_Blank"
                className="bg-[#00c7c7] p-2  hover:bg-[#fa4612] text-sm rounded"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-[25%] single-widget ">
            <h3 className="text-2xl text-white font-bold mb-4 hover:text-[#fa4612]">
              Quick Links
            </h3>
            <ul className="space-y-4 text-md">
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee]  leading-loose">
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose ">
                <Link href="/about">About Us</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose ">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/why-us-choose">Why Us Choose</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/global-location">Global Location</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-1/4 single-widget">
            <h3 className="text-2xl font-bold mb-4 text-white hover:text-[#fa4612]">
              Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/international-Courier-Services">
                  International Courier Services
                </Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/international-Parcel-Services">
                  International Parcel Services
                </Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/international-Packing-Services">
                  International Packing Services
                </Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/international-Shifting-Services">
                  International Shifting Services
                </Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/international-Transport-Services">
                  International Transport Services
                </Link>
              </li>

              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/Warehouse-Services">Warehouse Services</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full lg:w-1/4 single-widget">
            <h3 className="text-xl font-bold text-white mb-4 hover:text-[#fa4612]">
              Our Branches
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Delhi</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Canada</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Texas USA</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Mumbai</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Gurgaon</Link>
              </li>
              <li className="flex items-center hover:text-[#fa4612] relative border-b-[1px] border-dashed border-[#eee] leading-loose">
                <Link href="/">Chandigarh</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lines absolute top-0 left-0 -z-[1] right-0 h-full w-[87vw] m-auto">
          <div className="line line absolute w-[2px] h-full top-0 left-1/2 bg-[#ffffff1a] overflow-hidden ml-[-25%]"></div>
          <div className="line line absolute w-[2px] h-full top-0 left-1/2 bg-[#ffffff1a] overflow-hidden"></div>
          <div className="line line absolute w-[2px] h-full top-0 left-1/2 bg-[#ffffff1a] overflow-hidden ml-[25%]"></div>
        </div>

        {/* <div className="whts-btn right-0 bottom-[40px] fixed z-50">
          <Link
            href="https://api.whatsapp.com/send?phone=+91-8898858087 &amp;text= I am looking for shifting with your company"
            target="blank"
          >
            <img
              className="w-64 transition-transform duration-300 ease-in-out hover:scale-110 animate-bounce-smooth"
              src="/Images/icon/whatssapp.webp"
              alt="WhatsApp"
            />
          </Link>
        </div> */}
      </div>

      <div className="bg-[#d3000a] block lg:flex  justify-between w-full px-5 md:px-10 lg:px-28 py-4 text-white text-[15px] text-center">
        <div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 list-disc justify-center mb-2 lg:mb-0">
            <li className="hover:text-[#fa4612]">
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li className="hover:text-[#fa4612]">
              {" "}
              <Link href="/privacy-policy">Privacy & Policy</Link>
            </li>
            <li className="hover:text-[#fa4612]">
              {" "}
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <p>
          {" "}
          {settings?.copyright_text || DEFAULT_COPYRIGHT}
          <Link
            href="https://www.futuretouch.in/"
            target="_blank"
            className="text-[#ffb101]"
          >
            {" "}
            Future Touch
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
