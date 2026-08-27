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
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  const accordionData = [
    {
      question: "What Are The Benefits Of  Supply Chain Company?",
      answer:
        "Supply chain companies provide a great deal of benefits. They not only make your business journey smoother but also help you to manage the supply chain. With the help of supply chain companies, it gets easier to eliminate guesswork and improve productivity by providing Procurement, Sourcing, Inventory Management, Warehousing, and Storage facilities. We at Move It Solution are an efficient packers, movers, and supply chain service company. Reach out to us today for best supply chain solutions.",
    },
    {
      question: "What Is The Cost Of Supply Chain Company?",
      answer:
        "The cost of a Supply Chain company is based on customer-specific needs and requirements. Scope of Services, Business Size and Complexity, Technology Integration and Customization along with additional services can affect the cost. For more details, you can contact us at  Move It Solution.",
    },

    {
      question: "What Are The Common Supply Chain Company?",
      answer:
        "Move It solution provides  Common Supply Chain Services like Procurement & Sourcing, Inventory Management, Warehousing & Storage, Order Fulfillment & Distribution with  Customs Clearance. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best Supply Chain Company?",
      answer:
        "Move It Solution is the best supply chain company due to a combination of industry experience, global outreach, and up-to-date technology. You can rely on us for reliable supply chain solutions. Thanks to our GPS tracking system and Logistics Supply Chain Management which ensures safe transit and storage of items. Sustainability is also another aspect of our services. We strive to promote green supply chain management practices along with reliable and safe supply chain solutions. ",
    },
    {
      question:
        "How to find the best Supply Chain Company?",
      answer:
        " To find the best supply chain company consider Identifying Your business Needs, Check Licensing & Compliance, Research & Compare Service Providers, look for Technology & Tracking Capabilities of the company, and check Safety & Insurance Coverage with reliable customer support.  ",
    },
    {
      question:
        "What should I look for when choosing an International Courier service?",
      answer:
        "Look for their year of Experience, Licensing, and Certifications, Evaluate Technology &  supply chain management, Verify Safety & Insurance Coverage, and check customer support.",
    },
  ];


  return (
    <>
      <head>
        <title> Best-In-Class Supply Chain Company: Move It Solutions
        </title>
        <meta
          name="description"
          content="If you are looking for the best supply chain company then contact Move It Solutions today. "
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
                 Supply Chain
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
                 Supply Chain
              </h2>
              <p className="text-justify ">
              One of the key aspects of business success lies in the management and coordination of its supply chain. Move It Solution understands this aspect very well that’s why we provide an integrated supply chain structure. No matter which region your business operates in,  we provide connectivity of the goods from the point of origin to the place of destination. Thus we offer outstanding and best Supply Chain services that help businesses to expand in a connected and globalized trade. 

              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/supply.webp"
                  alt=" Supply Chain"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
              Based on your requirements and needs we manage every stage of the supply chain. Transportation of Raw Materials, Finished Products, Machinery, and Equipment is easy with the help of Move It Solution. Whether you are sourcing or manufacturing we will give you top-class warehousing, transportation, and distribution services. We have an extensive network of reliable partners in different countries that help us to provide the best supply chain solutions.

              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe  Supply Chain
              </h2>
              <p className="text-justify ">
              Move It Solution offers the most dependable and safe supply chain solutions. We operate with the latest technology to manage the supply chain. Our tracking and monitoring systems are efficient and reliable which offers detailed information about shipments in real time. This level of transparency and clarity, helps us to remain the Best supply chain company. We eliminate guesswork and improve productivity by providing Procurement & Sourcing,  Inventory Management, Warehousing, and Storage facilities.
              </p>

              <p className="text-justify text-base my-5">
              Clearance and compliance with the regulatory authority can be a daunting experience. Hence Move It Solution offers customs clearance services that help in the documentation, regulations, and customs processes allowing you to feel peace of mind while doing business. We offer Flexibility and scalability in supply chain solutions as a result this helps our customers to avoid risks and delays. We understand that manufacturing supply chains can be difficult. Thus our services are designed to adapt to your evolving requirements. Whether you’re expanding to new markets, scaling up operations, or managing seasonal demands, we are the best supply chain company that helps you to keep your supply chain running efficiently.

              </p>
             
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best  Supply Chain
              </h2>
              <p className="text-justify text-base my-5">
              Move It Solution is the best supply chain company due to a combination of industry experience, global outreach, and up-to-date technology. You can rely on us for reliable supply chain solutions. Thanks to our GPS tracking system and Logistics Supply Chain Management which ensures safe transit of items. This transparency enables us to monitor the progress, predict delivery timelines, and manage the supply chain.
              </p>
              <p className="text-justify text-base my-5">
              Sustainability is also another aspect of our services. We strive to promote green supply chain management practices. Whether it is improving transportation routes or eliminating excessive use of packaging materials, we assist companies in reducing the negative externality of operating a business. Through our customer-centric approach, we try our best to understand customer needs and requirements that help us achieve desired supply chain targets. Reach out to us today and find out how we can help you to improve your supply chain operations. With years of experience in this field, we can assure you that we are the Best supply chain company. 

              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable  Supply Chain
                </h2>
                <p className="text-justify text-base mt-3">
                Hire Move It Solution for affordable Supply chain solutions. Feel the difference of working with a partner that you can trust. At Move It Solution we help businesses to improve their global positioning. Whether you are importing goods from third countries or exporting goods to overseas markets with our dependable logistics solutions, we offer complete supply chain support to remove all obstacles.
                </p>
                <p className="text-justify text-base my-5">
                The strength of our supply chain solutions is based on the global network we have. Partnering with all major trade cities, ports, and transporters helps us to connect the efficient routes between the continents. From Asia to Europe and America to the Middle East, Move It Solution has experienced human resources and industry equipment to handle all transportation.  No matter how complicated it gets our network allows us to stick to even the difficult requirements and minimizes delays and costs.
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
          className={`mb-5 transition-all duration-300 rounded-md ease-in-out ${activeIndex === index
            ? " shadow-[0px_14px_47px_0px_rgba(40,46,58,0.08)]"
            : ""
            } bg-white`}
        >
          <h6
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center text-left p-5 rounded-md  cursor-pointer transition-all duration-300 ease-in-out w-full  font-[600] text-base md:text-base bg-transparent relative font-[Plus Jakarta Sans] ${activeIndex === index
              ? ""
              : "custom-shadow"
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
