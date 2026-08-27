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
    title: "Packers and Movers in Sarjapur Main Road | Safe Shifting",
    description: "Reliable packers and movers in Sarjapur Main Road providing expert packing, secure loading, fast transport and hassle-free home and office relocation.",
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Sarjapur Main Road</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Packers and Movers on Sarjapur Road - The Shift from and to the 2026 Rapid Growth Corridor of Bangalore
                            </h2>
                            <p className="text-justify ">
                                Relocating your home or business to Sarjapur Road is a strategic business decision. Sarjapur Road serves as a hub connecting the IT hubs located in Whitefield, Electronic City, and ORR (corridor from Outer Ring Road). Whether you wish to relocate to The Prestige City high-rise or one of the newly built villas in Decathlon, Sarjapur Road provides you with the convenience of living near international schools rated as the best in Bangalore and large technology parks such as RGA Tech Park and Wipro.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/bangalore.webp"
                                    alt="Packers and Movers on Sarjapur Road"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                However, while relocating to Sarjapur Road may sound great, there are a number of roadblocks you may encounter - namely, the clogged roads.
                            </p>

                            <p className="text-justify text-base my-5">
                                Unlike the grid layouts of Jayanagar, Sarjapur Road is a long, winding road and carries a heavy traffic load. An accident at the railroad crossing at Carmelaram Railway Station or a traffic jam at the Wipro Signal may take you two kilometres from home and turn it into an hour-and-a-half ordeal.
                            </p>

                            <p className="text-justify text-base my-5">
                                So when searching for "<b>Packers and Movers in Sarjapur Road</b>", be sure to select a team of experts who understand these challenges and complexities associated with relocating to Sarjapur Road. An expert Pack and Move Service like <b>Move It Solution</b> will take these unpredictable closures and construction areas into account when planning your packing and moving date and schedule, so your home furnishings will not be stuck in traffic all day long!
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Township Logistics and "The Last Mile"
                            </h2>

                            <h3 className="text-base font-bold my-4">Navigating the Mega Township</h3>
                            <p className="text-justify ">
                                Sarjapur Road is the primary centre for large gated townships. From monolithic complexes such as <b>Prestige City, Assetz Marq, and Sobha Royal Pavilion</b>, to an entire town on the road.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Long Walk Problem:</b> Many townships limit large trucks from entering except to the perimeter; therefore, it is not uncommon for the locations of the logistics hub and the destination tower lobby to require a walk of more than one kilometre.</li>
                                <li><b>Our Solution (the Shuttle):</b> The Hub & Spoke Model allows us to utilise smaller Tata Ace vehicles to transport logistics from the hub (the township's main gate) to the destination tower basement without burdening our customers with long carry charges.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">The Dust Bowl Challenge</h3>
                            <p className="text-justify ">
                                Because Sarjapur is still being developed, there is constant construction causing heavy amounts of dust in the air due to road widening and other construction activities.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Dust Proofing:</b> Because of the heavy dust in Sarjapur, mere packing with packing tape is not sufficient. All goods are wrapped with industrial-strength cling film (stretch wrap), creating a moisture-proof seal around each item (e.g., sofa, microwave) to prevent dust from settling inside the upper-end fabric upholstery during transport.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The "School Bus" Hour and Delays Due to Rail Transport
                            </h2>
                            <p className="text-justify ">
                                Planning and Timing of your move is crucial to avoid encountering high volumes of traffic created by school children going home from school.
                            </p>

                            <h3 className="text-base font-bold my-4">Bangalore is Home to Some of the Best International Schools in Bengaluru</h3>
                            <p className="text-justify ">
                                Sarjapur Road is Home to Many of the Best International Schools Located on Sarjapur Road, including <b>TISB, Indus International School, and Greenwood High School</b>.
                            </p>

                            <h3 className="text-base font-bold my-4">Deadlock Between the Hours of 2 PM and 4 PM</h3>
                            <p className="text-justify ">
                                There will be Hundreds of School Buses on Sarjapur Road between <b>2:30 PM and 4:00 PM</b>. Attempting to Navigate the Dommasandra Circle and Making Your Way to Dommasandra Road in the Afternoon Between 3 PM and 4 PM Is a Recipe for Disaster.
                            </p>

                            <h3 className="text-base font-bold my-4">Our Strategy</h3>
                            <p className="text-justify ">
                                When it comes to Moves, We Will Only Give You Two Very Strict Timeframes:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>In the Early Morning Hours Before 7 AM:</b> To finish your Move before School Buses begin to Leave Their Stoppages.</li>
                                <li><b>Late Morning - 10:30 AM:</b> Leaving your Home While Students Are In School, and You Avoid The School Dispersal Window.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Carmelaram Railway Crossing - The Most Highly Notified Bottleneck on this Route</h3>
                            <p className="text-justify ">
                                The Carmelaram Railway Crossing is the Most Notorious Bottleneck on this Route When Railcrossings Occur, the Average Delay for an Individual Moving Off the Route due to Available Traincrossing is 20+ minutes. Any Scheduled Move That Crosses the Railtrack Will Include An Additional 45 Minutes of Buffer Time On The Delivery Timeframe. Alternate Routes Will Be Used through <b>Gunjur or Varthur</b> for Your Scheduled Move If the Railway Crossing is Constricted.
                            </p>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl my-5  font-semimedium">
                                The 3-Step Moving Timeline for Sarjapur Township
                            </h2>

                            <h3 className="text-base font-bold my-4">Phase 1: The "Township Check" (One Week Before Moving)</h3>
                            <p className="text-justify ">
                                Townships have very strict procedures. What do you need to do? To begin with, please visit your Facility Management (FM) Office. Ask two questions to receive the necessary information regarding your move on the day of loading/unpacking:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li>What is the maximum truck height for unloading in the basement? (This is very important.)</li>
                                <li>Are heavy vehicle movements permitted on Sundays? (Some townships will not allow these movements or will enforce fines.)</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Phase 2: The "Service Road" Scout (Twenty-four Hours Before Moving)</h3>
                            <p className="text-justify ">
                                The service roads in Sarjapur are frequently blocked by parked taxis or construction materials. What do we do?
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li>We will send our driver twenty-four hours before we load/unload to check the entrance to your block. If the service road is blocked, we will create a roadside halt plan using safety cones so we can use the main road without obstructing traffic.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Phase 3: Moving Day (D-Day)</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Morning:</b> Arrive by <b>eight a.m.</b> to avoid the morning shift at the Wipro office.</li>
                                <li><b>Packing:</b> We will double-wrap your mattresses and sofas to prevent dust buildup.</li>
                                <li><b>Transporting:</b> We will drive defensively, avoiding potholes and speed bumps as we travel through the newly developed sections of the road.</li>
                                <li><b>Unpack:</b> All furniture will be reassembled after unloading, and we will bring back any packing debris created. Your new house will be left clean.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <WhyExpress />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Conclusion & FAQ
                            </h2>
                            <p className="text-justify text-base my-5">
                                Choose <b>Move It Solution</b> because you want to enjoy the lifestyle offered by the Sarjapur community and a life with connectivity. Your relocation should not be defined by the stress of having to drive through the traffic jams and the dust.
                                Move It Solution can help you with your relocation to a villa in Sompura or an apartment in or around Kaikondrahalli. With Move It Solution, you will find experienced staff who will help you with the logistics of moving and setting up your new home, so you can focus on starting your new life.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready to make your move? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a stress-free relocation!
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
                            <LocationSidebar slug="sarjapur-main-road" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

                            <div className="bg-white p-5 mt-5">
                                <h2 className="text-xl md:text-2xl   font-semimedium">
                                    Hire Affordable International Courier Services
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    Office movers New York city – Budget friendly services, fast
                                    delivery. Moving and delivery services do not stop even in the
                                    middle of night. That is why our customer representatives are
                                    on guard twenty four hours for all our clients to check on the
                                    whereabouts of their goods during movements.
                                </p>
                                <p className="text-justify text-base my-5">
                                    Take advantage of Move It Solution, the cheapest and reliable
                                    international courier service. We emphasize on affordability
                                    because we understand people have different budgets and we
                                    guarantee the delivery at the very minimum time possible.
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

            <FaqMain pageType="sarjapur" />
            <OurServices />
        </>
    );
};

export default page;
