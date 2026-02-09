import Link from "next/link";
import React from "react";
import { FaCodepen, FaStore, FaBox } from "react-icons/fa";
const services = [
  {
    id: 1,
    icon: <FaCodepen size={40} color="#fa4612" />,
    title: "International Transport Services",
    description:
      "Transport solutions for businesses around the globe: Move It Solution- Your trusted partner for International Transport Services.",
    link: "/international-Transport-Services",
  },
  {
    id: 2,
    icon: <FaStore size={40} color="#fa4612" />,
    title: "International Moving Company",
    description:
      "International house shifting is made easy with one of the best international packers and movers. Have a smooth and hassle-free relocation experience with Move It Solutions.",
    link: "/international-moving-company",
  },
  {
    id: 3,
    icon: <FaBox size={40} color="#fa4612" />,
    title: "Schedule Pre-move Survey",
    description:
      "Before relocating, it is important to plan and schedule all the requirements and the paperwork to ensure a smooth relocation. With Move It Solution’s Pre-move Survey the process of moving becomes easy.",
    link: "/contact",
  },
];

const WhyUs = () => {
  return (
    // <section className="py-12 bg-gray-50 px-20">
    //   <div className="container mx-auto px-4 lg:px-8 text-center">
    //     <h2 className="text-3xl font-bold text-[#24416b] mb-4">
    //       Why should you choose us?
    //     </h2>
    //     <p className="text-gray-600 mb-8 w-[50%] mx-auto">
    //       For the delivery of little or large cargo, express delivery is a
    //       cutting-edge service and an efficient logistical solution. This
    //       service is useful for Company various.
    //     </p>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {services.map((service) => (
    //         <div
    //           key={service.id}
    //           className="bg-white py-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
    //         >
    //           <div className="flex ml-8 mb-4">{service.icon}</div>
    //           <h3 className="text-xl font-semibold text-[#24416b] text-left ml-8  pb-8">
    //             {service.title}
    //           </h3>
    //           <div className="border-b border-gray-200"></div>
    //           <p className="card-p text-[14px]  py-8 px-8 text-justify">
    //             {service.description}
    //           </p>
    //           <Link
    //             href={service.link}
    //             className="text-[#fa4612] font-semibold flex items-center  ml-8 "
    //           >
    //             Read More
    //             <svg
    //               className="w-4 h-4 ml-2 border-2 border-[#fa4612] rounded-full hover:bg-[#fa4612] hover:text-white transition-colors duration-300"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M5 12h14M12 5l7 7-7 7"
    //               ></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="py-12 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-[21px] lg:text-[40px] underline-animation left font-bold text-[#24416b] mb-6">
          Why Choose Move It Solutions?
        </h2>
        <p className="text-gray-600 mb-8 w-full sm:w-[70%] lg:w-[50%] mx-auto">
          For the efficient delivery of your goods or all the supplies that you need, we provide
          express delivery as a cutting-edge service in the international shipping industry. We also
          provide an efficient logistical solution. Ultimately these services are useful and important
          for various companies and individuals looking forward to relocating cross-country
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white py-6 single-choose shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              {" "}
              <div className="border-b relative choose-head border-gray-200 ">
                <div className="flex ml-4 sm:ml-8 mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#24416b] text-left ml-4 sm:ml-8 pb-4 sm:pb-8">
                  {service.title}
                </h3>
              </div>
              <p className="text-[14px] py-4 sm:py-8 px-4 sm:px-8 text-justify">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-[#fa4612]  flex items-center ml-4 sm:ml-8"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2 border-2 border-[#fa4612] rounded-full hover:bg-[#fa4612] hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
