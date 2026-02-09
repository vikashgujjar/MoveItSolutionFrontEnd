"use client";
import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  const accordionData = [
    {
      question: "What items can you pack for an international move?",
      answer:
        " You can pack Furniture, electronics, clothing, kitchenware, and even delicate objects. We at Make It Solution provide an efficient and reliable international move. With us you don’t have to worry, your belongings will reach their destination safely with the help of skilled packing staff. We also offer precise instructions on what cannot be transported like restricted or forbidden items, making it easy for you to comply with customs laws.",
    },
    {
      question: " How long does the packing process take?",
      answer:
        "The time required for the packing process depends on its size and destination but no worries our staff works effectively to finish the procedure as soon as feasible while maintaining the highest standards of care and quality. We place a high value on accuracy and timeline, making sure that your belongings are handled, packed, and transported securely and without needless delays. For accurate details regarding the packing process, you can directly contact Move It Solution.",
    },
    {
      question: " Do you provide packing materials?",
      answer:
        "We are an International Packing Service company and of course, we provide packing materials. These packing materials include boxes, bubble wrap, packing paper, and tape.",
    },
    {
      question: " Can you pack delicate or valuable items?",
      answer:
        "Yes, We at Make It Solution have experts who guarantee safe packaging of costly, delicate, and priceless objects with care and security to guarantee their safe arrival at their destination.",
    },
    {
      question: " Do you offer unpacking services ?",
      answer:
        "Yes, To facilitate your customer journey Move It solution provides unpacking services at your destination. To assist you swiftly and stress-free our staff will gently unpack your belongings.",
    },
    {
      question:
        "What should I look for when choosing a International Moving Company?",
      answer:
        "Move It solution goes above and beyond to ensure that your international relocation goes well. From the start to the finish, our best international packing services will guarantee that your belongings are in experienced hands. So that you may concentrate on embarking on your new journey, let us handle the packing and you enjoy your international journey. To learn more about our international moving and packing services, contact us right now.",
    },
  ];

  return (
    <>
      <head>
        <title>
          Best International Packing Services With Move It Solutions
        </title>
        <meta
          name="description"
          content=" If you want seamless international packing services, contact Move It Solutions today. "
        />
        <meta
          name="keywords"
          content="international packing services, Overseas Packing Services, international moving and packing, international movers packers, export packaging companies, international packing near me"
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
                International Packing Services
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
                International Packing Services
              </h2>
              <p className="text-justify ">
                Although moving to a new country is an exciting experience.
                Sometimes it gets hectic for people because you are not moving
                alone. You have a lot of responsibilities to manage. From
                packing to shipping belongings the process can be overwhelming.
                Hence Move It solution helps you in your International Packing
                service journey.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/International-packing-Services.webp"
                  alt="International Packing Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                From reliable to dependable packing service we make sure that
                your belongings reach their destination on time. We have a
                strong global network and our professional staff is aware of how
                important your belonging is. <br />
                With our years of experience, we know that every customer's
                needs are different. When it comes to International Packing
                Service We provide specialized packaging solutions like
                protective wraps, crates, boxes, and cushioning materials to
                ensure the safety of our customer's belongings.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Why Use Our International Packing Services?
              </h2>
              <p className="text-justify ">
                Move It Solution provides the best international moving and
                packing services. We ensure that each item is packed properly
                and handled carefully. From businesses to individuals our
                packing services are reliable and cater to the needs of our
                customers You can use our Top International Packing services for
                the following reasons:
              </p>
              <div className="mt-3">
                <ul className="list-disc list-inside space-y-2">
                  <li className="">
                    <span className="font-semibold">
                      Professional Packing Staff:
                    </span>{" "}
                    From delicate goods to large furniture, our experienced
                    staff packs your belongings using the best industry methods.
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      Best Quality Materials:
                    </span>{" "}
                    Move It Solution offers the best quality materials that
                    guarantee protection while transporting. We use packaging
                    supplies like sturdy boxes, packing tapes, and bubble wrap
                    to ensure the safety of delicate items.
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      Tailored Packaging Options:
                    </span>{" "}
                    We have a global network to cater to the specific needs of
                    different locations as a result we offer tailored options to
                    meet your location requirements.
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      Special Care Handling:
                    </span>{" "}
                    To guarantee safe international shipment, precious or
                    delicate goods are handled and wrapped in certain ways with
                    more precautions.
                  </li>
                  <li className="">
                    <span className="font-semibold">Expert Packing:</span> To
                    guarantee safety throughout transportation, the shipments
                    are handled with care.
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <ul className="list-disc list-inside space-y-2">
                  <li className="">
                    <span className="font-semibold">
                      Labeling and Inventory:
                    </span>{" "}
                    To ensure that everything is correctly categorized, we label
                    every package and keep a thorough inventory.
                  </li>
                  <li className="">
                    <span className="font-semibold">Custom Crating:</span> Move
                    It Solution understands that some goods require extra
                    wrapping and precaution while transporting that’s why we
                    provide custom-built crates for delicate and priceless items
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      {" "}
                      Eco-friendly solutions:
                    </span>{" "}
                    To ensure a sustainable planet we offer eco-friendly
                    solutions to packaging.
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      Packing to Comply with Customs:
                    </span>{" "}
                    Our packing will guarantee a seamless customs clearance
                    process by following international shipping guidelines.
                  </li>
                </ul>
              </div>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Benefits of Using the Move It Solution in International
                Packaging
              </h2>
              <div className="mt-3">
                <ul className="list-disc list-inside space-y-2">
                  <li className="">
                    <span className="font-semibold">Safety Comes First:</span>{" "}
                    We make sure that everything is packed securely because we
                    treat your belongings with utmost care and precaution.
                  </li>
                  <li className="">
                    <span className="font-semibold">Time-Saving:</span>You can
                    enjoy stress-free moving to a new country while we take care
                    of your packing worries and ultimately it will save you
                    time.
                  </li>
                  <li className="">
                    <span className="font-semibold">
                      Stress-Free Experience:
                    </span>{" "}
                    You can be sure that your packing is in the best hands with
                    our end-to-end assistance.
                  </li>
                  <li className="">
                    <span className="font-semibold">Affordable Services:</span>{" "}
                    Take advantage of premium packing services at affordable
                    costs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International packing Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Let Move It Solution Be Your Go To Company For Peace Of Mind
                  Every Time You Need Help With
                  <span className="font-semibold">
                    {" "}
                    International Packing Services.
                  </span>{" "}
                  For the better assistance of our clients, during the entire
                  process of moving we keep our customers service
                  representatives on shift 24 hours a day, 7 days a week to keep
                  them up to date about the progress of their precious
                  belongings.
                </p>
                <p className="text-justify text-base my-5">
                  If you want to find cheap international packing services, Move
                  It Solution can be the other option. We have Dependable and
                  Affordable International Packing Services that provide maximum
                  safety in storage and shipment of the customer’s product. So,
                  to relocate without a hustle, contact us today.
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
