import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import FaqMain from "@/app/Components/FaqMain";
import { LocationSidebar } from "@/app/Components/LocationContactData";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";

export const metadata = {
  title: "Packers and Movers in Panchkula | Safe & Affordable Shifting",
  description: "Hire trusted packers and movers in Panchkula for safe, affordable home and office relocation with professional packing, transport and timely delivery. today!!!",
};

const page = () => {
  return (
    <>
      <Script id="schema-moving-company" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "@id": "https://www.moveitsolution.com/#movingcompany",
            "name": "Move It Solution",
            "alternateName": "Move It Solution Packers and Movers",
            "url": "https://www.moveitsolution.com/",
            "logo": "https://www.moveitsolution.com/path-to-logo.png",
            "image": "https://www.moveitsolution.com/path-to-banner-image.jpg",
            "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services worldwide.",
            "telephone": "+91-7056997000",
            "email": "info@moveitsolution.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sco No : 487, 1st Floor, Near SBI Bank",
              "addressLocality": "Dwarka Sector 26",
              "addressRegion": "New Delhi",
              "postalCode": "110077",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5436847",
              "longitude": "77.049916"
            },
            "hasMap": "https://www.google.com/maps/place/Move+It+Solution/data=!4m2!3m1!1s0x0:0x1d95a0726d37d08",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "sameAs": [
              "https://x.com/moveitsolution",
              "https://www.facebook.com/moveitsolution",
              "https://www.instagram.com/moveitsolution/",
              "https://www.linkedin.com/in/move-it-solution-257846226/",
              "https://www.youtube.com/channel/UCeU4KG_f6DU9aivOhDQrLBg",
              "https://www.google.com/maps/place/Move+It+Solution/data=!4m2!3m1!1s0x0:0x1d95a0726d37d08"
            ],
            "serviceOffered": [
              { "@type": "Service", "name": "International Packers and Movers" },
              { "@type": "Service", "name": "International Shifting Services" },
              { "@type": "Service", "name": "International Courier Services" },
              { "@type": "Service", "name": "International Transport Services" },
              { "@type": "Service", "name": "International Packing Services" },
              { "@type": "Service", "name": "Warehouse Services" },
              { "@type": "Service", "name": "Heavy Goods Transport" },
              { "@type": "Service", "name": "Supply Chain Services" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "XX",
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        `}
      </Script>


      <div className="bg-gray-100 !hidden lg:!block banner h-full pt-28 pb-2">
        {/* <div className="px-10 lg:px-28 w-full h-full">
                    <div className="flex justify-center lg:justify-end  items-center h-full">
                        <div className="text-white flex text-sm gap-5 hover:text-blue-500">
                            <Link href="/" className="">
                                Home
                            </Link>
                            <li className="text-[#fa4612] text-nowrap">
                                Packers and Movers in Kengeri
                            </li>
                        </div>
                    </div>
                </div> */}
      </div>
      <div>
        <LocationBanner />
      </div>

      <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white p-5">
              <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Panchkula</h1>
              <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                Best Packers and Movers in Panchkula: Stress-Free Relocation Services
              </h2>
              <p className="text-justify ">
                Panchkula, located at the base of the Sivalik hills, is a well-developed and organised city with many residential areas that are peaceful and quiet. Some businesses are now opening up in and around Panchkula, particularly in the Industrial Area (the new Industrial Area was built in the late 1970s), and MDC (Mansa Devi Complex).
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/panchkula.webp"
                  alt="Packers and Movers in Panchkula"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                The next step to moving to or from a different area is to find a moving company with local knowledge. Find a trustworthy moving company in Panchkula for your moving needs; <b>Move It Solution</b> has both the local and international capabilities to assist you in all aspects of relocating.
              </p>
            </div>
            <div className="bg-white px-5 pb-5">
              <ServiceOffer />
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Why Should You Pick Us to Be Your Packers and Movers in Panchkula?
              </h2>
              <p className="text-justify ">
                Relocating is not simply just loading and moving boxes; it takes planning, accuracy, and trust. Residents of Panchkula trust Move It Solutions for the following reasons:
              </p>

              <h3 className="text-base font-bold mt-4">1. Local Experts You Can Trust</h3>
              <p className="text-justify text-base my-5">
                We know the ins and outs of Panchkula's logistics, including gated communities in Sector 20 and the busy shopping areas of Sector 11. Our teams are aware of the local laws, rules, and routes that will keep your move on schedule.
              </p>

              <h3 className="text-base font-bold mt-4">2. Safety Comes First</h3>
              <p className="text-justify text-base my-5">
                Your items' safety and security come first with Move It Solutions, as we are the leading Packers and Movers in Panchkula. We use:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Quality Packing Materials:</b> We use anti-static bubble wrap to protect electronics, foam for furniture, and heavy-duty boxes for household goods.</li>
                <li><b>Modern Vehicles:</b> Our trucks are in excellent condition and will arrive at your location clean and with a GPS tracking device to provide peace of mind during transit.</li>
                <li><b>Trained & Skilled Workers:</b> We do not use casual labor; we train our staff in all aspects of proper handling, dismantling, and reassembling techniques.</li>
              </ul>

              <h3 className="text-base font-bold mt-4">3. Honest Pricing</h3>
              <p className="text-justify text-base my-5">
                We believe in being upfront with our customers regarding pricing. Our quotes are clear and thorough. You only pay for what you choose, with no hidden fees or unexpected costs on the last day of your move.
              </p>

              <h3 className="text-base font-bold mt-4">4. Comprehensive Insurance</h3>
              <p className="text-justify text-base my-5">
                Even though we take all the precautions we can at the time of transportation, we still believe that it's important to provide our customers with the peace of mind that comes from having insurance that covers any unexpected issues (road accidents and natural disasters, for example).
              </p>
            </div>
            <div className="bg-white px-5 pb-5">
              <HowItWork />
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Our Key Services
              </h2>
              <p className="text-justify ">
                Here is a complete list of relocation services for all types of people (individuals, families, and businesses) located in Panchkula.
              </p>

              <h3 className="text-base font-bold mt-4">1. Home Relocation (Moving)</h3>
              <p className="text-justify text-base my-5">
                Moving to a new home can be both a fun and a stressful experience, so let us do the heavy lifting for you! We offer these services:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li>Disassembly of large, bulky furniture pieces (beds, wardrobes, dining tables).</li>
                <li>Carefully pack kitchen items (glassware, porcelain, decorative items).</li>
                <li>Load and transport your belongings to your new home, and then unload and reassemble your household furniture.</li>
              </ul>

              <h3 className="text-base font-bold mt-4">2. Office Relocation</h3>
              <p className="text-justify text-base my-5">
                Panchkula has a growing business community. We provide office moving services to assist you in minimizing your downtime with respect to relocating your office. We specialize in:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>IT Infrastructure:</b> (servers, desktops, printers).</li>
                <li><b>Office Asset Management:</b> (workstations, filing cabinets, conference tables).</li>
                <li><b>Confidential File Management:</b> (secure packing, organized transport).</li>
              </ul>

              <h3 className="text-base font-bold mt-4">3. Vehicle Transport Services (for cars and bicycles)</h3>
              <p className="text-justify text-base my-5">
                Driving long-distance is a tiring task for your vehicle and puts extra wear on it. To help relieve this pressure on your vehicle, we offer customized car carrier service and bike transport services to safely transfer your vehicle from Panchkula to anywhere in India.
              </p>

              <h3 className="text-base font-bold mt-4">4. International Relocation</h3>
              <p className="text-justify text-base my-5">
                Move It Solutions is one of the world leaders in the Logistics business when it comes to moving abroad from Panchkula. We provide comprehensive services, including export-quality packing, freight by air or sea, and assisting with the Customs documentation process.
              </p>

              <h3 className="text-base font-bold mt-4">5. Warehouse and Storage</h3>
              <p className="text-justify text-base my-5">
                If your new home is not yet ready, we have made it easy for you to find a secure Warehouse or Storage Facility near Panchkula for the interim period. Our warehouses are clean, pest-free, and monitored 24 hours per day, and can be utilized for both short-term and long-term storage of all types of articles.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Areas of Operations: Serving All of Panchkula and the Surrounding Region
              </h2>
              <p className="text-justify ">
                Our coverage area encompasses all of Panchkula and the nearby districts. As the premier Packers and Movers company in Panchkula, we provide packing and moving services to:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Residential Sectors:</b> All of the sectors, 1-30, plus the Mansa Devi Complex (MDC).</li>
                <li><b>Industrial Areas:</b> The Industrial Area, Phase I and II.</li>
                <li><b>Adjacent Location Areas:</b> Peer Muchalla, Zirakpur, Pinjore, and Kalka.</li>
                <li><b>Intercity Travel:</b> Regular trips to Delhi, Gurugram, Bengaluru, Mumbai, and Hyderabad.</li>
              </ul>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                5 Steps To A Successful Move
              </h2>
              <p className="text-justify ">
                We have developed a 5-step process to make your moving experience as simple and smooth as possible.
              </p>
              <ul className="list-none my-4">
                <li className="mb-4"><b>1. Pre-Move Survey:</b> Call us for an on-site or virtual survey to determine how much you are moving.</li>
                <li className="mb-4"><b>2. Custom Estimate:</b> You will receive a full breakdown of your moving quote with a price depending on volume and distance moved from the point of origin to destination.</li>
                <li className="mb-4"><b>3. Schedule:</b> You can schedule your move at any time 7 days a week.</li>
                <li className="mb-4"><b>4. Packing and Loading:</b> Our moving team will arrive on schedule, carefully pack your belongings using the most up-to-date machinery for packing and loading.</li>
                <li className="mb-4"><b>5. Delivery:</b> Once your belongings are unloaded and unpacked at the destination you selected, we will ensure everything is safe and in the right position.</li>
              </ul>
            </div>

            <div className="bg-white px-5 pb-5">
              <WhyExpress location="Panchkula" />
            </div>
            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Moving Safety Tips in Panchkula
              </h2>
              <p className="text-justify ">
                The following safety tips from our professional staff will help you move without hassle:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Inform Your Local Society:</b> When moving into or out of a society in Panchkula, it is customary to notify the management prior to the arrival of your moving truck. Obtain the required gate passes for entry and exit.</li>
                <li><b>Plan Your Route:</b> When moving during peak traffic periods, it is recommended that you notify the moving company of your intended route, so that the company can utilize the least congested streets and avoid traffic jams near the main highways.</li>
                <li><b>Pack Your Essentials Separately:</b> To avoid having to search through all of your belongings, pack an "essentials bag" that contains any necessary toiletries, medications, keys, and important documents that you will be taking with you in your personal vehicle.</li>
                <li><b>Unplug Your Refrigerators:</b> Empty your refrigerator of all food items and unplug it for at least 24 hours prior to moving day. This will help to eliminate the risk of leaking refrigerant and developing mold in the unit.</li>
              </ul>
            </div>

            <div className="bg-white px-5 pb-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Contact Move It Solutions — The Leading Pack & Move Company in Panchkula
              </h2>
              <p className="text-justify text-base my-5">
                If you are moving, make your next move your best move by choosing <b>Move It Solutions</b> for professional, affordable and safe relocation Services in Panchkula.
              </p>
              <p className="text-justify text-base my-5">
                Ready to relocate in Panchkula? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a stress-free moving experience!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 px-5 pb-10">
              <Link
                href="/"
                className="bg-[#ff6600] text-white px-8 py-3 rounded-md font-bold hover:bg-[#e65c00] transition-colors shadow-lg"
              >
                Go to Home
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#ff6600] border-2 border-[#ff6600] px-8 py-3 rounded-md font-bold hover:bg-[#ff6600] hover:text-white transition-all shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <aside className="sidebar-area sticky top-20">
              <LocationSidebar slug="panchkula" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Courier Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Moving is often a difficult undertaking, but the best packers
                  and movers in Panchkula make it simple and relaxing. These
                  professionals have the highest capability to do and take care
                  of every detailed for your moving; from packing your things
                  with the finest materials available to ensuring that
                  transportation and delivery happens on time and at the right
                  place. Be it home shifting, office relocation or moving
                  commercial goods, they provide designed answers according to
                  the ideals of the clients.
                </p>
                <p className="text-justify text-base my-5">
                  Their offerings take the burden off you by tackling every
                  aspect, such as packing, loading, unloading and even
                  unpacking. In addition to their skills and dependable grip,
                  packers and movers in Panchkula make sure the process of
                  relocation is in order thus, they are the best choice for
                  moving within or outside Panchkula.
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
      <FaqMain pageType="panchkula" />
    </>
  );
};

export default page;
