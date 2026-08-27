import FaqMain from "@/app/Components/FaqMain";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";
import LocationContactData, { LocationLeftService } from "@/app/Components/LocationContactData";

export const metadata = {
  title: "Best Packers and Movers in Bangalore | Safe & Affordable",
  description: "Looking for the best packers and movers in Bangalore? Get safe, affordable home and office relocation with expert packing and on-time delivery. Book today! Now!",
};

// const BANGALORE_PHONE = "+91 63615 17700";
const BANGALORE_PHONE = "+91 7056997000";
const BANGALORE_ADDRESS_FALLBACK = "Dwarka, Sector 26, New Delhi – 110077";
const page = () => {
  return (
    <LocationContactData slug="bangalore" fallbackPhone={BANGALORE_PHONE} fallbackAddress={BANGALORE_ADDRESS_FALLBACK}>
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
              <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Best Packers and Movers in Bangalore</h1>
              <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                The Ultimate Guide for Stress-Free Moving with the Best Packers and Movers in Bangalore
              </h2>
              <p className="text-justify ">
                The experience of relocating (moving) as you move within (in) what has been referred to as the "Silicon Valley of India" can be one of your most stressful. You may have accumulated years (many years) of items in your current apartment or home in Indiranagar, Whitefield or HSR Layout, and the very thought of finding your way (getting around) through all of the horrendous (heavy) traffic throughout this city is overwhelming at times.
              </p>

              <div className="my-8">
                <Image
                  src="/Images/img/bangalore.webp"
                  alt="Packers and Movers in Bangalore"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-justify text-base my-5">
                By 2026, the entire industry has changed when it comes to relocating your home. You do not just hire a tempo (small truck) with some people to help you move your belongings from your old house to your new one. There are many rules and regulations with apartment associations, as well as a lot of congestion (traffic), so you must select the <b>Best Packers and Movers in Bangalore</b>… they are your partner and fully comprehend these unique obstacles, not just a transport company.
              </p>
              <p className="text-justify text-base my-5">
                With <b>Move It Solution</b>, we utilize what we call the “concierge style” of service that means we perform all things packing and moving, as well as managing your traffic conditions safely, and arranging your new home in a very organized manner.
              </p>
            </div>
            <div className="bg-white px-5 pb-5">
              <ServiceOffer />
            </div>
            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Local vs. Inter-City Moving Explained
              </h2>
              <p className="text-justify ">
                There’s a big difference between how you move locally within Bangalore versus moving to a different city. Here’s what you need to know:
              </p>

              <h3 className="text-base font-bold mt-4">1. Local Moving Details</h3>
              <p className="text-justify text-base my-5">
                When you are moving from Koramangala to Hebbal, while it seems to just be a short distance, the actual logistics involved are much more complicated:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Traffic Control:</b> We plan every step of the route carefully, taking into account peak hour traffic times so that we stay on schedule.</li>
                <li><b>Society Rules:</b> Most of the top end societies (Prestige, Sobha, Brigade) have restrictive moving hours – normally only between 10 am and 5 pm. We will communicate with the society management to confirm elevator reservations and get any other necessary approvals.</li>
              </ul>

              <h3 className="text-base font-bold mt-4">2. Inter-City Movements</h3>
              <p className="text-justify text-base my-5">
                The way to approach your move now changes when your move is from Bangalore to Pune, Hyderabad, or Delhi.
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Long-Distance Packing:</b> When packing for your long-distance move we usually wrap everything in multiple (3-4) layers of bubble wrap with the addition of corrugated sheets on top of everything to provide maximum protection.</li>
                <li><b>Truck Selection:</b> You may select either a ‘Dedicated’ truck for quicker delivery of your items or a ‘Shared’ truck for lower costing delivery.</li>
                <li><b>Closed Containers:</b> Once your items are completely packed we will put all of your items in closed containers so that they are fully protected from weather and dust.</li>
              </ul>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Why Moving It is the Right Choice for Your Relocation to Bangalore
              </h2>
              <p className="text-justify ">
                Move It is much more than a moving company; we are your partner in relocation. There are many reasons that Bangaloreans trust us to help them relocate:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Advanced Technology:</b> You can track your moving truck in real-time, giving you peace of mind regarding your belongings.</li>
                <li><b>Professional, Trained Employees:</b> All of our employees are professional movers. They are all on our payroll and have been professionally trained to handle expensive electronics and heavy furniture.</li>
                <li><b>Commitment to Damage-Free Moving:</b> All of the packing materials used by Move It are of high quality; therefore, we can guarantee a safe journey for your goods.</li>
                <li><b>Storage and Warehousing:</b> If your new house is not yet ready, we provide secure warehouse space for your possessions while they are in transit.</li>
              </ul>
            </div>
            <div className="bg-white px-5 pb-5">
              <HowItWork />
            </div>
            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Complete Series of Services We Provide in Bangalore
              </h2>
              <p className="text-justify ">
                Move It has developed a complete series of packing and moving services to support the wide-ranging needs of professionals and families in Bangalore.
              </p>

              <h3 className="text-base font-bold mt-4">1. Residential Relocation</h3>
              <p className="text-justify text-base my-5">
                Whether you are shifting from a studio apartment in Bellandur or a villa in Sadashiva Nagar, we take care of it all.
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Furniture Protection:</b> Sofas and mattresses are wrapped in stretch film and foam to prevent dust and tearing while climbing stairs.</li>
                <li><b>Kitchenware:</b> Fragile items like crockery are carefully wrapped using special bubble sheets.</li>
                <li><b>Appliance Safety:</b> Washing machines and fridges are secured using drum bolts and thermocol corners.</li>
              </ul>

              <h3 className="text-base font-bold mt-4">2. Office & Corporate Shifting</h3>
              <p className="text-justify text-base my-5">
                Minimize your business downtime. We specialize in moving IT equipment, servers, and office furniture from one tech park to another, including Electronic City and Manyata Tech Park.
              </p>

              <h3 className="text-base font-bold mt-4">3. Vehicle Transportation (Car & Bike)</h3>
              <p className="text-justify text-base my-5">
                We use car carriers to safely transport your vehicle car and provide protective foam packing for bike transport to ensure a scratch-free delivery.
              </p>

              <h3 className="text-base font-bold mt-4">4. International Relocation</h3>
              <p className="text-justify text-base my-5">
                Moving abroad from Bangalore? We provide international packing solutions and air/sea freight logistics for global relocation.
              </p>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Service Areas in Bangalore
              </h2>
              <p className="text-justify ">
                We cover every major locality in the city:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Tech Hubs:</b> Electronic City, Whitefield, Bellandur, Marathahalli.</li>
                <li><b>Residential Areas:</b> Jayanagar, Indiranagar, Koramangala, HSR Layout, Sadashiva Nagar.</li>
                <li><b>Emerging Areas:</b> Sarjapur Main Road, Kengeri, Dollars Colony, and Hebbal.</li>
              </ul>
            </div>

            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Moving from Bangalore Checklist
              </h2>
              <p className="text-justify ">
                As professional movers who have relocated thousands of families in Bengaluru, we suggest this timeline:
              </p>
              <h3 className="text-base font-bold mt-4">2 Weeks Before: The "Sort and Survey" Phase</h3>
              <ul className="list-disc my-4 ps-5">
                <li><b>Declutter:</b> Assess what items you truly need in your new home.</li>
                <li><b>Get a Free Estimate:</b> Call Move It Solution for a physical survey. (Tip: Never trust a phone-only quote).</li>
              </ul>
              <h3 className="text-base font-bold mt-4">3 Days Before: The Essentials</h3>
              <ul className="list-disc my-4 ps-5">
                <li><b>Permits:</b> Obtain a "MOVE-OUT" gate pass from your current society and a "MOVE-IN" pass for the new one.</li>
                <li><b>Essentials Bag:</b> Pack a bag with laptops, chargers, medicines, and a change of clothes so you don't have to hunt for them on your first night.</li>
              </ul>
            </div>
            <div className="bg-white px-5 pb-5">
              <WhyExpress location="Bangalore" />
            </div>
            <div className="bg-white px-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                How to Avoid Hidden Charges
              </h2>
              <p className="text-justify ">
                Many local vendors quote low to book the job and then add hidden fees later. At Move It Solution, we are transparent. Watch out for:
              </p>
              <ul className="list-disc my-4 ps-5">
                <li><b>Walking Distance Charges:</b> Extra fees if the truck cannot park close to the lift.</li>
                <li><b>Floor Charges:</b> Manual carry charges if the lift is out of order or items don't fit.</li>
                <li><b>Excessive Tipping:</b> We maintain clear pricing with no pressure for tips.</li>
              </ul>
            </div>

            <div className="bg-white px-5 pb-5">
              <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                Contact the Best Packers and Movers in Bangalore
              </h2>
              <p className="text-justify text-base my-5">
                Shift your home, not your stress. By choosing a partner who understands both the logistics of your goods and the layout of Bangalore, you free yourself to focus on setting up your new home.
              </p>
              <p className="text-justify text-base my-5">
                Ready to plan your move? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a free consultation. Let's get you home.
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
              <LocationLeftService />

              <div className="bg-white p-5 mt-5">
                <h2 className="text-xl md:text-2xl   font-semimedium">
                  Hire Affordable International Courier Services
                </h2>
                <p className="text-justify text-base mt-3">
                  Moving is often a difficult undertaking, but the best packers
                  and movers in Bangalore make it simple and relaxing. These
                  professionals have the highest capability to do and take care
                  of every detailed for your moving; from packing your things
                  with the finest materials available to ensuring that
                  transportation and delivery happens on time and at the right
                  place.
                </p>
                <p className="text-justify text-base my-5">
                  Their offerings take the burden off you by tackling every
                  aspect, such as packing, loading, unloading and even
                  unpacking. In addition to their skills and dependable grip,
                  packers and movers in Bangalore make sure the process of
                  relocation is in order thus, they are the best choice for
                  moving within or outside Bangalore.
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
      <FaqMain pageType="bangalore" />
      <OurServices />
    </LocationContactData>
  );
};

export default page;
