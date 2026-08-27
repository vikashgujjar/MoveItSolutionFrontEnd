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
      question: "What Are The Benefits Of Parcel Services?",
      answer:
        "Parcel Services provides a great deal of benefits. They not only make your journey smoother but also help you to deliver your parcel on time along with Freight Services like Handling larger shipments via air, sea, and land. With the help of a Parcel Service firm, it gets easy and quick to transfer your courier from one country to another country. We at Move It Solution are an efficient packers, movers, and logistic service company. We have the largest number of networks and up-to-date technology that helps us to offer the best  parcel delivery services worldwide.",
    },
    {
      question: "What Is The Cost Of  Parcel Services?",
      answer:
        "The cost of Parcel services is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties and taxes along with additional service can affect the cost. For more details, you can contact the Move It solution.",
    },

    {
      question: "What Are The Common  Parcel Services?",
      answer:
        "Move It solution provides parcel services like express delivery, standard delivery, and economy delivery along with package pick-up, secure packaging, documentation assistance, customs clearance, and timely delivery to international and national destinations. For further details regarding the best parcel services contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best  Parcel Services?",
      answer:
        "An experienced and best Parcel Services firm, Move It Solution provides the most reliable and trustworthy options for delivering packages around the world. Due to our global network coverage, we have an efficient procedure in handling customs clearance procedures that will avoid delays and complications. We adhere to high industrial standards that ensure secure packaging and handling. We provide advanced tracking technology that helps our customers track the parcels in real-time, ensuring transparency in our operations.",
    },
    {
      question: "How to find the best  Parcel Services?",
      answer:
        "To find the best parcel services consider checking their Experience & Global Network. Ask about Insurance & Tracking systems, and look at how effective their customer support is. You can also check their Reviews & Ratings.",
    },
    {
      question: "What should I look for when choosing  Parcel Services?",
      answer:
        " Look for their year of Experience, Licensing, and Certifications, and the services that they offer check Insurance Coverage, Customs expertise, and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title> Best Parcel Services In the Industry: Move It Solutions </title>
        <meta
          name="description"
          content="If you are looking for the best parcel services in the market then contact Move It Solutions today. "
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-5 md:px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] lg:text-nowrap">Parcel Services</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Parcel Services
              </h2>
              <p className="text-justify ">
                In the era of rapid globalization, the need to send and receive
                parcels from national and international borders is an integral
                part of a business. Whether you want to send a present to a
                friend, who lives in a different country or want to ship orders
                to clients, Move It Solution has all the Parcel solutions that
                will effectively serve your needs and requirements.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/parcel-service.webp"
                  alt=" Parcel Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                We provide the highest level of assurance and reliability. With
                the growing interconnectedness between countries seamless and
                quick delivery of parcels plays a huge role. We at Move It
                Solution are dedicated to providing the best parcel services and
                the best parcel delivery options. Whether it is domestic or
                international shipping, express delivery, tracking, and
                door-to-door service, Move It Solution caters to the needs of
                businesses and individuals ensuring timely and secure delivery
                of goods.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Parcel Services
              </h2>
              <p className="text-justify ">
                We at Move It Solution are the most dependable and safe parcel
                service providers as we offer global coverage and an up-to-date
                tracking facility. Thanks to our global connections and
                partnership across countries and continents we guarantee that
                your parcel will be delivered to the defined destination with
                full safety and high industrial standards.
              </p>

              <p className="text-justify text-base my-5">
                Whether it is a big city or a remote area our skilled and
                trained staff ensures the best parcel delivery services. Our
                extensive global outreach helps us to tackle even the most
                difficult delivery challenges. Reliability, security, and a
                commitment to customer satisfaction are our top priorities.
                Therefore, Move It Solution has achieved a tremendous reputation
                in this field. With years of Experience in parcel services, and
                through our vast global network, we provide the best parcel
                services.
              </p>
              <p className="text-justify text-base my-5">
                We are capable of offering the most reliable and efficient
                international shipping services to various destinations
                worldwide. We will take care of your packages with expertise, so
                you can depend on us. We take complete care of your
                consignments, from the moment of despatch to the delivery date.
                We ensure that the shipment is taken care of and shifted by
                industry leaders who have acquired comprehensive know-how to
                deal with things in a completely safe manner. Our packaging
                techniques are reliable and all the customs documents of
                international customs Clearances are in place to ensure
                hassle-free delivery. Your parcels are in safe hands with Move
                It Solution.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Parcel Services
              </h2>
              <p className="text-justify text-base my-5">
                An experienced and best Parcel Services firm, Move It Solution
                provides the most reliable and trustworthy options for
                delivering packages around the world. Due to our global network
                coverage, we have an efficient procedure in handling customs
                clearance procedures that will avoid delays and complications.
                We adhere to high industrial standards that ensure secure
                packaging and handling. We provide advanced tracking technology
                that helps our customers track the parcels in real-time,
                ensuring transparency in our operations.
              </p>
              <p className="text-justify text-base my-5">
                Choose Move It Solution as we provide the best Parcel Services.
                Our global network, secure handling, efficient customs
                clearance, and advanced tracking guarantee the Best parcel
                delivery. Trust our commitment to customer satisfaction,
                professionalism, and attention to detail for a seamless shipping
                experience. For the best parcel collection and delivery service
                contact us at Move It Solution. We put a lot of effort into
                understanding the demands of our customers so that we can create
                the best parcel delivery procedures and strategies that meet
                their objectives.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Parcel Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Hire Move It Solution For dependable and economical
                  <span className="font-semibold"> Parcel Services</span> Our
                  customer service representatives are available 24 hours a day,
                  7 days a week to keep our clients informed of the status of
                  their valued goods during the moving process.
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
