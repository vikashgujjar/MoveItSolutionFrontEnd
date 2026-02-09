import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonService from "../Components/Services";
import Counter from "../Components/Counter";

const page = () => {
  const servicesData = [
    {
      icon: "/Images/img/warehouse-red.webp",
      alt: "Freight Delivery",
      title: "Freight Delivery",
      description:
        "We provide safe and secure freight delivery service. Our extensive network of professionals worldwide assists in international relocation transportation. We utilize technology to provide efficient transportation and ensure the client's reliable delivery by giving them control of real-time freight tracking.",
      link: "/freight-delivery",
    },
    {
      icon: "/Images/img/airplane-two.webp",
      alt: "Freight Company",
      title: "Freight Company",
      description:
        "Reliable freight company. Efficient logistics. Timely deliveries. Secure handling. Competitive rates. Global coverage. Exceptional customer service. Streamlined operations. Trusted partner. Move your freight with us.",
      link: "/freight-company",
    },
    {
      icon: "/Images/img/plastic-bottle.webp",
      alt: "Moving Abroad",
      title: "Moving Abroad",
      description:
        "You can trust us with your hassle-free international move. Our wide range of services covers each aspect of your international relocation or transportation of goods. We provide visa assistance, help finding a place to move in, packing, transporting, customs clearance, and unpacking services. ",
      link: "/moving-abroad",
    },

    {
      icon: "/Images/img/road-lamps.webp",
      title: "Transport Services",
      alt: " Transport Services",
      description:
        "We provide international transportation and storage services at competitive rates. Our professional and experienced staff handle the goods with care, and you are assured of their safety. We provide a seamless logistics experience and manage your goods efficiently.",
      link: "/international-Transport-Services",
    },
    // Add more items as needed
  ];

  return (
    <>
      <head>
        <title>Services Of The Top International House Shifting Company
        </title>
        <meta
          name="description"
          content="If the thought of International relocation scares you, then don't worry one of the top international moving companies Move It Solutions is here with a wide range of services for you. 
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
              <li className="text-[#fa4612]">Services</li>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-32 block md:flex mt-20  relative">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className=" bg-white custom-shadow group text-center py-8  px-3 w-full hover:scale-105 transition-all duration-500"
          >
            <div className="icon mb-3">
              <Image
                src={service.icon}
                alt={service.alt}
                width={50}
                height={50}
                className="mx-auto h-16 w-auto"
              />
            </div>
            <div className="content  ">
              <h2>
                <Link
                  href={service.link}
                  className="text-2xl font-bold leading-9"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="my-4 text-[15px] font-normal leading-6 text-gray-600  ">
                {service.description}
              </p>
              <div className="bg-[#fedad0] w-10 h-10 mx-auto rounded-full text-[#fa4612] flex items-center justify-center transition-all duration-500 relative z-10">
                <Link href={service.link}>
                  <span className="text-[#FF7236] group-hover:text-white  group-hover:bg-[#fa4612]  p-3 rounded-full ">
                    🡢
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-20">
        <CommonService />
      </div>
      <Counter />
    </>
  );
};

export default page;
