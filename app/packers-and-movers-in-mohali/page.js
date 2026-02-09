import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";

export const metadata = {
  title: "Packers and Movers in Mohali | Safe & Affordable Shifting",
  description: "Hire reliable packers and movers in Mohali for safe, affordable home and office relocation with professional packing, secure transport, and timely delivery.!!!",
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
              <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Mohali</h1>
              <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                Top-Rated Packers and Movers in Mohali: Seamless Relocation Services in SAS Nagar
              </h2>
              <p className="text-justify ">
                Mohali (SAS Nagar) is a rapidly changing part of the country with every day seeing more IT professionals and their families coming here looking for work. If you are moving into a new apartment in Aerocity or need to move or relocate your office from Phase 7, there are many logistics involved with this process. Therefore, finding experienced Packers and Movers in Mohali will ease your transition by providing you with an understanding of the area, while ensuring that your belongings are taken care of, along with all your time.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/mohali.webp"
                  alt="Packers and Movers in Mohali"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                At <b>Move It Solution</b>, we take the complicated process of moving and make it easy. We are a leader in providing relocation services within the Tricity region, with the best comprehensive services available that focus on making sure your belongings are secured and that you feel comfortable during the entire process.
              </p>
            </div>
            <div className="bg-white px-5 pb-5">
              <ServiceOffer />
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                To find the best packers and movers Mohali has to offer choose us
              </h2>
              <p className="text-justify ">
                Many movers may offer cheaper service, but how can you trust that they are really qualified to provide the service? These three things have helped us become the preferred packers and movers Mohali residents and businesses trust.
              </p>

              <h3 className="text-base font-bold mt-4">1. Local knowledge and Global standards</h3>
              <p className="text-justify text-base my-5">
                Mohali is our home, and we know every area of the city from the major roads of Phase 3B2 to all of the developing sectors around IT City. We also know what it takes to provide you with a hassle-free and damage-free move using the highest packing standards available worldwide.
              </p>

              <h3 className="text-base font-bold mt-4">2. Safety through Technology</h3>
              <p className="text-justify text-base my-5">
                In order to be the best packers and movers Mohali offers, we take the same precautions with your goods that you would. The Packers and Movers Mohali team use multiple layers of packaging for your high value items (electronics, antiques, etc.) use only specialized carriers (closed body trucks) that protect your goods from rain, dust and theft, and give you real-time tracking (through GPS enabled vehicles) so you know exactly where your shipment is located at all times.
              </p>

              <h3 className="text-base font-bold mt-4">3. No Hidden Cost</h3>
              <p className="text-justify text-base my-5">
                Relocation expenses should never be hidden. All potential expenses will be listed on your quote before any work begins. Whether you're moving within Mohali, or across the country you will always pay for what you have used. There are no surprises and no hidden fees.
              </p>

              <h3 className="text-base font-bold mt-4">4. Background-Checked and Trained Workers</h3>
              <p className="text-justify text-base my-5">
                We do not outsource our employees. Every single person in our company has undergone a rigorous background check and is trained in methods of packing professionally and also has extensive experience in carefully lifting very large pieces of furniture or equipment that can break easily.
              </p>
            </div>
            <div className="bg-white px-5 pb-5">
              <HowItWork />
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Our Main Services: Movers and Packers in Mohali
              </h2>
              <p className="text-justify ">
                We provide a 'one-stop' solution to meet all of your packing and moving needs in SAS Nagar.
              </p>

              <h3 className="text-base font-bold mt-4">1. Relocating Residential Property</h3>
              <p className="text-justify text-base my-5">
                Shifting residential properties requires sensitivity and thoughtfulness. From taking apart very large beds and cabinets, to packing fragile items such as kitchenware, our team will ensure that your home will be set up in Mohali as quickly and efficiently as possible.
              </p>

              <h3 className="text-base font-bold mt-4">2. Office and Commercial Relocations</h3>
              <p className="text-justify text-base my-5">
                Mohali is becoming an important center for business. We specialize in corporate relocation with minimal impact to business downtime. Our services include the packing of:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>IT Assets:</b> (servers, computers, network devices) using anti-static bags and boxes.</li>
                <li><b>Office Furniture:</b> (modular desks, ergonomic chairs).</li>
                <li><b>Files and Records:</b> We pack files and records in a manner that minimizes the potential for loss.</li>
              </ul>

              <h3 className="text-base font-bold mt-4">3. Transporting Your Vehicle (Car and Bike)</h3>
              <p className="text-justify text-base my-5">
                Do not put your vehicle through a long, rough ride while driving it yourself. Instead, we provide specialized car hauliers and bike transportation from Mohali to anywhere in India. Vehicles are tied down securely to prevent shifting or scratching during transportation.
              </p>

              <h3 className="text-base font-bold mt-4">4. International Relocation</h3>
              <p className="text-justify text-base my-5">
                Move It Solution is the Number One Choice for an International Move From Mohali to Canada, the USA and Australia. We will handle all of your packing requirements, air/sea freight logistics, along with the customs documentation required for international shipping.
              </p>

              <h3 className="text-base font-bold mt-4">5. Warehousing Solutions</h3>
              <p className="text-justify text-base my-5">
                If you are looking for a storage facility to keep your possessions secure between your move's journey, Move It Solutions has all of our Warehousing Facilities Clean, Safe and Monitored By 24-Hour Security Camera. Our Warehousing Facilities Have Both Short and Long-Term Storage Available.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Service Areas: Covering All of Mohali and Surrounding Areas
              </h2>
              <p className="text-justify ">
                Our Packers and Movers From Mohali Network Covers The Full Expanses Of Mohali District and all of the areas surrounding Mohali:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Residential Phases:</b> Phase 1 – 11.</li>
                <li><b>All Sectors:</b> Sector 70, Sector 71.</li>
                <li><b>New Sectors:</b> Aerocity; IT City; Sector 82; Sector 66 - A.</li>
                <li><b>Industrial Area:</b> Phase 8, Phase 8 B.</li>
                <li><b>Surrounding Towns:</b> Kharar, Kurali, Zirakpur, Landran.</li>
                <li><b>Daily Intercity Routes:</b> Mohali To Delhi, Gurgaon, Bangalore, Mumbai, Hyderabad And Return.</li>
              </ul>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                The 5-Step Relocation Process
              </h2>
              <p className="text-justify ">
                Our 5-Step Relocation Process is a systematic approach for all clients to ensure efficiency.
              </p>
              <ul className="list-none my-4">
                <li className="mb-4"><b>Step 1 - Survey & Quote:</b> Please contact us to arrange a physical or video survey of your belongings. You will be given a free and no-obligation quote.</li>
                <li className="mb-4"><b>Step 2 - Booking:</b> Once a quote has been provided, you can confirm your booking with us at any time during our operating hours. Our regular operating hours are 7 days per week for your convenience.</li>
                <li className="mb-4"><b>Step 3 - Packing:</b> On the day of your move, a team of experienced packers will arrive at your location with all the necessary packing supplies: bubble wrap, corrugated cardboard, and foam.</li>
                <li className="mb-4"><b>Step 4 - Transportation:</b> Using state-of-the-art equipment, your items will be packed and transported safely along the safest route.</li>
                <li className="mb-4"><b>Step 5 - Delivery:</b> When we arrive at your new location, our team will unload your equipment, unpack it and place everything as directed by the customer.</li>
              </ul>
            </div>

            <div className="bg-white px-5 pb-5">
              <WhyExpress location="Mohali" />
            </div>
            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Safety Suggestions for Moving from Mohali
              </h2>
              <p className="text-justify ">
                The following safety tips from our professional staff will help you move without hassle:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Traffic Consideration:</b> If you live near busy markets (Phase 3B2 or Phase 7), consider scheduling your loading time for early in the morning or on weekends, so as to avoid traffic jams.</li>
                <li><b>Permits:</b> Verify with your society or RWA if you will need a move-out permit or gate pass prior to your move.</li>
                <li><b>Essentials Box:</b> Pack a special container with all essential items (keys, meds, chargers, snacks) that you will keep with you during your relocation (not in the moving truck).</li>
                <li><b>Utilities:</b> Disconnect all utilities (i.e. DTH, gas, etc.) prior to the arrival of the moving crew.</li>
              </ul>
            </div>

            <div className="bg-white px-5 pb-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Contact the Best Packers and Movers in Mohali
              </h2>
              <p className="text-justify text-base my-5">
                Ready to make your move? Trust <b>Move It Solution</b> for a safe, secure, and professional relocation experience. We take the stress out of shifting so you can enjoy your new home.
              </p>
              <p className="text-justify text-base my-5">
                Ready to relocate in Mohali? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a stress-free moving experience!
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
              <LeftService active="1" />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Courier Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Moving is often a difficult undertaking, but the best packers
                  and movers in Mohali make it simple and relaxing. These
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
                  packers and movers in Mohali make sure the process of
                  relocation is in order thus, they are the best choice for
                  moving within or outside Mohali.
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
      <FaqMain pageType="mohali" />
    </>
  );
};

export default page;
