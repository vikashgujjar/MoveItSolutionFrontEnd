"use client";
import { useState, useRef } from "react";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import LogisticsLeft from "../Components/LogisticsLeft";

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
      question: "What Are The Benefits Of Heavy Goods Transport Services?",
      answer:
        "Heavy Goods Transport services provide a great deal of benefits. They not only make your journey smoother but also help you to deliver your goods on time along with Freight Services like Handling larger shipments via air, sea, and land. With the help of Heavy Goods Transport services it gets easy and quick to transfer your bulky items from one country to another country. We at Move It Solution are an efficient packers, movers, and logistic service company. We have the largest number of networks and up-to-date technology that helps us to offer the best Heavy Goods Transport services worldwide ",
    },
    {
      question: "What Is The Cost Of Heavy Goods Transport Services?",
      answer:
        "The cost of Heavy Goods Transport services is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties and taxes along with additional service can affect the cost. For more details, you can contact the Move It solution.",
    },

    {
      question: "What Are The Common Heavy Goods Transport Services?",
      answer:
        "Move It solution provides Heavy Goods Transport services like Full Truckload (FTL) service  Oversized & Overweight Cargo Transportation, Containerized Cargo Transportation, and Heavy Equipment Transportation with Multi-Modal services like Road, Rail, Sea,  and Air along with Logistics Management and Cold Chain Logistics. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best Heavy Goods Transport Services?",
      answer:
        "Move It Solution has a global reach and advanced technology as a result we are the best heavy goods transport service provider. Thanks to our GPS tracking system, every shipment detail is up to the minute. This transparency enables us to monitor the progress, predict delivery timelines, and manage the supply chain. At Move It Solution we value the time and resources of our clients as a result you can trust us for complete International shipping and customs clearance for heavy goods. ",
    },
    {
      question: "How to find the best Heavy Goods Transport Services?",
      answer:
        " To find the best Heavy Goods Transport services consider Identifying Your Transport Needs, Check Licensing & Compliance, Research & Compare Service Providers, Evaluate Fleet & Equipment, Verify Safety & Insurance Coverage with Tracking systems, and look at how effective their customer support is. ",
    },
    {
      question:
        "What should I look for when choosing Heavy Goods Transport services?",
      answer:
        "Look for their year of Experience, Licensing, and Certifications, Evaluate Fleet & Equipment, Verify Safety & Insurance coverage, and check customer support.",
    },
  ];

  return (
    <>
      <head>
        <title>Move It Solutions: The Best in Heavy Goods Transport </title>
        <meta
          name="description"
          content=" If you are looking for the best heavy goods transport then contact Move It Solutions today and get a quote. 
"
        />
        <meta
          name="keywords"
          content="heavy goods transport, heavy goods transportation services, best heavy goods transport, hire affordable heavy goods transport
"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-5 md:px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] lg:text-nowrap">
                Heavy Goods Transport
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
                Heavy Goods Transport
              </h2>
              <p className="text-justify ">
                When it comes to Heavy Goods Transport carrying bulky items is a
                hard task. It requires a certain level of expertise, machinery,
                and planning. At Move It Solution, we understand this aspect as
                a result, we provide the most dependable Heavy Goods
                Transportation services. Whether it is home appliances,
                bulldozers, or oversized pipes, we make sure that your goods
                reach the desired location without loss.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Heavy.webp"
                  alt="Heavy Goods Transport"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                We have a modern fleet with heavy-duty vehicles, flatbeds, low
                loaders, and modular trailers to manage oversized and overloaded
                cargo. We ensure routine maintenance of our equipment and
                machinery to boost efficiency. Our drivers are well-trained and
                experienced, they know how to handle heavy loads in various
                terrains and weather conditions. Hire Move It solution for
                affordable heavy goods transportation services.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Heavy Goods Transport
              </h2>
              <p className="text-justify ">
                Move It Solution is the most dependable and safe heavy goods
                transport service provider. We prioritize safety and ensure
                proper management of heavy goods. Firstly our team communicates
                with clients to understand their needs and requirements then
                they analyze the available routes like road networks, maximum
                permissible weights, and the possible barriers.
              </p>

              <p className="text-justify text-base my-5">
                After that, we implement our planning to ensure secure cargo
                shipment to avoid any kind of displacements and damages during
                the entire trip. For the transportation of bulky items,
                adaptability and reliability is our utmost priority.
              </p>
              <p className="text-justify text-base my-5">
                We provide heavy good transport services solutions based on
                client requirements. Whether it is door-to-door delivery,
                port-to-site transportation, or multi-cargo logistics. Our team
                aims to deliver a transport strategy that is cost-effective,
                efficient, and trustworthy. Each transportation stage is taken
                care of by our trained staff thus providing a comprehensive
                understanding of the service. Whether it is customer
                regulations, documentation, or paperwork, heavy transportation
                is easy with Move It Solution. We are capable of addressing and
                solving all compliance needs. We are able to obtain the
                necessary permits and arrange escort services for bulky
                shipments. We pay attention to every single detail so that your
                cargo is transported while following international laws and
                regulations. This way we prevent unnecessary downtime and
                alleviate the tension.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Heavy Goods Transport
              </h2>
              <p className="text-justify text-base my-5">
                Move It Solution offers a global reach and an advanced
                technology network that makes us the best heavy goods transport
                service provider. Thanks to our GPS tracking system, every
                shipment detail is up to date. This transparency enables us to
                monitor the progress, predict delivery timelines, and manage the
                supply chain. At Move It Solution we value our customer's time,
                energy, and resources.
              </p>
              <p className="text-justify text-base my-5">
                We know that it's important for you to deliver your heavy goods
                on time with proper safety and precautions. Delays are costlier
                and can hinder business operations as a result we emphasize
                reliability and punctuality. With our well-coordinated logistics
                processes, you can trust us for complete International shipping
                and customs clearance for heavy goods. We stick to your
                schedules irrespective of the size and dimensions of the
                consignment.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Heavy Goods Transport
                </h2>
                <p className="text-justify text-base mt-3">
                  Hire move It Solution for affordable heavy good transport
                  services. Feel the difference of working with a partner that
                  you can trust. With a global network of advanced machinery,
                  years of expertise, and profound dedication toward customer
                  service, we are in high demand among companies all over the
                  world. Call us right now to learn how we can add value to your
                  life and learn how to make the transportation of heavy goods
                  easier and more efficient.
                </p>
                <p className="text-justify text-base my-5">
                  With proper equipment and thorough knowledge of the logistics
                  and operational techniques we at Move It Solution are pleased
                  to offer a step solution to all your transportation of
                  oversized and heavy cargo. Right from the intake of the order
                  to the end delivery, our team will take care of everything you
                  need.
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
