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
    title: "Packers and Movers in Bellandur | Trusted Services",
    description: "Professional packers and movers in Bellandur offering safe packing, careful handling, secure transportation and smooth residential relocation services.",
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Bellandur</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Packers and Movers in Bellandur: Shifting in the Heart of the IT Corridor
                            </h2>
                            <p className="text-justify ">
                                The ORR (Outer Ring Road) is a well-documented nightmare of traffic throughout India, but there are ways of navigating around it that will save you time and money.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/bangalore.webp"
                                    alt="Packers and Movers in Bellandur"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                The major drawback of moving to the area is how congested the ORR is, especially during rush hour. Even though we're within minutes of all of these tech office spaces, it could easily take as long as 90 minutes to travel 3km, which adds an extra cost to your move. The additional hourly cost of having a moving crew sitting idle in traffic can add hundreds of dollars to your total move cost.
                            </p>

                            <p className="text-justify text-base my-5">
                                This is why you need an expert team that knows how to operate with military precision when relocating to Bellandur. An expert team has the knowledge and experience needed to identify alternate routes that can save hours of wasted time driving in congested areas.
                            </p>

                            <p className="text-justify text-base my-5">
                                To ease this stress and pressure, <b>Move It Solution</b> has specialized knowledge of Bellandur and uses its knowledge of alternative driving routes to get your household goods to the new address faster than you could do on your own.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Flooding and High Rise Moving
                            </h2>
                            <p className="text-justify ">
                                Let's talk about flooding. Flooding has created many issues for moving to Bellandur. Especially with the waterlogging happening around many low-lying apartments and along the waterbody.
                            </p>
                            <p className="text-justify text-base my-5">
                                Moving during the rainy season (<b>June to October</b>) has its own stress; residents do not want to deal with the risk of getting their cartons wet or having their trucks stuck in a flooded road.
                            </p>

                            <h3 className="text-base font-bold my-4">We're "Monsoon Verified"</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Elevating the Load:</b> All our goods are carried on hydraulic tail-lifts, making it impossible to have anything below ground level.</li>
                                <li><b>Waterproof Wrapping:</b> All cartons are wrapped in industrial plastic film. So when it pours, your books are safe.</li>
                                <li><b>Route Information:</b> We know the roads that will be flooded the quickest (such as when the Panathur Underpass floods), and as a result, we won't use those flooded roads during the rains.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Living in a Vertical Neighbourhood
                            </h2>
                            <p className="text-justify ">
                                Bellandur is a very vertical neighbourhood; neighbourhoods like <b>Sobha Marvella and Mantri Espana</b> house thousands of residents.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Service Lifts:</b> In a high-rise building, there will always be heavy use of the service lift, meaning that the lift will be constantly busy delivering goods.</li>
                                <li><b>Strategy:</b> We pre-book the lift slot with the Facility Manager and deploy additional workforce to speed up the loading process, thereby decreasing any chance of being stuck in the lift and consequently decreasing any chance of creating negative feelings towards your new community.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Importance of WFH Prioritization
                            </h2>

                            <h3 className="text-base font-bold my-4">Safeguarding Your Techie's Technology</h3>
                            <p className="text-justify ">
                                Bellandur has the greatest number of Software Engineers in Bangalore. Your House is an Office as well.
                            </p>
                            <p className="text-justify text-base my-5">
                                <b>Principal Priority for Work from Home ("WFH"):</b> You most likely have dual monitors, an ergonomic chair by Herman Miller, and perhaps a Server Rack (Your Technology cannot be packed into a generic box).
                            </p>

                            <h3 className="text-base font-bold my-4">Tech-Safe Packing Solutions</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li>Monitors are packaged in <b>Hard-Shell Cardboard with Anti-Static Bubble Wrap</b> (that's the best, safest packaging method).</li>
                                <li>Cables are bagged and tagged (like "Router - Living Room") to avoid having to search for connectivity on the day of your move-in.</li>
                                <li>Chairs are wrapped in <b>Protective Foam</b> to protect them from Caster Damage and Mesh Tear damage.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Weekend Constraints
                            </h2>
                            <p className="text-justify ">
                                Ring the Bell on Saturdays. Everyone in Bellandur works Monday through Friday; therefore, weekends are highly congested with movers.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Move Hack:</b> Avoid moving on Saturday Morning as service lifts will be clogged.</li>
                                <li><b>Our Recommendation:</b> Friday is the best move day - Most Techies can schedule a WFH day, and although the roads are busier, the Apartment Lifts are less congested than on weekends.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Three Steps to Moving from Bellandur
                            </h2>

                            <h3 className="text-base font-bold my-4">Step 1 — The Service Road Survey (One Week Before Moving Day)</h3>
                            <p className="text-justify ">
                                Service Roads on the ORR are often blocked by construction debris/parked cars, which hinders trucks from reaching their destination.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Action:</b> Check the Access Point to your Building. If you find yourself unable to reach your building due to Service Road blockages, we will arrange for the use of small Tata Ace vehicles to Shuttle Goods from the Main Road to the Main Lobby of your Building.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Step 2 — Gate Pass Protocol (48 Hours Before Moving Day!)</h3>
                            <p className="text-justify ">
                                Security in Bellandur Tech Corridor Apartments is Very Strict (similar to Airport Security).
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Task:</b> Obtain Signed Material Movement Pass. If you do not get this pass signed, then Security will NOT allow our truck access to the Basement area, and arguing with Security Representatives will cause delays on Moving Day.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Step 3 — Moving Day (D-Day)</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Morning:</b> Target Start Time = <b>8:00 AM</b> to beat the Office Rush Hour Traffic on the ORR.</li>
                                <li><b>Packing:</b> Quick Room-by-Room Packing to load the Truck before the Heat of the Afternoon arrives.</li>
                                <li><b>Transportation:</b> Use Internal Roads where possible between Kasavanahalli and Haralur to avoid congested Areas on the ORR.</li>
                                <li><b>Unloading:</b> Reassemble your Workstation First so that you may Log Into the system if needed.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <WhyExpress />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Conclusion
                            </h2>
                            <h3 className="text-base font-bold my-4">Reasons Why Residents in Bellandur Choose Move It Solution</h3>
                            <p className="text-justify text-base my-5">
                                You chose to move to Bellandur because of the convenience of being near your job and the amenities you want to use. Therefore, you should have an easy process to move. There should not be any worries about the traffic on Old Airport Road or the possibility of rain.
                                With localised knowledge of the area and the ability to handle both the water from the rains and the traffic during rush hour, <b>Move It Solution</b> can help you make your move to a high-rise building in Green Glen Layout, or to a gated community near the Sarjapur Signal.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready to relocate in Bellandur? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a seamless moving experience!
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

            <FaqMain pageType="bellandur" />
            <OurServices />
        </>
    );
};

export default page;
