import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import LogisticsLeft from "../Components/LogisticsLeft";

const page = () => {
  return (
    <>
      <head>
        <title>
                Move It Solution- Best International Container Ship Service
        </title>
        <meta
          name="description"
          content=" It is Transportation service in  the present world as it is carried out efficiently and safely even when it involves Best International Ship Service long distances."
        />
         <meta 
          name="keywords" 
          content="international container services, containers cargo transportation service, top cargo transportation services, International shipping container service, international cargo ship, best international shipping service, best international shipping package, Containers transportation near me
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
              <li className="text-[#fa4612] text-nowrap">Containers Service</li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h2 className="text-xl md:text-[40px] my-5  font-semimedium">
                Containers Service
              </h2>
              <p className="text-justify ">
                Shipping is indispensable in the present world as it is carried
                out efficiently and safely even when it involves long distances.
                At Move It Solution, we offer extensive container services
                suitable for any industry. Be it moving raw materials, finished
                goods or specialized ones, our container solutions help in the
                safe and efficient transportation of the cargo.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/Containers Service.webp"
                  alt="Containers Service"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                In order to meet the customers’ shipping requirements, Move It
                Solution provides a wide range of containers. We have everything
                from normal dry boxes, freezer containers for frozen goods,
                special containers for oversized or dangerous goods etc. to fit
                any need. Our modern fleet is fitted with the latest technology
                to guarantee proper care and monitoring of all containers giving
                you comfort while your cargo is in transit.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5 font-semimedium">
                The Most dependable and safe Containers Service
              </h2>
              <p className="text-justify ">
                At Move It Solution, we comprehend the significance of
                flexibility in container logistics. This is the reason why we
                have a variety of container sizes and types, to allow your cargo
                to be transported in the most efficient and safe way. Be it a
                20ft container for smaller loads, a 40ft high cube container for
                bigger volumes or anything in between, we shall be able to
                handle your needs. We provide freezer containers which are
                suitable for foodstuffs, medicines and other products that
                cannot go bad, while our specialized equipment is meant for
                carrying unique, bulky or dangerous goods.
              </p>

              <p className="text-justify text-base my-5">
                Our solutions for container services are tailored to address
                intricate issues in the logistics space easily. To this end, we
                offer O Full Container Load (FCL) and Less than Container Load
                (LCL) alternatives enabling the clients to select the most
                economical offer for their shipping requirements. For big
                shipments, it is much better to us FCL as it guarantees space
                for the cargo, conversely LCL means the use of one container for
                several shipments, with the intention of cutting costs while
                still being efficient. With these flexible options, Move It
                Solutions ensures that the design of your logistics strategy is
                in tune with your business objectives.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution guarantees that it will offer you a
                comprehensive range of container transportation services that
                will help you manage your supply chain efficiently. Each step of
                the process is managed from container pickup and loading at your
                site to ultimate delivery at the required location. Our
                professionals take care of customs, paperworks, and regulations,
                which saves you a lot of time and trouble. We sweat the small
                stuff, so you can get on with the important stuff: running your
                business.
              </p>
              <h2 className="text-xl md:text-2xl my-5  font-semimedium">
                Best Containers Service
              </h2>
              <p className="text-justify text-base my-5">
                Tracking shipments in container services is one of their
                fascinating features. With the help of technology, you can track
                your shipment at any time, with an update on the exact location
                and details on the state of the shipment. This degree of
                transparency does not just keep you informed but also enhances
                the planning of your operations. We are dedicated to making sure
                that you have complete control of your supply chain, which is
                why we value visibility and communication.
              </p>
              <p className="text-justify text-base my-5">
                Move It Solution pays special attention to environmental
                sustainability. We utilize green strategies for container
                transport, such as route planning and the use of fuel-efficient
                vehicles, to lower emissions. Our partnership will allow you to
                fulfill your logistics objectives without putting the
                environment at risk. With that in mind, we are proud to say that
                our eco-friendly approach is inspired by both the needs of our
                customers and the needs of the earth.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LogisticsLeft active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable Containers Service
                </h2>
                <p className="text-justify text-base mt-3">
                  The most important aspect of our business is customer
                  satisfaction. Hence at Move It Solution, we have made it a
                  point to offer support systems that address any issues or
                  concerns you may have at any given moment. Our logistics
                  professionals are always available to provide you with
                  tailored solutions and their professional skill set. Given our
                  commitment to trust, service, efficiency and reliability, we
                  hope to become your partner in container shipping.
                </p>
                <p className="text-justify text-base my-5">
                  Get in touch with us today to learn how container services
                  from Move It Solution can enhance your logistics plan. Don't
                  worry about the complexities of shipping as we take care of
                  that while you look at how to grow your business.
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

      <FaqMain />
    </>
  );
};

export default page;
