"use client";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6  custom-shadow text-center mb-8 transition-transform transform hover:scale-105">
      <Image
        width={700}
        height={700}
        src={`/Images/img/${icon}`}
        className="h-14 w-14 mx-auto  mb-4"
        alt={title}
      ></Image>
      <h4 className="text-xl font-semibold mb-2 text-[#24416b]">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CoreServices = () => {
  return (
    <>
      <section className="bg-[#ff66000a] pt-16 pb-8 px-4 sm:px-8 lg:px-28 flex flex-col lg:flex-row lg:space-x-6 items-center overflow-hidden">
        <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            <div>
              {" "}
              <FeatureBox
                icon="warehouse-red.webp"
                title="WAREHOUSE"
                description="Move It Solutions, an excellent moving company oers comprehensive warehouse
services. It includes storage, inventory management, logistics, and efficient distribution
solutions. An all-rounder for sure, right?
"
              />
              <FeatureBox
                icon="user.webp"
                title="ON TIME DELEVERY"
                description="We provide worldwide moving services and we also ensure that every shipment is done on
time. We follow our motto that we value punctuality and we stick to and adhere to the
shipment guidelines.
"
              />
            </div>
            <div className="mt-0 lg:mt-10">
              <FeatureBox
                icon="box-red.webp"
                title="OUR EXCELLENT STAFF"
                description="We believe that a seamless business is backed up by excellent customer support, with that
being said, our sta is dedicated to resolving our client’s queries and helping them move."
              />
              <FeatureBox
                icon="delivery-time.webp"
                title="SAFE & SECURE MOVE"
                description="One of the biggest concerns while relocating is, ‘Are the moving companies trustworthy?'
Are they safe? Well, with Move It solutions you can rest assured that your goods,
information, and every other detail are in safe hands. We also take care of the goods
throughout their shipment."
              />
            </div>
          </div>
        </div>

        <div
          className="lg:w-1/2 mt-8 lg:mt-0 pl-0 md:pl-8 "
          data-aos="fade-left"
        >
          <p className="text-[#fa4612] mb-4">Core Services</p>
          <h2 className="text-xl lg:text-[40px] lg:leading-none font-bold mb-4 text-[#24416b] text-justify underline-animation">
            Transport & Logistics Services Unlike other services, you are secure
            and private.
          </h2>
          <p className="text-justify">
            Being one of the best international movers and packers it is our responsibility to be
            accountable for every good and shipment we make. Unlike other shipping and moving
            service providers, we value our clients, respect their privacy, and focus on prioritizing the
            condentiality of their cargo and other information. To maintain the standards of security
            that we have adapted through, we verify and do a safety check at each step to ensure
            that your goods are in safe hands!

          </p>
          <ul className="mt-5">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-lg text-[#fa4612]" /> Excellent moving solutions take time.

            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-lg text-[#fa4612] mt-2" />
              Our goals are achieved more eectively.
            </li>
          </ul>
          <Link href="/services">
            <div className="default-btn w-40 mt-5">All Services</div>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CoreServices;
