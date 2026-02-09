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
      question: "What Are The Benefits Of Transporter Service?",
      answer:
        "Transporter service provides a great deal of benefits. They not only make business operations smoother but also ensure fast and Reliable Delivery, Cost-Effective Logistics solutions enhance Supply Chain Efficiency, and provide global Reach & Market Expansion along with Real-Time Tracking & Transparency. ",
    },
    {
      question: "What Is The Cost of Transporter Service?",
      answer:
        "The cost of a Transporter service is based on distance, type of cargo, mode of transport, and urgency. Client-specific needs and requirements can also affect the cost. For more details, you can contact  Move It Solution.",
    },

    {
      question: "What Are The Common Transporter Services?",
      answer:
        "Move It solution provides Road Transport, Air Freight, Sea Freight, Rail Freight, and Specialized Transport For Unique and Hazardous Goods along with Customs Clearance and customer support. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best Transporter Service?",
      answer:
        "Move It Solution is the Best Transporter service provider because of its Global Reach & Strong Logistics Network.  We offer Multiple shipping options like express, standard, and economy services with full access to shipment details, tracking updates, and estimated arrival times. Sustainability is also one of the foundations of our service. Being a responsible logistics provider, Move It Solution has adopted green principles in all its services across countries. ",
    },
    {
      question: "HHow to find the best Transporter service?",
      answer:
        " To find the best Transporter service Identify Your Transportation Needs, Look for Tracking & Customer Support, Evaluate Their Safety & Insurance Policies along with safety, reliability, and cost-effective shipping facilities also evaluate Technology & Tracking Systems with customer support. ",
    },
    {
      question: "What should I look for when choosing a Transporter service?",
      answer:
        " Look for Reliability & Reputation, Service Coverage, Pricing & Hidden Costs, Transport Modes & Special Services, Safety & Insurance Tracking along with custom expertise and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title>
          Move It Solution: The Best Transporter Services Of All Time
        </title>
        <meta
          name="description"
          content=" Contact Move It Solutions today if you are looking for the best transporter services of all time and that too at affordable rates."
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
                Transporter service
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
                Transporter service
              </h2>
              <p className="text-justify ">
                Transporter services are essential to a company's growth since
                they are the foundation of international trade. They improve
                logistics and supply chain and guarantee quick and effective
                delivery. Move It Solution is an international transport
                services provider. We offer the Best Transporter services across
                all borders that guarantee safety and efficiency.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/transporter.webp"
                  alt="Image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                Do you want to enhance your business operations within national
                and international borders? Your one-stop solution is the Move It
                Solution. Due to our global presence and up-to-date technologies
                and equipment, we provide Best Transporter services.
              </p>

              <p className="text-justify text-base my-5">
                Move It Solution offers various international transportation
                services including air freight, ocean freight, interstate road,
                and rail services. Whether it is a perishable good or a
                non-perishable one, we Ensure Fast & Efficient Delivery. With
                the integration of all the transport modes, we make sure that
                even when the journey is complicated, the shipment reaches its
                destination as planned.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe international Transporter service
              </h2>
              <p className="text-justify ">
                Move It Solution is the most dependable and safe international
                Transporter service Company. We provide complete transparency in
                our transportation services therefore nothing is hidden from our
                customers. We offer tracking and progress updates, allowing
                businesses to follow the consignments every step of the way. We
                design effective planning regarding stock levels and their
                distribution period.
              </p>

              <p className="text-justify text-base my-5">
                You can trust the supply chain management of our company. Move
                It Solution focuses on customs clearance procedures, and trade
                compliance, and ensures appropriate documentation to facilitate
                your shipments across borders without a hurdle. Whether it is
                duty or tariff-related issues we ensure safe transit of goods.
                This efficiency and reliability in our home transport service
                make us capable of handling every single aspect of transport
                services to eliminate wasted hours and any other inconveniences.
                So, if you are looking to transport household goods then you can
                rely on Move It Solutions.
              </p>
              <p className="text-justify text-base my-5">
                We offer Extensive international coverage which helps us to get
                access to multiple shipping routes, ports, and transportation
                hubs for Seamless connectivity between air, sea, road, and rail
                transport. Whether it is a home transport service or
                international transport service we are reputable, trustworthy,
                and Best Transporter service providers. In our business, being
                transparent and communicating well is crucial.
              </p>
              <p className="text-justify text-base my-5">
                With total transparency and dependability, we guarantee a
                smooth, safe, and prompt delivery whether we are transporting
                business cargo, domestic products, or specialized goods. All
                shipments are handled and transported by ensuring safe
                operations across borders. We have heavy-duty packaging methods
                and all the necessary customs clearance documents for
                international shipping to ensure smooth delivery.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best international Transporter service
              </h2>
              <p className="text-justify text-base my-5">
                We are the Best international Transporter service provider
                because of our Global Reach & Strong Logistics Network. We offer
                Multiple shipping options like express, standard, and economy
                services with full access to shipment details, tracking updates,
                and estimated arrival times. Sustainability is also one of the
                foundations of our service. Being a responsible logistics
                provider, Move It Solution has adopted green principles in all
                its activities across countries.
              </p>
              <p className="text-justify text-base my-5">
                By optimizing routes, cutting down energy, and embracing less
                harmful modes of transport, we assist corporations in meeting
                their logistics targets while striving to contribute to
                environmental sustainability. Move It Solution is your reliable
                partner for global shipping of any type. We ease and enhance the
                efficiency of the logistics control process so that your
                business grows without fears of overspending. Get in touch with
                us now and see what we can do to assist you in international
                shipping.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Transporter service
                </h2>
                <p className="text-justify text-base mt-3">
                  The company Move It Solution has given great consideration to
                  the creation of overseas transporter services based on global
                  reach and local expertise. We utilize a network of some of the
                  major trade routes and international hubs to ensure that your
                  goods travel smoothly and reach their destination through
                  complementary connections across continents. Wherever you are
                  in the world, we work with suitable and trusted carriers and
                  agents to give the most efficient, timely, and best-secured
                  logistics solutions. Our team also understands all the
                  regulations and cultural peculiarities of regions and this
                  ensures smooth shipping no matter the origin or destination of
                  your cargo.
                </p>
                <p className="text-justify text-base my-5">
                  With you as Move It Solution, you partner with logistics that
                  involve every corner of your shipment. Coordination of
                  pickups, setting up multimodal transport, customs clearance,
                  and ending delivery are the essentials of a complete service
                  that we offer end to end. Single-window supply chains that we
                  provide allow you to concentrate on your business while we
                  take care of the whole kit and caboodle of international
                  shipping.
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
