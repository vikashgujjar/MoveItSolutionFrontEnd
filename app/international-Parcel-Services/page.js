"use client";
import { useState, useRef } from "react";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

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
      question: "What Are The Benefits Of International Parcel Services?",
      answer:
        "International Parcel Services provides a great deal of benefits. They not only make your journey smoother but also help you to deliver your parcel on time along with Freight Services like Handling larger shipments via air, sea, and land. With the help of International Parcel Services, it gets easy and quick to transfer your courier from one country to another country. We at Move It Solution International are an efficient packers, movers, and logistic service company. We have the largest number of networks and up-to-date technology that helps us to offer the best international parcel delivery services worldwide",
    },
    {
      question: "What Is The Cost Of International Parcel Services?",
      answer:
        "The cost of International Parcel services is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties and taxes along with additional service can affect the cost. For more details, you can contact the Move It solution.",
    },
    {
      question: "What Are The Common International Parcel Services?",
      answer:
        "Move It solution provides International parcel services like express delivery, standard delivery, and economy delivery along with package pick-up, secure packaging, documentation assistance, customs clearance, and timely delivery to international destinations. For further details contact us at Move It Solution.",
    },
    {
      question: "Where Can I Get The Best International Parcel Services?",
      answer:
        "Move It Solution International provides the best International Parcel Services because we are not only efficient but reliable parcel delivery service providers. We cater to the needs of both individuals as well as businesses. Our skilled and knowledgeable staff makes sure that our clients receive their packages without any problems",
    },
    {
      question: "How to find the best International Parcel Services?",
      answer:
        "To find the best International parcel services consider checking their Experience & Global Network. Ask about Insurance & Tracking systems, and look at how effective their customer support is.",
    },
    {
      question:
        "What should I look for when choosing a International Parcel Services?",
      answer:
        "Look for their year of Experience, Licensing and Certifications, and the services that they offer check Insurance Coverage, Customs Expertise and customer support.",
    },
  ];

  return (
    <>
      <head>
        <title>
          Most Efficient International Parcel Services: Move It Solutions
        </title>
        <meta
          name="description"
          content="If you are finding one of the best parcel services in the industry, then get a quote from Move It Solutions now. "
        />
        <meta
          name="keywords"
          content="International Parcel Services, best international parcel service, sending parcels abroad, international parcel delivery, parcel to go international, worldwide parcel delivery service, parcel international contact."
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
                International Parcel Services
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
                International Parcel Services
              </h2>

              <p className="text-justify ">
                <span className="text-black">
                  International Parcel Services{" "}
                </span>{" "}
                are the savior for both individuals as well as businesses; they
                not only help you to deliver your parcel on time but also give
                Freight services like Handling larger shipments via air, sea, or
                land. Hence in International trade and the e-commerce market
                International Parcel services play a crucial role.
              </p>
              <p className="text-justify ">
                We at Move It Solution International are an efficient packers,
                movers, and logistic service company. We have the largest number
                of networks and up-to-date technology that helps us to offer the
                best international parcel delivery services worldwide.
              </p>
              <div className="my-8">
                <Image
                  src="/Images/img/International-parcel-Services.webp"
                  alt="International Parcel Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                Our top international parcel services are quick and easy,
                guaranteeing safe and convenient package delivery. We give
                precise tracking information and handle your package with care,
                regardless of its size. Our staff of knowledgeable and helpful
                experts is committed to providing you with the best
                international package delivery services. You can rely on Move It
                Solution International. We are the most trustworthy and
                efficient worldwide parcel delivery company.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most Dependable and Secure International Parcel Services
              </h2>
              <p className="text-justify ">
                Move It Solution International is the most dependable and secure
                International Parcel delivery service company. Customers ranked
                us as one of the best international parcel service providers.
                Our motto is to satisfy customer needs and fulfill their
                expectations. And we have a dedicated team of professionals who
                work diligently to provide the best international parcel
                services.
              </p>

              <p className="text-justify text-base my-5">
                Move It Solution International is committed to providing safety
                and reliability when it comes to International Parcel Services.
                We have evolved our delivery process in such a way that each
                parcel reaches its international or national destination on time
                with safety. Parcel security and integrity are our top
                priorities.
              </p>
              <p className="text-justify text-base my-5">
                We guarantee that each cargo is handled carefully. As a result,
                we offer packaging and transportation methods that are
                industry-leading to lower the possibility of loss and damage.
                Our trained professional uses an advanced tracking system to
                monitor the parcel throughout the delivery. It ensures that your
                parcels are packed and transported efficiently to reach their
                destination in an expected time frame.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best International Parcel Services
              </h2>
              <p className="text-justify text-base my-5">
                Move It Solution International provides the Best International
                Parcel Services why?
              </p>
              <p className="text-justify text-base my-5">
                Because we are not only efficient but reliable
                <span className="font-semibold">
                  {" "}
                  worldwide parcel delivery service
                </span>
                {""} providers that cater to the needs of both individuals as
                well as businesses. Our skilled and knowledgeable staff makes
                sure that our clients receive their packages without any
                problems. We put a lot of effort into understanding the demands
                of our clients so that we can create delivery procedures and
                strategies that meet their objectives.
              </p>
              <p className="text-justify text-base my-5">
                We understand that international parcel delivery is not an easy
                job. We have to take care of many things like time, security,
                and trust. As a result, we build strong relationships with
                customers so that they can fully rely on us.
              </p>
              <p className="text-justify text-base my-5">
                Our various shipping options cater to the different needs of our
                customers from urgent shipments to cost-effective economy
                shipping. We provide numerous options to our customers. They can
                also track the parcels in real real-time which provides them
                peace of mind throughout the shipping process. Hence delivering
                your parcel in time with efficiency across international borders
                is our duty.
              </p>
              <p className="text-justify text-base my-5">
                For the best international parcel delivery services, you can contact us at Move It Solution International. We offer extensive global coverage, reliable delivery, and multiple shipping options. Whether you want to deliver personal items or business goods, you can trust Move It Solution International.  
                </p>
            </div>
          </div>
          <div className="lg:col-span-4 ">
            <aside className="sidebar-area sticky top-20">
              <LeftService />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Parcel Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Hire Move It Solution For dependable and economical Availing
                  Move It Solution will ensure that you receive remarkable and
                  affordable{" "}
                  <span className="font-semibold">
                    {" "}
                    international parcel services
                  </span>{" "}
                  . Our customer care representatives are available 24/7 so as
                  to update our clients on the movement and safety of their
                  commodities throughout the relocation exercise.
                </p>
                <p className="text-justify text-base my-5">
                  In Move It Solution, we acknowledge that cost-effective and
                  fast international shipping is essential in any business. This
                  means that whether you are dispatching a small envelope or a
                  bulky commercial load, we have solutions for both corporate
                  and retail customers. With the vast network of partners and
                  the logistics knowledge we have, we guarantee you that your
                  parcels will arrive on time and in good condition at the
                  indicated address.
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
