import Link from "next/link";
import React from "react";
import ContactForm from "../Components/contactForm";
import Image from "next/image";
import PrioritiesSection from "../Components/PrioritiesSection";
import Counter from "../Components/Counter";

const page = () => {
  return (
    <>
      <head>
        <title>Careers | Move It Solution </title>
        <meta
          name="description"
          content="Find diverse career opportunities in transportation, logistics, and operations at Move It Solution. Join us today for a bright future!"
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]"> Careers</li>
            </div>
          </div>
        </div>
      </div>

      <section className="careers-area px-5 lg:px-28 py-5 lg:py-20">
        <div className="container mx-auto">
          <div className="lg:flex block gap-10 justify-between">
            <div className="careers-content">
              <h1 className="text-2xl lg:text-[40px] font-bold mb-4">
                Careers
              </h1>

              <p className="text-justify text-gray-700 mb-6">
                Move It Solution brings you the most reliable transport and
                logistic services, efficient, and on time. Here at Move It
                Solution, we commit to guaranteed on-time delivery of goods
                securely to its destination. We ensure the job is done right
                regardless of the size of your parcel-from one shipment to a few
                shipments.
              </p>
              <p className="text-gray-700 text-justify">
                Our professional experts are committed to making logistics an
                easy hassle-free as well as personalized experience for you.
                State-of-the-art tracking and monitoring systems keep you
                updated on the status of shipments, thus maintaining total
                transparency over the process. Timeliness forms the essence of
                business, and so with streamlined operations we deliver your
                goods on schedule.
              </p>
            </div>

            <div className="careers-img mt-5 lg:mt-0 bg-cover bg-center mx-auto  w-full lg:h-full rounded">
              <Image
                width={900}
                height={900}
                src="/Images/Move-it-solution-Careers-Services.webp"
                className="h-72  w-auto mb-5 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="careers-area px-0 lg:px-28 pb-5 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 justify-between">
            <div className="">
              <Image
                width={900}
                height={900}
                src="/Images/img/Move-it-Booking-Services.webp"
                className="h-full mb-5 object-cover"
              />
            </div>

            <div className="careers-img bg-cover bg-center mx-auto h-64 w-full lg:h-full rounded">
              <ContactForm  pageType="career"/>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-0 lg:mx-5">
        <PrioritiesSection />
      </div>

      <Counter />
    </>
  );
};

export default page;
