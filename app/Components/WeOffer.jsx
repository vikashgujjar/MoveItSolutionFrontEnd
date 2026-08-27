import Link from "next/link";
import React from "react";
import {
  FaPrescriptionBottle,
  FaPlaneDeparture,
  FaTruck,
  FaAngleRight,
  FaArrowRight,
} from "react-icons/fa";

const WeOffer = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auhref px-0 lg:px-8 text-center">
        <p className="text-[#fa4612]">We Offer Core Services</p>
        <h2 className="text-2xl  sm:text-3xl md:text-[40px] underline-animation left md:leading-[50px] font-bold text-[#24416b] mb-4 w-[90%] sm:w-[75%] lg:w-[55%] mx-auto py-4">
          Prime Services for You
        </h2>

        <section className="service-area" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {/* Service 1 */}
              <div className="w-full sm:w-1/2 md:w-[48%] lg:w-[31.4%]" data-aos="fade-up">
                <div className="single-service one relative text-center bg-white shadow-lg px-6 py-8 transition-all duration-500 hover:bg-transparent">
                  <div className="service-content-wrap transition-all duration-500">
                    <FaTruck className="text-5xl mb-5 text-[#fa4612]" />
                    <h3 className="text-lg font-semibold">Moving Abroad</h3>
                    <p className="text-gray-600 mt-4">
                      Relocating overseas is made easy with Move It Solutions. We simplify your moving
                      process and make it hassle-free. Being one of the best international house shifting
                      companies, we also provide our clients with expert assistance for a smooth relocation
                      experience
                    </p>
                  </div>
                  <div className="service-heading text-center bg-[#fa4612] p-5 absolute bottom-[-30px] left-0 right-0 transition-all duration-500 transform scale-0 hover:scale-100">
                    <Link href="/moving-abroad" className="circle-read-more">
                      <h3 className="text-white">Moving Abroad</h3>
                      <div className="w-10 mx-auto bg-white rounded-full">
                        <FaArrowRight className="text-[#fa4612] " />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="w-full sm:w-1/2 md:w-[48%] lg:w-[31.4%]" data-aos="fade-up">
                <div className="single-service two relative text-center bg-white shadow-lg px-6 py-8 transition-all duration-500 hover:bg-transparent">
                  <div className="service-content-wrap transition-all duration-500">
                    <FaPrescriptionBottle className="text-5xl mb-5 text-[#fa4612]" />
                    <h3 className="text-lg font-semibold">Freight Company</h3>
                    <p className="text-gray-600 mt-4">
                      Are you looking for a secure, aordable, and efficient shipping solution for your goods?
                      Move It Solutions is a freight and international house-shifting company that makes
                      transporting your goods convenient and easy.
                    </p>
                  </div>
                  <div className="service-heading text-center bg-[#fa4612] p-5 absolute bottom-[-30px] left-0 right-0 transition-all duration-500 transform scale-0 hover:scale-100">
                    <Link href="/freight-company" className="circle-read-more">
                      <h3 className="text-white">Freight Company</h3>
                      <div className="w-10 mx-auto bg-white rounded-full">
                        <FaArrowRight className="text-[#fa4612] " />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="w-full sm:w-1/2 md:w-[48%] lg:w-[31.4%]" data-aos="fade-up">
                <div className="single-service three">
                  <div className="service-content-wrap transition-all duration-500">
                    <FaPlaneDeparture className="text-5xl mb-5 text-[#fa4612]" />
                    <h3 className="text-lg font-semibold">Freight Delivery</h3>
                    <p className="text-gray-600 mt-4">
                      Are you looking for a secure, aordable, and efficient shipping solution for your goods?
                      Move It Solutions is a freight and international house-shifting company that makes
                      transporting your goods convenient and easy.
                    </p>
                  </div>
                  <div className="service-heading text-center bg-[#fa4612] p-5 absolute bottom-[-30px] left-0 right-0 transition-all duration-500 transform scale-0 hover:scale-100">
                    <Link href="/freight-delivery" className="circle-read-more">
                      <h3 className="text-white">Freight Delivery</h3>
                      <div className="w-10 mx-auto bg-white rounded-full">
                        <FaArrowRight className="text-[#fa4612] " />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="pt-5 lg:pt-10 text-[13px] lg:text-base">
          The schedule is also available.
          <Link
            href="/request-quote"
            className="text-[#fa4612] border-b border-[#fa4612] pb-1"
          >
            {" "}
            Get a callback time slot
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WeOffer;
