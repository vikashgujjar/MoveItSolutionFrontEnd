"use client";
import { useState, useRef } from "react";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import LogisticsLeft from "../Components/LogisticsLeft";

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
      question: "What Are The Benefits Of Logistics Services?",
      answer:
        "Logistics service provides a great deal of benefits. They not only make your journey smoother but also give Logistics and Warehousing services along with transportation via air, sea, and land. From arranging suitable warehousing to managing cost efficiency they offer Flexibility, Scalability, Tracking, and Inventory Management. Logistics service company aims to protect your goods and ensure they are delivered safely on time.",
    },
    {
      question: "What Is The Cost of Logistics Services?",
      answer:
        "The cost of Logistics services is based on client-specific needs and requirements. Service- distance, weight, volume, Freight & Cargo Costs, customs duties, and taxes along with additional services can affect the cost. For more details, you can contact  Move It Solution.",
    },

    {
      question: "What Are The Common Logistics Services?",
      answer:
        "Move It solution provides Logistics services  which includes Transportation, Warehousing, Storage Supply Chain Management, Inventory Management, Reverse Logistics, and CustomerSupport. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best Logistics Services?",
      answer:
        "When it comes to the Logistics services Move It Solution stands out to be the most efficient and reliable Logistics Service provider. We not only focus on transportation services but also offer complete logistics solutions based on client needs and requirements. With years of experience in this field, we have experts in retail, manufacturing, e-commerce, automotive, and even the pharmaceutical sector. Our supply chain in logistics management and logistics moving service is reliable and trustworthy.",
    },
    {
      question: "How to find the best Logistics services?",
      answer:
        "To find the best Logistics services consider Identify Your Logistics Needs, researching & Comparing Logistics Providers, Check Credentials & Reliability, Compare Pricing & Transparency, Evaluate Technology & Tracking Systems look at how effective their customer support is. ",
    },
    {
      question: "What should I look for when choosing Logistics services?",
      answer:
        " Look for their Reliability & Reputation, Services Offered, Cost & Pricing, Transparency, Coverage & Network, Technology & Tracking, and Customs Expertise and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title>Best-In-Class Logistic Services By Move It Solutions </title>
        <meta
          name="description"
          content=" Your wait for the best logistic services stops at Move It Solutions, one of the best logistic service providers in the industry.
"
        />
        <meta
          name="keywords"
          content=" best logistics services, supply chain logistics, end to end logistics services, global logistics services, global logistics company, international logistics services, global logistics shipping"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">Logistics Service</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Logistics Service
              </h2>
              <p className="text-justify ">
                Logistic services play an important role in spreading business
                worldwide. Due to the dynamic nature of global trade, having a
                logistic partner is necessary as they help you manage and
                eliminate difficulties when doing cross-border transportation.
              </p>
              <p className="text-justify ">
                Move It Solution is the ultimate trustworthy partner. We not
                only help you in planning, execution, movement, and storage of
                goods, and services but also ensure an efficient supply chain in
                logistics management. We provide the Best Logistics Service
                worldwide as a result of our global network and widespread
                connectivity in all major trade routes and international hubs.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/logistics.webp"
                  alt=" Logistics Service"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                We at Move It Solution a logistics services company offer a wide
                range of logistic services like Freight Transportation,
                Warehousing & Storage Facility, Inventory Management, Customs
                Clearance, and Supply Chain Consulting. We have years of
                experience in this field and we combine our technical expertise
                with national and international know-how.
              </p>
              <p className="text-justify text-base my-5">
                Our understanding of the specifics of international trade
                regarding customs regulations and compliance guarantees that
                your shipments are delivered without incurring additional costs
                due to delays. From North America through Europe, Asia, and even
                the Middle East, we guarantee that your cargo is secure
                throughout the journey and ensure a reliable delivery.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Logistics Service
              </h2>
              <p className="text-justify ">
                You can trust Move It Solution for dependable and safe Logistics
                Services. Our supply chain in logistics management ensures the
                safe and timely delivery of cargo. With our global logistics
                services, you will be able to channel transportation modes that
                suit your requirements. Whether you need air freight, ocean
                freight, or Multimodal Freight you will get it all at Move It
                Solution.
              </p>

              <p className="text-justify text-base my-5">
                Our comprehensive logistics services comprise transportation by
                road and rail on door to door as well as port-to-port and
                cross-border basis, thus allowing you the freedom to select what
                best suits your business. We know sometimes the customs process
                can be difficult, extensive, and time-consuming. But with Move
                It Solution as your logistic partner we make it an easy task for
                you. Our team of logistics experts manages every process of
                customs clearance so that your cargo adheres to international
                trade laws. From paperwork, documentation, and import and export
                taxes, we manage the entire supply chain logistics so you can
                direct your time and resources in your business.
              </p>
              <p className="text-justify text-base my-5">
                In global supply chain communication, transparency is crucial
                and at Move It Solution, we make every possible effort to keep
                you updated. With our modern tracking systems, we give you live
                updates about the status and location of your shipment, as well
                as the predicted delivery period. This level of clarity and
                transparency allows you to control the supply chain effectively.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Logistics Service
              </h2>
              <p className="text-justify text-base my-5">
                Move It solution provides the Best logistics moving services. We
                place high value on the security and protection of the entire
                logistic process. We follow standardized industry practices to
                ensure your valuables are safe from destruction, theft, and
                misplacement. At the same time, we try our best to embrace
                environmental responsibility concerning our operations.
              </p>
              <p className="text-justify text-base my-5">
                Through our customer service, we understand customer needs and
                requirements and help them to achieve their logistics targets
                while at the same time protecting Mother Nature by designing
                logistic planning with energy-efficient routes and modes of
                transport. Choose Move It Solution for the Best Logistics
                services from transportation to handling and management of
                goods, we provide safe and reliable Logistics services. Our
                supply chain in logistics management is the most efficient and
                trustworthy. We have a dedicated customer support agent.
                Concerning dependability, technology, and perfection, we
                simplify everything to enhance international and national
                logistic services.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Logistics Service
                </h2>
                <p className="text-justify text-base mt-3">
                  At Move It Solution, we understand that international
                  logistics is a critical component of your overall supply
                  chain. Our services are designed to integrate seamlessly with
                  your existing operations, providing a cohesive and efficient
                  logistics solution.
                </p>
                <p className="text-justify text-base my-5">
                  Whether you are coordinating bulk shipments, managing
                  just-in-time deliveries, or ensuring the smooth transport of
                  high-value goods, we adapt our services to align perfectly
                  with your supply chain strategy.
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
