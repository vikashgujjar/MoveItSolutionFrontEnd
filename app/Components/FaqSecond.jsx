"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const FaqSecond = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked item
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  const accordionData = [
    {
      sr: "1",
      question: "How do I hire the best movers and packers for international moves?",
      answer:
        "Search for companies that have experience in overseas moves. Look for reviews, compare the services, and ensure they are clear with their pricing. At Move It Solution, we provide professional support and transparent pricing to make your move easy.",
    },
    {
      sr: "2",
      question: " Does Move It Solution pack for international moving?",
      answer:
        "Yes, we can pack for international moving. Our team uses high-quality materials to keep your belongings safe during the move.",
    },
    {
      sr: "3",
      question:
        "What is the international move cost?",
      answer:
        "The cost of an international move depends upon distance, size of movement, and the services required by you. We give a detailed quotation so that you know the exact cost.",
    },
    {
      sr: "4",
      question: "Is international shifting safe with Move It Solution?",
      answer:
        "Yes! We use best packing techniques and have very trusted shipping partners who would ensure safety of your goods throughout movement.",
    },
    {
      sr: "5",
      question: "What services do you offer for international relocation?",
      answer:
        "We can take care of all your needs-from packing and shipping to clearing customs and delivery. We also offer storage and other services upon request.",
    },
    {
      sr: "6",
      question: "Could you provide more information on the containers you use?",
      answer:
        "Move It Solution utilizes standardized shipping containers for efficient and secure transportation. These containers are commonly known as intermodal containers or ISO containers. They are built to international standards, allowing for seamless transfer between different modes of transportation, such as ships, trains, and trucks. ISO containers come in various sizes, including 20-foot and 40-foot lengths, and are made of durable materials like steel or aluminum. They provide a reliable and standardized solution for the transportation and storage of goods.",
    },
  ];

  return (
    <div className="accordion px-5 md:px-28 pb-10">
      <p className="text-[#ff6600] text-center">
        Frequently Asked Questions (FAQ)
      </p>
      <h2 className="text-xl sm:text-[24px] md:text-4xl text-center font-semibold leading-[50px]  mt-2 mb-6 md:mb-10">
        Get Every Single Answer
      </h2>

      <div className="block lg:flex gap-10 ">
        <div className="">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`mb-2 transition-all duration-100 rounded-md ease-in-out ${activeIndex === index
                ? " shadow-[0px_14px_47px_0px_rgba(40,46,58,0.08)]"
                : ""
                } bg-white`}
            >
              <div
                onClick={() => toggleAccordion(index)}
                className={`flex  items-center text-left p-3 rounded-md  cursor-pointer transition-all duration-100 ease-in-out w-full   text-base md:text-lg bg-transparent relative font-[Plus Jakarta Sans] ${activeIndex === index ? "" : "custom-shadow"
                  }`}
              >
                {" "}
                <span className="bg-[#fa4612]  text-white px-[13px]  py-1  mr-5 rounded-full">
                  {item.sr}{" "}
                </span>{" "}
                <h6 className="font-normal"> {item.question}</h6>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: `${getContentHeight(index)}px`,
                }}
                className={`accordion-content  transition-max-height duration-500 ease-in-out overflow-hidden`}
              >
                <p className="text-base border-t border-dashed border-[#ff6600]  p-5 text-justify">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          width={700}
          height={700}
          src="/Images/img/faq1.webp"
          alt="Frequently Asked Questions (FAQ)"
          className="w-full lg:w-[450px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default FaqSecond;
