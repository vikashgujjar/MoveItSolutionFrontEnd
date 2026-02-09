import Link from "next/link";
import React from "react";

const AreyouLooking = () => {
  return (
    <>
      <div className="areyoulooking relative bg-cover bg-center flex items-center justify-center text-white px-4 py-12 sm:py-20">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%]">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Are You Looking for Professional
            International packers and movers services?
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            If you are planning to move out of the country or even into the same neighborhood, we’ve
            got you! Move It Solutions makes the whole process of relocation simple and affordable.
            Our team of experts can assess your requirements, guide you, and provide a free
            consultation. We ensure a seamless relocation process and also overlook all the
            arrangements and legal paperwork so you can focus on your new journey.
          </p>
          <Link
            href="/contact"
            className="default-btn inline-block mt-8 px-6 py-3 text-sm font-semibold text-white rounded-full transition-colors duration-300"
          >
            Join Us Today
          </Link>
        </div>
      </div>
    </>
  );
};

export default AreyouLooking;
