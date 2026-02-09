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
      question: "What Are The Benefits Of Moving Abroad?",
      answer:
        "Moving abroad will give an individual some cultural immersion, personal growth, and expanded horizons. It offers the experience of discovering other custom and traditions and speech, which provides a difference in world outlook. Living in another country develops adaptability, independence, and resilience. Moreover, it gives a chance to develop a global network, new opportunities for career development, and improvement of resumes. A greater appreciation of diversity and the understanding of other cultures is also a potential consequence of moving abroad.",
    },
    {
      question: "What Is The Cost Of Moving Abroad?",
      answer:
        "The cost of expatriation will depend mainly on the destination country, the distance to be covered, the volume of stuff to be transported, visa fees, transportation costs, and other expenditures that may range from housing, healthcare, and living costs. It is very hard to give a precise figure without these additional details. The latter, however, involves major costs, beginning with travel fare and shipping expense to visa application fee and relocation costs, all of which must be diligently planned for.",
    },
    {
      question: "What Are The Common Moving Abroad?",
      answer:
        "Some of the most common reasons that people move to other countries include seeking better career opportunities, a better quality of life, or exposure to another culture. Other reasons may include pursuing higher education or further research opportunities, joining a partner or family, or perhaps for pure adventure and the new challenges of living a new lifestyle.",
    },
    {
      question: "Where Can I Get The Best Moving Abroad?",
      answer:
        "Thus, many countries offer high opportunities for people who move abroad. Some of the famous destinations have included a strong economy and diversely melting post like Canada; a highly standard life with outdoor lifestyle as found in Australia; and a robust job market and good health care system like Germany. After all, every country differs in its specific advantages; however, it is equally important to know through research which country will be most fitting for your needs, lifestyle, and job prospects-plus-immigration policies.",
    },
    {
      question: "How to find the best Moving Abroad?",
      answer:
        "Getting the best Moving Abroad would call for extensive research and reflection. First, identify your priorities: job prospects, good quality of life, cost of living, and compatibility with the culture. Look into possible destinations. Keep an eye on the economy, safety, healthcare, and immigration policies. Share information through online forums or communities with other expats. Visit the countries shortlisted. Generally speaking, find a place that serves your purposes and ideals toward a successful Moving Abroad.",
    },
    {
      question: "What should I look for when choosing a Moving Abroad?",
      answer:
        "Other paramount factors of the final decision on a Moving Abroad are the prevalence of a language barrier, cost of living, employment, the various different cultural ethos, healthcare facilities, safety, visa requirements, and education opportunities. Economic, climatic, lifestyle, and social environment must also be looked into. The quality of life, housing, transportation infrastructure, and facilities must be analyzed. Tastes, preferences, and priorities of a person must also be taken into account so that the country chosen is congruent with one's purpose in his moving abroad.",
    },
  ];

  return (
    <>

<head>
        <title> Moving Relocation Services in Abroad |Move It Solution
        </title>
        <meta
          name="description"
          content="Move It Solution provides full relocation for individuals seeking to move abroad with our Moving Relocation Services in Abroad. We ensure an easy move service.
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
              <li className="text-[#fa4612] text-nowrap">Moving Abroad</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Moving Abroad
              </h2>
              <p className="text-justify ">
                Move It Solution provides full relocation for individuals
                seeking to move abroad with our
                <span className="font-semibold"> Moving Abroad</span> Services.
                We ensure an easy move to your new location when you hire our
                company for relocation services. The moving company understands
                the problem of moving to another country, and we are here to
                make it easier for you.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Moving-abroad.webp"
                  alt="Image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                At Move It Solution, we stress on personal customer service,
                ensuring that your unique needs are met. To do that properly
                adapt our services to meet your needs, we carefully collaborate
                with you to understand them. Our vast network of partners and
                resources makes possible the provision of efficient and
                Cost-effective solutions.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe Moving Abroad
              </h2>

              <p className="text-justify ">
                When one considers relocating abroad, it is very important to
                identify a reliable and safe move solution to make the process
                quite smooth and hassle-free. In this sense, the company ensures
                the reliability, security, and professionalism that the movement
                will involve. Indeed, Move It Solution stands as a leader in the
                industry with regards to its commitment to delivering the most
                dependable and safe Moving Abroad.
              </p>

              <p className="text-justify text-base my-5">
                The key reason Move It Solution stands apart is the several
                years of experience in international relocation. They understand
                the intricacies involved during relocation across borders due to
                the various years of experience. Move It Solution also has
                access to a wide network of trusted partners and agents across
                the world.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution reliability accounts for their promise to
                ensure they move goods on time. Being somewhere else immediately
                for one reason or another, whether it happens because of job
                requirements, personal circumstances or others, involves a sense
                of urgency to relocate. They help deliver your move smoothly and
                as stress-free as possible by employing efficient planning,
                meticulous coordination and dedicated customer support.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Moving Abroad
              </h2>
              <p className="text-justify text-base my-5">
                The
                <span className="font-semibold"> best moving abroad</span>
                {""} requires consideration of various different factors. It
                begins with proper research to find a place that fits all your
                personal goals and preferences. Some of the critical factors
                include job opportunities, quality of life, cultural
                compatibility, and safety. Equally important are the
                considerations of the immigration process and the requirements
                involved.
              </p>
              <p className="text-justify text-base my-5">
                We have a Moving Abroad package at Move It Solution that is
                tailored to every unique client. It could be full truckload FTL,
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
                  <span className="font-semibold"> Moving Abroad</span> Our
                  customer service representatives are available 24 hours a day,
                  7 days a week to keep our clients informed of the status of
                  their valued goods during the moving process.
                </p>
                <p className="text-justify text-base my-5">
                  Affordable Moving Abroad: Efficient relocation solutions at
                  low cost. Simplify your international move with our reliable
                  services. Trust our expertise in handling logistics, customs,
                  and paperwork. Have a pleasant transition to your new house.
                  Contact us today for affordable and hassle-free solutions.
                  Move it now!
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
