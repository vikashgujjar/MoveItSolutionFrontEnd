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
      question: "What Are The Benefits Of Freight Delivery?",
      answer:
        "Freight delivery offers several benefits. Firstly, it allows for the transportation of large quantities of goods, making it ideal for businesses that deal with bulk shipments. It also provides efficient and cost-effective transportation, as it can consolidate multiple shipments into a single load. Additionally, freight delivery services often include tracking and insurance options, ensuring the security and visibility of goods throughout the transportation process. Ultimately, freight delivery streamlines logistics and enables businesses to reach their customers in a timely and reliable manner.",
    },
    {
      question: "What Is The Cost Of Freight Delivery?",
      answer:
        "The cost of freight delivery can vary depending on several factors, including the distance of transportation, the weight and dimensions of the freight, the mode of transportation (e.g., truck, rail, air, sea), any additional services required (e.g., packaging, insurance), and the specific carrier or logistics provider chosen. It is difficult to provide an exact cost without specific details. However, it is recommended to contact freight carriers or logistics Company to obtain accurate pricing information for your specific delivery requirements.",
    },
    {
      question: "What Are The Common Freight Delivery?",
      answer:
        "Common freight delivery methods include trucking, air freight, rail freight, and sea freight. Trucking is widely used for local and regional transportation, while air freight provides faster delivery over longer distances. Rail freight is suitable for transporting large volumes over land, and sea freight is ideal for international shipments and bulk goods. These methods offer different levels of speed, cost, and capacity to meet various shipping needs.",
    },
    {
      question: "Where Can I Get The Best Freight Delivery?",
      answer:
        "There are several reputable freight delivery Company that provide reliable services. Some of the top-rated options include UPS Freight, FedEx Freight, DHL Freight, XPO Logistics, and C.H. Robinson. Each of these Company offers a range of freight delivery solutions and has a strong track record in the industry. It's recommended to compare their services, rates, coverage areas, and customer reviews to determine which one best suits your specific needs.",
    },
    {
      question: "How to find the best Freight Delivery?",
      answer:
        "Finding the best freight delivery service involves several key considerations. Start by assessing your specific shipping requirements, including the type of goods, volume, and destination. Research and compare multiple freight carriers, considering factors such as reliability, reputation, pricing, transit times, tracking capabilities, and customer reviews. Request quotes and evaluate the overall value provided. Additionally, ensure the chosen freight delivery service aligns with your budget, offers insurance options, and provides excellent customer support.",
    },
    {
      question: "What should I look for when choosing a Freight Delivery?",
      answer:
        "When choosing a freight delivery service, there are several factors to consider. First, look for a company with a reliable track record and positive customer reviews. Ensure that they offer the transportation options you require, such as air, sea, or land freight. Consider their delivery speed, coverage area, and ability to handle your specific cargo. Price transparency, insurance coverage, and customer support are also essential aspects to evaluate before making a decision.",
    },
  ];

  return (
    <>
      <head>
        <title>Freight Delivery Mode of communication - Move It Solution</title>
        <meta
          name="description"
          content="Move It Solution offers some of the excellent freight delivery services providing successful and  solutions to various Freight Delivery Mode of communication.
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
              <li className="text-[#fa4612] text-nowrap">Freight Delivery</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Freight Delivery
              </h2>
              <p className="text-justify ">
                Move It Solution offers some of the excellent
                <span className="font-semibold">
                  {" "}
                  freight delivery services
                </span>{" "}
                providing successful and reliable transportation solutions to
                various types of businesses in virtually all industry types.
                Heavy emphasis has been given to the strongest customer
                satisfaction that made the move an excellent one among the
                trusted logistics industry players.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Freight-Delivery.webp"
                  alt="Image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                Move It Solution is proud of the streamlined process and
                transparent communication with its customers. Customers are
                allowed to track their shipments from pickup to final delivery
                and see first-hand exactly where the shipment is. The strong
                team of logistics experts ensure that each shipment is taken
                care of and handled with precise detail, thus minimizing damage
                and delays in transportation.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Freight Delivery
              </h2>
              <p className="text-justify ">
                One of the best freight delivery services is Move It Solution,
                good and safe, whose motto consists of excellence and customers'
                satisfaction. It has become the market share leader of the
                transport and logistics sector in terms of market shares.
                Businesses that must move goods from one place to another can
                rely on Move It Solution for its great care and efficiency in
                taking care of freights.
              </p>

              <p className="text-justify text-base my-5">
                First, Move It Solution is unique by their complete dedication
                to safety. From the very loading of cargo up to when it has
                already arrived at the destination without having suffered any
                loss, such transport falls under the services offered by the
                company. The on-site professionals are strictly adhering to the
                highly stringent protocols for their safety, besides the latest
                equipment used for the safe movement and delivery of goods.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution is a hallmark of reliability. From the display
                of competence that shows knowledge about the importance of
                punctuality and efficiency in freight delivery for businesses in
                maintaining their smooth-running operations, the extended and
                streamlined processes of Move It Solution guarantee services
                that meet deadlines and exceed expectations. Whether it's a
                small package or a big shipment, Move It Solution ensures it's
                executed with precision and reliability.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Freight Delivery
              </h2>
              <p className="text-justify text-base my-5">
                Best in
                <span className="font-semibold">
                  {" "}
                  freight delivery services {""}
                </span>
                from Move It Solution; the best freight delivery services will
                be of help in uniting businesses and individuals for effective
                transportation solutions that assure goods are delivered safely
                within time to destinations.
              </p>
              <p className="text-justify text-base my-5">
                At Move It Solution, our freight delivery package is tailored to
                every unique client. It could be full truckload FTL,
                less-than-truckload LTL, or even expedited shipping solutionswe
                can do it all. We work very closely with clients and get an
                under-inning of their needs from which we will develop a
                customized solution to help them change their supply chain for
                the better.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Courier Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Hire Move It Solution For dependable and economical
                  <span className="font-semibold">
                    {" "}
                    international courier services
                  </span>{" "}
                  Our customer service representatives are available 24 hours a
                  day, 7 days a week to keep our clients informed of the status
                  of their valued goods during the moving process.
                </p>
                <p className="text-justify text-base my-5">
                  Enjoy the best low-priced international courier service with
                  Move It Solution. We commit ourselves to providing with
                  cost-effective solutions that meet the needs of every person's
                  budgetary need and assure the safe delivery at the earliest
                  possible time.
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
