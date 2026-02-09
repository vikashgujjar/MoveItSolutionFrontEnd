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
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked item
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  const accordionData = [
    {
      question: "What Are The Benefits Of  International Transport  Services?",
      answer:
        "International transport services provide a great deal of benefits. They not only make your journey smoother but also give Transportation & Logistics services via air, sea, and land. From arranging suitable warehousing to managing paperwork and documentation, international transport services aim to protect your goods and ensure that they are delivered safely and on time.",
    },
    {
      question: "What Is The Cost Of International Transport  Services?",
      answer:
        "The cost of International transport services is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties, and taxes along with additional service can affect the cost. For more details, you can contact the Move It solution.",
    },

    {
      question: "What Are The Common International Transport  Services?",
      answer:
        "Move It solution provides International international transport services like Freight & Cargo Shipping, Customs Clearance & Documentation, Door-to-Door delivery, Warehousing & Storage, and Tracking & Customer Support. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best International Transport  Services?",
      answer:
        " Move It Solution provides the most reliable and trustworthy International Transport Services including Freight & Cargo Shipping, Customs Clearance & Documentation, Warehousing & Storage. We have an effective process for managing customs clearance procedures that will prevent delays thanks to our extensive worldwide network. ",
    },
    {
      question: " How to find the best International Transport Services?",
      answer:
        "To find the best International transport services consider checking their Experience & Global Network. Ask about Insurance & Tracking systems. With our global technology network and advanced tracking technology, we guarantee the secure handling and delivery of your item. Our reputable global networks of agents and partners prioritize safety, and integrity and ensure that we comply with international safety standards.",
    },
    {
      question:
        " What should I look for when choosing an International Transport Service?",
      answer:
        " Look for their year of Experience, Licensing, and Certifications, and the services that they offer check Insurance Coverage, Customs Expertise, moving transport services, and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title>
          Top-Notch International Transport Services: Move It Solutions
        </title>
        <meta
          name="description"
          content="Are you looking for seamless international transport services, then get a quote from Move It Solutions now. 
"
        />
        <meta
          name="keywords"
          content="International Transport Services, moving transport services, international transport services near me, moving transport services near me, international shipping companies near me, worldwide shipping company
"
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
                International Transport Services
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
                International Transport Services
              </h2>
              <p className="text-justify ">
                Move It Solution offers a wide range of top{" "}
                <span className="font-semibold">
                  {""} international transport services
                </span>
                . We are reputable in this field with our several years of
                experience and extensive network of logistics we provide the
                best International Transport Services. Through every stage of
                transportation, consultation, planning, packaging, and
                implementation, we are a reliable and efficient international
                transport service provider.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/International-transport-services.webp"
                  alt="International Transport Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                Openness and effective communication play an important role in
                international transport service and we at Move It Solution are
                efficient in communicating and addressing customers' needs and
                requirements. We have a dedicated team of trained agents and
                transporters who work tirelessly to provide you with the best{" "}
                <span className="font-semibold">
                  {""} International transport services
                </span>
                . We provide services that help customers to keep track of their
                shipments. This ultimately creates an atmosphere of confidence
                and clarity during the entire process.
              </p>
              <p className="text-justify text-base my-5">
                Our Customer support is very supportive and available to answer
                any queries and issues related to Transport Services. Move It
                Solution is dedicated to providing Dependability, affordability,
                and customer-driven solutions. Get in touch with us today and
                find out what is different about our international transport
                services.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe International Transport Services
              </h2>
              <p className="text-justify ">
                Move It Solution International is the most dependable and secure
                International Transport Service Company. And we ensure that your
                cargo is delivered to you safely and on time. We have a global
                network and advanced tracking technology to ensure that we
                adhere to international safety standards. With Move It Solution
                you can be rest assured that your items are in safe hands and
                delivered to you within the expected time frame.
              </p>

              <p className="text-justify text-base my-5">
                We offer a complete package of international transport services
                including air, ocean, and land freight cargo carriage. For a
                quick solution or cheap service contact Move It Solution, we
                will customize the service as per your needs. Choose the Move It
                Solution for the best international transport service. We follow
                industry best practices for safety records and maintain
                professionalism. We place a high priority on transport integrity
                and safety. Reach out to our team today and let them know what
                shipping services you need and we will offer the best possible
                services for your good transportation.
              </p>

              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best International Transport Services
              </h2>
              <p className="text-justify text-base my-5">
                A dedicated{" "}
                <span className="font-semibold">
                  {" "}
                  best International Transport Services
                </span>{" "}
                company, Move It Solution provides the most reliable and
                trustworthy International Transport Services including Freight &
                Cargo Shipping, Customs Clearance & Documentation, Warehousing &
                Storage. We have an effective process for managing customs
                clearance procedures that will prevent delays thanks to our
                extensive worldwide network.
              </p>
              <p className="text-justify text-base my-5">
                With our global technology network and advanced tracking
                technology, we guarantee the secure handling and delivery of
                your item. Our reputable global networks of agents and partners
                prioritize safety, and integrity and ensure that we comply with
                international safety standards.
              </p>
              <p className="text-justify text-base my-5">
                Since we follow industry best practices we place a high priority
                on shipping integrity and safety. Whether it is Freight & Cargo
                Shipping or our customer-centric approach, we have an advanced
                tracking system that guarantees reliable and timely
                transportation worldwide. Choose Move It Solution we offer the
                best International Transport services. We value our customer's
                needs and requirements. We take feedback constructively so that
                we can give the best International Transport Services.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Transport Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Move It Solution is your best bet for reliable and cheap
                  International Transport Services. We have a customer service
                  team available at all times to ensure that our clients are
                  updated on the status of their goods during the course of the
                  move.
                </p>
                <p className="text-justify text-base my-5">
                  Are you looking advanced and cheap international transport
                  services? Move It Solution is the answer! We provide cheap
                  transportation solutions for business purpose. Whether you are
                  in need shipping, logistics or freight services – we cover
                  them all. Our resources, skills, and knowledge enable us to
                  move your cargo safely and on time anywhere in the world. Call
                  Move It Solution Now for all your international transport
                  needs.
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
