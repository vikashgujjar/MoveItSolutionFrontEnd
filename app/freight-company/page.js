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
      question: "What Are The Benefits Of Freight Company?",
      answer:
        "Freight Company offers several benefits in the transportation industry. First, they offer shipping services on time and conveniently for their clients. They are mastery tools in managing logistics; routes are optimized to reduce transportation costs. Freight Company offers tracking and tracing capabilities so that customers can track their shipment in real-time. They also take care of such clerical tasks as documentation, customs clearance, thus saving clients a great deal of time and effort. Overall, freight companies make the shipping process more efficient and enhance supply chain operations.",
    },
    {
      question: "What Is The Cost Of Freight Company?",
      answer:
        "The freight Company cost can vary due to several factors, such as distance of shipment, weight and dimension of the goods, mode of transportation, trucking, air freight, ocean freight, additional services, packaging, insurance, and some special handling requirements. It is a bit difficult to be specific about the cost without more information. It is thus suggested to contact freight Company directly and solicit quotation based on one's needs while shipping in order to have an exact account of cost.",
    },
    {
      question: "What Are The Common Freight Company?",
      answer:
        "Common freight Company among the well-known names are UPS, FedEx, DHL, and Maersk. These Company offer a wide range of freight services, including domestic and international shipping, air freight, ocean freight, and ground transportation. They have a very extensive network with massive infrastructure to handle a variety of cargo and provide tracking and logistics solutions. Regional and local freight Company then specialize in particular regions or industries with better knowledge and specialized services and expertise in those markets.",
    },
    {
      question: "Where Can I Get The Best Freight Company?",
      answer:
        "The best freight Company would depend on your location, and, more importantly, on specific needs for the freight you want to transport. Still, based on the above review, there are several companies that can be relied on for quality freight services. Amongst such is UPS Freight, FedEx Freight, XPO Logistics, DHL Freight, and C.H. Robinson. It is advisable to do research and compare these companies based on your requirements to get the best one for you.",
    },
    {
      question: "How to find the best Freight Company?",
      answer:
        "To find the best freight Company, consider factors such as reputation, reliability, pricing, range of services, customer reviews, and industry experience. Conduct thorough research, compare multiple providers, and request quotes. Additionally, seek recommendations from trusted sources or industry professionals to ensure you choose a reputable and efficient freight company.",
    },
    {
      question: "What should I look for when choosing a Freight Company?",
      answer:
        "When choosing a freight company, consider the following factors: reliability, experience, range of services, coverage area, tracking capabilities, pricing, customer support, reputation, safety measures, and any specific requirements or specialties that align with your shipping needs.",
    },
  ];

  return (
    <>
      <head>
        <title>Logistics Freight Company Transportation - Move It Solution
        </title>
        <meta
          name="description"
          content="Move It Solution is specializes in efficient and reliable transportation services. With our extensive network of carriers Freight Company Transportation Service"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">Freight Company</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Freight Company
              </h2>
              <p className="text-justify ">
                Move It Solution is a best{" "}
                <span className="font-semibold"> freight company </span> that
                specializes in efficient and reliable transportation services.
                With our extensive network of carriers and advanced logistics
                technology, we ensure seamless movement of goods across local
                and international destinations. From air and ocean freight to
                road transportation, we offer tailored solutions to meet your
                specific shipping requirements. Our dedicated team of
                professionals ensures timely delivery, transparent tracking, and
                exceptional customer service. Experience hassle-free freight
                management with Move It Solutions, your trusted logistics
                partner.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Freight-company.webp"
                  alt="Image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                Move It Solution understands the importance of technology in
                modern freight logistics. With state-of-the-art tracking systems
                and advanced software solutions, they provide real-time
                visibility into shipments, allowing clients to monitor their
                cargo throughout the transportation process. This level of
                transparency and communication ensures peace of mind and enables
                timely decision-making.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-[30px] mb-5  font-semimedium">
                The Most dependable and safe Freight Company
              </h2>
              <p className="text-justify ">
                One such company is Move It Solution. With years of industry
                experience, Move It Solution has established itself as a trusted
                name in the freight transportation sector. They have built a
                solid reputation for their commitment to delivering shipments on
                time and in excellent condition. By employing a network of
                skilled professionals and utilizing advanced tracking
                technologies, Move It Solution ensures that their clients have
                complete visibility and control over their shipments throughout
                the entire transportation process.
              </p>

              <p className="text-justify text-base my-5">
                Safety is a top priority for Move It Solution. They adhere to
                strict safety protocols and invest in state-of-the-art security
                measures to protect the goods entrusted to them. From the moment
                a shipment is received until it reaches its destination, Move It
                Solution takes every necessary precaution to prevent damage,
                theft, or any other mishaps. Their trained personnel handle the
                loading, unloading, and securing of cargo with precision and
                care.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution also places a strong emphasis on customer
                satisfaction. They offer personalized service, tailored to meet
                the unique requirements of each client. Whether it's handling
                delicate and sensitive items or managing large-scale shipments,
                they have the expertise and resources to handle diverse needs.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Freight Company
              </h2>
              <p className="text-justify text-base my-5">
                Move It Solution is the
                <span className="font-semibold"> best freight company</span>
                {""} which provide overall freight solutions to include domestic
                and international shipping, warehousing, logistics management,
                and supply chain optimization. They believe that prompt delivery
                is indispensable and have proven record of on-time delivery
                while taking all measures to safeguard your cargo.
              </p>
              <p className="text-justify text-base my-5">
                One of the big strengths of Move It Solution is customer
                satisfaction. The company considers open communication and
                transparency, as well as individually focused attention on
                clients' unique requirements, important priorities. A team of
                professionals, adequately knowledgeable and dedicated to
                high-quality service, makes shipping a burden-free and efficient
                process.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl font-semimedium">
                  Hire Affordable Freight Company
                </h2>
                <p className="text-justify text-base mt-3">
                  Hire Move It Solution For reliable and cheap
                  <span className="font-semibold"> Freight Company</span> Our
                  customer service representatives are available 24 hours a day,
                  7 days a week to keep our clients informed of the status of
                  their prized goods during the moving process.
                </p>
                <p className="text-justify text-base my-5">
                  Enjoy the best low-priced international courier service with
                  Move It Solution. We commit ourselves to providing with
                  cost-effective solutions that meet the needs of every person's
                  budgetary need and assure the safe delivery at the earliest
                  possible time
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
