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
      question: "What Are The Benefits Of Warehouse Services?",
      answer:
        "Warehouse Services provide a great deal of benefits. They not only assist customers through the main stages of warehouse storage services, Dispatch, Shipping Returns & Reverse but also facilitate automated systems, scanners, and packers to facilitate fast order processing and reduce the chances of holding stock for a long time. We at Move It Solution International are an efficient packers, movers, and logistic service company. We have the largest number of networks and up-to-date technology that helps us to offer the best Warehouse Services. ",
    },
    {
      question: "What Is The Cost Of International Warehouse Services?",
      answer:
        "The cost of warehouse relocation services is based on customer-specific needs and requirements. Location, storage type, duration, and additional services can affect the cost. For more details, you can contact the Move It solution. ",
    },

    {
      question: "What Are The Common International Warehouse Services?",
      answer:
        "Move It solution provides Common Warehouse Services like Climate-Controlled Storage, Efficient Order Processing, Scalability & Flexibility Reverse Logistics & Returns Management with Strong Customer Support. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best International Warehouse Services?",
      answer:
        "Move It Solution provides the best warehouse service as we cater to the needs of our clients efficiently and reliably. We put a lot of effort into understanding the demands of our clients so that we can create effective, safe, and flexible warehouses. We design innovative strategies that ensure inventory control, increase efficiency, and decrease costs.",
    },
    {
      question: "How to find the best warehousing companies?",
      answer:
        " To find the best Warehouse Services consider defining your Storage Needs, Check Location & Accessibility, Look for Advanced Technology Check Security & Safety Measures, and Evaluate Customer Support & Services. ",
    },
    {
      question:
        "What should I look for when choosing an International Warehouse service?",
      answer:
        " LLook for their smooth inventory management, order fulfillment, logistics, Storage & Space Availability, Warehouse Management System (WMS), and Security & Safety Measures with Customs Expertise and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title> Best-in-class Warehouse Services: Move It Solutions</title>
        <meta
          name="description"
          content=" If you are looking for the best international warehouse services then connect with Move It Solutions today. 
"
        />
        <meta
          name="keywords"
          content="best warehousing companies, warehouse moving services, warehouse storage near me, shipped international warehouse, warehouse international services, international warehousing company, warehouse health and safety. 
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
              <li className="text-[#fa4612] text-nowrap">Warehouse Services</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Warehouse Services
              </h2>
              <p className="text-justify ">
                Move It Solution offers a wide range of Warehouse services. We
                assist companies to enhance their logistics and help them to
                manage their supply chain effectively. We have an efficient
                management of storage and inventory facilities that cater to the
                needs of our customers.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Warehouse-Services.webp"
                  alt="Warehouse Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                With Move It Solution’s top Warehouse Services, enterprises can
                enhance their operational processes, reduce expenditure, and
                direct their attention to core activities. We are reputable in
                this field with our several years of experience and extensive
                network of logistics and Warehouse services.
              </p>
              <p className="text-justify text-base my-5">
                We assist our customers through the main stages of warehouse
                services like storage, Order Processing & Picking Dispatch &
                Shipping Returns & Reverse. We are a reliable and efficient
                Warehouse service provider.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Warehouse Services
              </h2>
              <p className="text-justify ">
                Move It Solution International is the most dependable and safe
                Warehouse Service provider. We are dedicated to excellence and
                customer satisfaction. We ensure that products are stored,
                handled, and managed carefully. With our trained warehouse staff
                we focus on keeping every product in a clean and organized
                environment.
              </p>

              <p className="text-justify text-base my-5">
                We know that some perishable products demand utmost care and
                precaution. Hence for this kind of Product, we have handled your
                them with care. We used best industry practices to maintain that
                your stock is properly taken care of to minimize the risks of
                damage or spoilage.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution displays the best and most secure storage
                facilities. With our skills, your goods are safe without a
                doubt. Be it storage, inventory control, and delivery, we take
                care of everything to run your business smoothly without
                incurring lost chances. For more information on warehousing
                services, contact Move It Solution.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Warehouse Services
              </h2>
              <p className="text-justify text-base my-5">
                Move It Solution provides the{" "}
                <span className="font-semibold"> best Warehouse Services</span>{" "}
                as we cater to the needs of our clients efficiently and
                reliably. We put a lot of effort into understanding the demands
                of our clients so that we can create effective, safe, and
                flexible warehouses. We design innovative strategies that ensure
                inventory control, increase efficiency, and decrease costs.
              </p>
              <p className="text-justify text-base my-5">
                At Move It Solution, we recognize that every business has
                different warehousing needs. That is why we provide strategies
                that address their needs and requirements in sectors like
                e-commerce, retail, manufacturing, logistics, and others. We
                have warehouse facilities that are located in key areas for
                optimal supply chain management to allow smooth distribution. We
                used an advanced technological system for inventory control. We
                also track stock levels to ensure proper stock management.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Warehouse Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Employ Move It Solution as your go-to company for reliable as
                  well as affordable
                  <span className="font-semibold"> Warehouse Services</span> We
                  have dedicated customer service representatives available 24/7
                  to ensure our clients are updated on the whereabout of their
                  precious items during the course of the moving process.
                </p>
                <p className="text-justify text-base my-5">
                  Low Cost Warehouse Services provided. Optimize your supply
                  chain with our services that are timely and economical.
                  Eliminate the barriers of storage, inventory control and
                  product distribution. Get in touch with us for dependable and
                  affordable warehousing services. Move It Solution is willing
                  to help.
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
