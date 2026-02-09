"use client";
import { useState, useRef } from "react";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  const accordionData = [
    {
      question: "What Are The Benefits Of International Shifting Services?",
      answer:
        "International Shifting Services provides a great deal of benefits. They not only make your journey smoother but also give Transportation & Logistics services via air, sea, and land. From arranging suitable warehousing to managing paperwork and documentation International Shifting Services aims to protect your goods and ensure that they are delivered safely on time. ",
    },
    {
      question: "What Is The Cost Of International Shifting Services?",
      answer:
        "The cost of International Shifting service is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties, and taxes along with additional service can affect the cost. We also are one of the best house shifting movers and packers. For more details, you can contact the Move It solution.",
    },

    {
      question: "What Are The Common International Shifting Services?",
      answer:
        "Move It solution provides International Shifting  Services like Packing & Unpacking, Transportation Services, Door-to-Door Moving, Storage Solutions, and Tracking & Customer Support. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best International Shifting Services?",
      answer:
        "A dedicated international Shifting Services company, Move It Solution provides the most reliable and trustworthy shifting services including packing, shipping, customs clearing, and delivery services. We have an effective process for managing customs clearance procedures that will prevent delays and issues. We had a turnover rate of thousands of clients over the years.",
    },
    {
      question: "How to find the best International Shifting Services?",
      answer:
        "To find the best International Shifting Services consider checking their Experience & Global Network. Ask about Insurance & Tracking systems, and witness for yourself at how effective their customer support is. ",
    },
    {
      question:
        " What should I look for when choosing a top international shifting company?",
      answer:
        "Look for their year of Experience, Licensing, and Certifications, and the services that they offer check Insurance Coverage, Customs Expertise, and customer support.",
    },
  ];
  return (
    <>
      <head>
        <title>
          Simplifying International Shifting Services: Move It Solutions
        </title>
        <meta
          name="description"
          content="Are you looking for one of the best international shifting services? Then, wait no more, contact Move It Solutions. 
"
        />
        <meta
          name="keywords"
          content="international shipping companies near me, international house moving companies, international house moving, best movers company, top international shiffting company"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">
                International Shifting Services
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                International Shifting Services
              </h2>
              <p className="text-justify ">
                Whether it is for people, families, or businesses, our top{" "}
                <span className="font-semibold">
                  {" "}
                  International Shifting Services{" "}
                </span>{" "}
                provide a great deal of help. They not only make your journey
                smoother but also give Transportation & Logistics services via
                air, sea, and land. If you are planning to relocate across
                borders it will not be an easy job. You have to take care of
                several other aspects of it like Customs Clearance,
                documentation, and legal laws. Here International Shifting
                Service helps you to cater to these things. They assist you
                based on your requirements and needs.
              </p>
              <p className="text-justify text-base my-5">
                <span className="font-semibold">
                  {" "}
                  International Shifting Services{" "}
                </span>{" "}
                provides a complete package regarding relocation across
                countries from handling logistics, packing, and transportation
                to delivery. They help with packing goods for safe travel and
                also assist you with unpacking on arrival. With International
                Shifting services you don’t need to worry. From arranging
                suitable warehousing to managing paperwork and documentation
                they aim to protect your goods and ensure that they are
                delivered safely on time.
              </p>
              <div className="mt-8">
                <Image
                  src="/Images/img/International-Shifting-Services.webp"
                  alt="International Shifting Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe International Shifting Services
              </h2>
              <p className="text-justify ">
                For the most dependable and safest International Shifting
                Services contact Move It Solution a most trusted and reliable
                company. With our global network, We have an efficient procedure
                for handling customs clearance and documentation procedures that
                will avoid delays and complications. We give priority to safety
                and integrity as we operate with best practices in the industry.
                With several years of experience in delivering the best
                international shifting services, we guarantee a smooth and easy
                process of moving. Our customer-centric approach helps us to
                stand out against our competitors.
              </p>

              <p className="text-justify text-base my-5">
                From our several years of experience, we understand that moving
                from one country to another country is both tedious and
                expensive in terms of logistics and paperwork. As a result, we
                provide complete solutions to deliver the best International
                Shifting Services with the help of our professional staff
                operating in different parts of the world. We provide peace of
                mind to our customers at every stage through efficient delivery
                and customs clearance. With our extensive global network, Move
                It Solution is committed to providing trustworthy and best
                International Shifting Services.
              </p>

              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best International Shifting Services
              </h2>
              <p className="text-justify text-base my-5">
                A dedicated international Shifting Services company, Move It
                Solution provides the most reliable and trustworthy shifting
                services including packing, shipping, customs clearing, and
                delivery services. We have an effective process for managing
                customs clearance procedures that will prevent delays and issues
                thanks to our extensive worldwide network. We guarantee the
                secure handling and delivery of your products with the
                assistance of reputable global networks of agents and partners.
                We give priority to safety and integrity as we operate with best
                practices in secure packaging and handling.
              </p>
              <p className="text-justify text-base my-5">
                We provide peace at every step through efficient delivery. We
                had a turnover rate of thousands of clients over the years. This
                experience helps us to focus on those areas that need
                improvement.
                <br />
                Since we follow industry best practices for safe packaging and
                handling, we place a high priority on shipping integrity and
                safety. Whether it is door-to-door international shipping
                service or our customer-centric approach, we have an advanced
                tracking system that guarantees a reliable and timely delivery
                worldwide. Choose Move It Solution we offer the best
                international shifting services.
              </p>
              <p className="text-justify text-base my-5">
                We value our customers' needs and requirements. We take feedback
                constructively so that we can give the best International
                Shifting Services to our customers. Our Staff are well qualified
                and trained professionals. They work efficiently and tirelessly
                to provide the best{" "}
                <span className="font-semibold">
                  {" "}
                  international house-shifting services.
                </span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Shifting Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Contact Move It Solution for Trusted and Affordable
                  International Moving Services Our customer service is active
                  24/7 in order to keep our clients updated on the handling of
                  their goods in transit.
                </p>
                <p className="text-justify text-base my-5">
                  If you are after cheap international shifting services, Move
                  IT Solutions is a good option. Because of our experience and
                  low cost structure we are able to provide safe and effective
                  solutions for your international transport needs. Do not
                  hesitate to get in touch with us for a smooth and
                  cost-effective transfer of residence.
                </p>

                <ul className="">
                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    Request Quotes Online
                  </li>

                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    Packing &amp; Transportation of "A" Quality
                  </li>

                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    Delivery is guaranteed to be safe.
                  </li>

                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    Team With Experience and Support
                  </li>

                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    Packaging Services You Can Trust
                  </li>

                  <li className="flex gap-4 items-center font-semibold mb-2 group">
                    <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                    24/7 live assistance
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="accordion px-5 md:px-28 pb-10">
        <h2 className="text-xl sm:text-[24px] md:text-4xl text-center font-semibold leading-[50px]  mt-2 mb-6 md:mb-10">
          Frequently <span className="text-[#ff6600]">Asked</span> Questions
        </h2>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`mb-5 transition-all duration-300 rounded-md ease-in-out ${
              activeIndex === index
                ? " shadow-[0px_14px_47px_0px_rgba(40,46,58,0.08)]"
                : ""
            } bg-white`}
          >
            <h6
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between items-center text-left p-5 rounded-md  cursor-pointer transition-all duration-300 ease-in-out w-full  font-[600] text-base md:text-base bg-transparent relative font-[Plus Jakarta Sans] ${
                activeIndex === index ? "" : "custom-shadow"
              }`}
            >
              {item.question}

              <div className="transition-transform duration-300">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </h6>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: `${getContentHeight(index)}px`,
              }}
              className={`accordion-content text-[#ff6600]  transition-max-height duration-500 ease-in-out overflow-hidden`}
            >
              <p className="text-base pb-5 px-5 text-justify">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
