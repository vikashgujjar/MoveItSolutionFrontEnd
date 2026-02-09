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
      question: "What Are The Benefits Of International Moving Company?",
      answer:
        "When it comes to relocating domestically or internationally, there is no doubt that an international moving company has its advantages over an individual trying to do all the packing and moving. First of all, they have dealt with international relocations more often than not so one does not need to worry about the smoothness of the process. This is to say, proper packing and handling of one’s properties would be carried out to avoid damage to one’s properties. Moreover, they also have several custom brokers and freight forwarders worldwide, which allows them to deal with the customs and logistics problems very well. Lastly, international moving companies are supposed to make one’s life much simpler and alleviate anxiety as you have to think only in moving and not doing other things at the same time.",
    },
    {
      question: "What Is The Cost Of International Moving Company?",
      answer:
        "The prices for international relocation services offered by Move It Solution are subject to change based on various factors like the location of the move, the packaging and weight of the goods, time schedule of the delivery, and extra services. For a precise estimation of how much a particular move would cost please call the office of Move It Solution. Depending on your needs, we will determine the best course of action and offer you an attractive and tailored pricing for your International Moving Company.",
    },
    {
      question: "What Are The Common International Moving Company?",
      answer:
        "Having all the necessary information about the World moving company Chicago you need, how does the custom ordering process work? Move It Solution as with any other international moving companies offers express, standard and economy delivery services. Such services normally comprise of package pick-up, safe packaging, documentation assistance, custom settlement and final delivery to the respective client in the foreign country. Move It Solution makes sure that packages are transported effectively and efficiently offering dependable and practical solutions to packages transport across countries.",
    },
    {
      question: "Where Can I Get The Best International Moving Company?",
      answer:
        "If you want the best International Moving Company, you do not need to go any further than Move It Solution. Owing to our worldwide reach and the reliability, safety, and timeliness of our services, we provide excellent shipping solutions. The customs clearance is handled by our team of professionals who also secure the packages and track them in order to give the clients some peace of mind. Allow Move It Solution to handle your international cargo transport and you can be assured of prompt and professional service.",
    },
    {
      question: "How to find the best International Moving Company?",
      answer:
        "When looking for the perfect International Moving Company, search for the following aspects. Seek for an international provider boasting of an impressive network across the globe, secure handling of freight and customs clearance.  Also essential are, punctual delivery, ability to track shipments and the availability of clear price quotations among other things. Besides these, pay attention to the feedback from customers, observe how responsive their customer care is, and analyze their additional services. Move It Solution has all these aspects, presenting a dependable, safe and effective International Moving Company fit for your needs exactly.",
    },
    {
      question:
        "What should I look for when choosing a International Moving Company?",
      answer:
        "While choosing an International Moving Company provider, reliability, coverage, safe handling, timeliness, customs clearance, tracking the shipment, and customer support are some factors to take into account. Look for a well-established company whose services, prices, and other customer feedback are all favorable. Move It Solution is all of this and more, providing a reliable International Moving Company with an extensive scope of services including safe International Moving Company, efficient customs handling, shipment tracking, and quality customer services.",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">
                International Transport Services
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
                International Transport Services
              </h2>
              <p className="text-justify ">
                Move It Solutions is a leading
                <span className="font-semibold">
                  international moving company
                </span>
                {""} with seamless relocation services across borders. With a
                trustworthy network of associates on the ground all over the
                globe, we can ensure a smooth transfer for the individual,
                family, or business relocating overseas. From packaging and
                transportation to clearing customs and delivery at the new
                destination, we are professionals at managing every step of the
                relocation process.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/International-moving-company.webp"
                  alt="Image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                At Move It Solutions, we understand these unique challenges of
                international relocation and can come up with specific solutions
                based on the clients' needs. Our professionals offer full
                assistance, ensuring that all documentations and paperwork are
                effectively completed, in order to seal in the highest safety
                and security for the belongings of our clients.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The Most dependable and safe International Moving Company
              </h2>
              <p className="text-justify ">
                Moving It Solutions is the standard of dependability and
                security among international moving companies. With a remarkable
                track record, we have defined ourselves as the most reliable in
                the business. Our stake is customer satisfaction; we take care
                to ensure no moment of stress in the smoothest process of
                moving.
              </p>

              <p className="text-justify text-base my-5">
                We take good care of your possessions because, well, they're
                precious. They will thus be safe with us at every step in the
                procedure. We have highly skilled professionals who use modern
                techniques and tools to handle goods pertaining to you
                carefully. Be it fragile furniture or valuable pieces of artwork
                or electronics, we have the right kind of expertise to pack and
                haul these items safely to your destination.
              </p>
              <p className="text-justify text-base my-5">
                We at Move It Solution provide services that have been designed
                according to clients' needs. From the efficient packing and
                loading, to documenting custom and taking care of door-to-door
                delivery, we provide attention and professionalism to every
                detail in our international moving.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best International Moving Company
              </h2>
              <p className="text-justify text-base my-5">
                The leading
                <span className="font-semibold">
                  {" "}
                  international moving service
                </span>
                {""} offering all relocation solutions is Move It Solution.
                Thanks to our knowledge and experience in the relocation field,
                we are capable of providing individuals and companies with an
                easy and worry-free experience of professional moving. Members
                of our team have vast experience concerning international
                logistics, customs and worldwide freight shipment, thus making
                sure your relocation will be comfortable.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution believes that each packing and moving process
                is different, and therefore we adjust our services according to
                your needs. Be it careful and packing, safe transport or fast
                customs clearance and delivery, we pay equal attention to every
                single component of your international relocation. With a strong
                network of reputed partners and agents, we are able to offer you
                the most dependable and economical means of traveling to any
                part of the world.
              </p>
              <p className="text-justify text-base my-5">
                Focusing on customer service, we make it our mission to do our
                best in every single aspect of the moving process. Being
                committed to quality and reliability at competitive prices
                positioned us as the top rated international movers in the
                industry. Next time you are moving internationally, choose Move
                It Solutions and we won’t leave any stone unturned in making the
                relocation a success.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Moving Company
                </h2>
                <p className="text-justify text-base mt-3">
                  Move It Solution is the most trustworthy and affordable
                  <span className="font-semibold">
                    {" "}
                    international moving company
                  </span>{" "}
                  you can get. We understand the importance of keeping our
                  clients updated on the movement of their precious goods.
                  Therefore, our customer service agents are available 24 hours
                  a day, seven days a week to receive and relay information to
                  our clients.
                </p>
                <p className="text-justify text-base my-5">
                  Hire the services of an international moving company at a low
                  price today! Enjoy the perfect relocation of your possessions
                  without a bother. We have a team of specialists who provide
                  international moving services at very affordable rates without
                  stress. Your motivations to move whether for work, personal
                  reasons or otherwise are all valid. Speak to us now for an
                  affordable and stress-free moving service and you can be sure
                  that these will be the last difficult steps before the move.
                  Do not wait any longer, make a reservation for your move
                  already!
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
